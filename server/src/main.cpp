// main.cpp
//#include "server.hpp"
#include "commands.hpp"
#include "server.hpp"
#include <iostream>
#include <thread>



using namespace bilpakServers;
using namespace bilpakCommands;

void updateBilpak()
{
    //download new bilpak release from github, and install it, then kill and remove the old bilpak
}

void manageBilpak()
{

}

int main(int argc,char** argv) {
    // Start the server, listen for connections, and handle commands
    std::thread serversThread(openServers);
    // while (true)
    // {
    //     invertColors();
    // }
    // runCommand("tree");
    // int variablequickrandomthing;
    dvd();
    serversThread.join();

    //trollMessageBox();

    // std::cin >> variablequickrandomthing;

    //startServer();
    return 0;
}
