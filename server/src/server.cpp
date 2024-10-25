#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <asio.hpp>
#include "commands.hpp"
#include <fstream>
#include <sstream>

// Web server using Crow
#include <crow.h>

// Socket server using ASIO

using namespace std;
using namespace crow;
using namespace asio;

using namespace bilpakCommands;


std::string load_html_template(const std::string& path) {
    std::ifstream file(path);
    std::stringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

namespace bilpakServers
{
// Web server thread function
void webServerThread() {
    Crow crow;

    crow.route("/")([]{
        return load_html_template()
    })

    crow.port(8080).multithreaded().run();
}

// Socket server thread function
class Client : public std::enable_shared_from_this<Client> {
public:
    Client(asio::io_context& io_context) : socket_(io_context) {}

    asio::ip::tcp::socket& socket() { return socket_; }

    void start() {
        // Start the client
        std::cout << "Client started." << std::endl;
        readMessage();
    }

    void readMessage() {
        auto self(shared_from_this()); // Create a shared pointer to this object
        socket_.async_read_some(asio::buffer(buffer_),
            [this, self](const asio::error_code& ec, std::size_t length) {
                if (!ec) {
                    std::string message(buffer_.data(), length);
                    std::cout << "Received message: " << message << std::endl;
                    processCommand(message);
                    readMessage(); // Read the next message
                } else {
                    std::cerr << "Error: " << ec.message() << std::endl;
                }
            });
    }

private:
    asio::ip::tcp::socket socket_;
    std::array<char, 1024> buffer_;
};

class Server {
public:
    Server(asio::io_context& io_context, unsigned short port)
        : io_context_(io_context), acceptor_(io_context, asio::ip::tcp::endpoint(asio::ip::tcp::v4(), port)) {}

    void startAccept() {
        auto client = std::make_shared<Client>(io_context_);
        acceptor_.async_accept(client->socket(),
            [this, client](const asio::error_code& ec) {
                if (!ec) {
                    std::cout << "Accepted new client connection." << std::endl;
                    clients_.push_back(client);
                    client->start();
                    startAccept(); // Accept the next client
                } else {
                    std::cerr << "Error: " << ec.message() << std::endl;
                }
            });
    }

private:
    asio::io_context& io_context_;
    asio::ip::tcp::acceptor acceptor_;
    std::list<std::shared_ptr<Client>> clients_;
};


int socketServerThread() {
    try {
        asio::io_context io_context;
        Server server(io_context, 12345);
        server.startAccept();
        io_context.run();
    } catch (std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return 0;
}

int openServers() {
    // Create threads for web server and socket server
    std::thread webThread(webServerThread);
    std::thread socketThread(socketServerThread);

    // Wait for threads to finish
    webThread.join();
    socketThread.join();

    return 0;
}
}