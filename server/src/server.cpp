#include <winsock2.h>
#include "commands.hpp"
#include <cmath>
#include <condition_variable>
#include <fstream>
#include <iostream>
#include <mutex>
#include <sstream>
#include <thread>
#include <vector>
#include <windows.h>



//#include <boost/iostreams/filtering_streambuf.hpp>
//#include <boost/iostreams/filter/gzip.hpp>
//#include <boost/iostreams/copy.hpp>

// Web server using Crow
#include <asio.hpp>
#include <crow.h>


// Socket server using ASIO

int numLen(int n) {
    int len = 0;
    while (n != 0)
    {
        len++;
        n /= 10;
    }
    return len;
}
inline int Max(int a, int b) { return a > b ? a : b; }
inline int Min(int a, int b) { return a < b ? a : b; }
int        Pow(int base, int exponent) {
    if (base == 0 || base == 1)
        return base;
    if (exponent == 0)
        return 1;
    int result = base;
    while (exponent > 1)
    {
        result *= base;
        exponent--;
    }
    return result;
}

long compactInts(int a, int b) {
    long newInt = 0;
    int  max    = Max(a, b);
    int  min    = Min(a, b);
    int  len    = numLen(max);
    newInt += max * (Pow(10, len));
    newInt += min;
    //std::cout << "debug: compacted int: " << newInt << " " << max << " ************ " << min<< std::endl;
    return newInt;
}


using namespace std;
using namespace crow;
using namespace asio;

using namespace bilpakCommands;



std::vector<BYTE> HBITMAPToVector(HBITMAP hBitmap) 
{
    BITMAP bmp;
    GetObject(hBitmap, sizeof(BITMAP), &bmp);  // Get bitmap info

    // Create a vector to hold the pixel data
    std::vector<BYTE> imageBytes(bmp.bmWidthBytes * bmp.bmHeight);

    // Create a DIB section to retrieve the pixel data
    BITMAPINFOHEADER bi;
    bi.biSize          = sizeof(BITMAPINFOHEADER);
    bi.biWidth         = bmp.bmWidth;
    bi.biHeight        = bmp.bmHeight;
    bi.biPlanes        = 1;
    bi.biBitCount      = 32;  // Assuming a 32-bit bitmap
    bi.biCompression   = BI_RGB;
    bi.biSizeImage     = 0;
    bi.biXPelsPerMeter = 0;
    bi.biYPelsPerMeter = 0;
    bi.biClrUsed       = 0;
    bi.biClrImportant  = 0;


    // Create a device context
    HDC hdc = GetDC(NULL);
    if (!hdc)
    {
        std::cerr << "Error getting device context." << std::endl;
        return {};
    }

    // Create a DIB section
    void*   pBits = nullptr;
    HBITMAP hDIB  = CreateDIBSection(hdc, (BITMAPINFO*) &bi, DIB_RGB_COLORS, &pBits, NULL, 0);
    if (!hDIB)
    {
        std::cerr << "Error creating DIB section." << std::endl;
        ReleaseDC(NULL, hdc);
        return {};
    }

    // Select the bitmap into the DC
    HGDIOBJ oldBitmap = SelectObject(hdc, hDIB);

    // Copy the bitmap data
    if (GetDIBits(hdc, hBitmap, 0, bmp.bmHeight, pBits, (BITMAPINFO*) &bi, DIB_RGB_COLORS) == 0)
    {
        std::cerr << "Error getting DIB bits." << std::endl;
        SelectObject(hdc, oldBitmap);
        DeleteObject(hDIB);
        ReleaseDC(NULL, hdc);
        return {};
    }

    // Copy the pixel data to the vector
    std::memcpy(imageBytes.data(), pBits, imageBytes.size());

    // Clean up
    SelectObject(hdc, oldBitmap);
    DeleteObject(hDIB);
    ReleaseDC(NULL, hdc);

    return imageBytes;
}


std::string load_html_template(const std::string& path) {
    std::ifstream file(path);

    if (!file)
    {
        std::cerr << "Error: Could not open file at " << path << std::endl;
        return "";
    }

    std::stringstream buffer;
    buffer << file.rdbuf();

    if (buffer.str().empty())
    {
        std::cerr << "Error: File is empty or failed to read content." << std::endl;
    }

    return buffer.str();
}


class UdpServer 
{
   public:
    UdpServer(io_context& io_context, unsigned short port) : socket_(io_context, ip::udp::endpoint(ip::udp::v4(), port)) 
    {
        this->port = port;
        //while(true)send_image();
    }
    /*
        function first gets the sceenshot and converts it to vector format,
        then it sends the data size to the client followed by the data itself
        */
    void set_addr(std::string address)
    {
        this->addr=address;
    }
    void send_image() 
    {
        printf("starting image\n");
        //std::cout << "debug: send_image start" << std::endl;
        const int         width      = 800;
        const int         height     = 550;
        HBITMAP           image      = bilpakCommands::captureScreen(width, height);
        std::vector<BYTE> imageBytes = HBITMAPToVector(image);
        //std::cout << "debug: after image make" << std::endl;

        /*std::vector<BYTE> imageSize;
            imageSize.push_back(imageBytes.size());*/
        //int imageSize = htonl(static_cast<int>(imageBytes.size()));
        int imageSize = htonl(static_cast<long>(compactInts(width, height)));
        //std::cout << imageBytes.size() << std::endl;
        //std::cout << imageSize.size() << std::endl;
        /*int size = htonl(imageBytes.size());
            char data[sizeof(int)];
            memcpy(data, &size, sizeof(int));*/

        ip::udp::endpoint remote_endpoint(asio::ip::address::from_string(this->addr),this->port);  // Change to client's IP and port
        socket_.send_to(buffer(&imageSize, sizeof(int)), remote_endpoint);
        printf("size send \n");
        /*socket_.send_to(buffer(imageBytes.data(),imageBytes.size()), remote_endpoint);
            std::cout << "Image sent." << std::endl;*/
        size_t       offset        = 0;
        const size_t maxPacketSize = 65507;  // UDP max payload size
        while (offset < imageBytes.size())
        {
            size_t chunkSize = std::min(maxPacketSize, imageBytes.size() - offset);
            socket_.send_to(buffer(imageBytes.data() + offset, chunkSize), remote_endpoint);
            offset += chunkSize;
            std::cout << "offset: " << offset << std::endl;
            //std::cout << "debug: before UdpServer" << std::endl;
        }
    }

    ip::udp::socket socket_;
    std::string addr;
    unsigned short  port;
};

crow::SimpleApp crowApp;

namespace bilpakServers {
// Web server thread function
void webServerThread() {

    crowApp.route_dynamic("/")([] { return load_html_template("src/templates/index.html"); });

    crowApp.route_dynamic("/api/command")([](const crow::request& req) {
        std::cout << req.body << std::endl;
        runCommand(req.body);
        return "0";
    });

    crowApp.port(10103).multithreaded().run();
}

// Socket server thread function
class Client: public std::enable_shared_from_this<Client> {
   public:
    Client(asio::io_context& io_context) : socket_(io_context),udpImageSender(io_context,8878) {}

    asio::ip::tcp::socket& socket() { return socket_; }

    void start() {
        // Start the client
        std::cout << "Client started." << std::endl;
        udpImageSender.set_addr(socket_.remote_endpoint().address().to_string());
        asio::error_code ec;
        while(true)
        {
            readMessage(ec);
            if (ec)
            {
                socket_.close();
                break;
            }
        }
    }

    void readMessage(asio::error_code ec) {
        std::cout<<"listening..."<<std::endl;
        auto self(shared_from_this());  // Create a shared pointer to this object
        socket_.read_some(asio::buffer(buffer_),ec);
        std::string message(buffer_.data(),buffer_.size());
        std::cout << "Received message: " << message << std::endl;
        if (message=="image" || 1)
        {
            printf("hello there\n");
            this->udpImageSender.send_image();
        }
        else
            processCommand(message);
        buffer_.fill(0);
        //readMessage();  // Read the next message
    }

    private:
    UdpServer udpImageSender;
    asio::ip::tcp::socket  socket_;
    std::array<char, 1024> buffer_;
};

class Server {
   public:
    Server(asio::io_context& io_context, unsigned short port) :
        io_context_(io_context),
        acceptor_(io_context, asio::ip::tcp::endpoint(asio::ip::tcp::v4(), port)) {}

    void startAccept() {
        while (true)
        {
            try {
                auto client = std::make_shared<Client>(io_context_);
                //acceptor_.async_accept(client->socket(), [this, client](const asio::error_code& ec) {
                acceptor_.accept(client->socket());
                std::cout << "Accepted new client connection." << std::endl;
                //std::thread clientStart(&Client::start,client);  // Accept the next client
                client->start();
            //});
            }
            catch (std::exception& e)
            {
                std::cout<<e.what()<<std::endl;
            }
        }
    }

    private:
        asio::io_context&                  io_context_;
        asio::ip::tcp::acceptor            acceptor_;
        std::list<std::shared_ptr<Client>> clients_;
};


int socketServerThread() {
    try
    {
        asio::io_context io_context;
        Server           server(io_context, 12345);
        server.startAccept();
        io_context.run();
    } catch (std::exception& e)
    { std::cerr << "Error: " << e.what() << std::endl; }

    return 0;
}



int openServers() {
    // Create threads for web server and socket server
    std::cout << "debug: before thread start" << std::endl;
    std::thread webThread(webServerThread);
    std::thread socketThread(socketServerThread);
    std::cout << "debug: after thread start" << std::endl;
    //try
    //{
    asio::io_context io_context;
    std::cout << "debug: before UdpServer" << std::endl;
    //UdpServer server(io_context, 1234);  // Server port
    io_context.run();
    //} catch (std::exception& e)
    //{ std::cerr << "Error: " << e.what() << std::endl; }


    // Wait for threads to finish
    webThread.join();
    socketThread.join();

    return 0;
}
}


//300350
