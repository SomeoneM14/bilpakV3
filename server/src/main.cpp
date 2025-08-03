// main.cpp
//#include "server.hpp"
#include "commands.hpp"
#include "server.hpp"
#include <windows.h>
#include <iostream>
#include <thread>


using namespace bilpakServers;
using namespace bilpakCommands;

void updateBilpak() {
    //download new bilpak release from github, and install it, then kill and remove the old bilpak
}

void manageBilpak() {}

#include <vector>
#include <cstdlib>
#include <ctime>
#include <thread>
#include <chrono>

int update() {
    //update bilpak
    updateBilpak();
    //more functionallity may be needed later
    return 0;
}

int main(int argc, char** argv) {
    // Start the server, listen for connections, and handle commands
    if (argc == 1)
    {
        std::cout << "debug: beggining" << std::endl;
        std::thread serversThread(openServers);
        serversThread.join();
    }
    else if (strcmp(argv[1], "update"))
    {
        update();
    }

    return 0;
}
