// #include <windows.h>
// #include <iostream>
#include <string>
#include <windows.h>
#include <iostream>
#include <cstdlib>  // for commands (system() method)
#include <sstream>
#include <vector>
#include <thread>
#include <chrono>  // for sleep
#include <Windows.h>
#include <ctime>


namespace bilpakCommands {
void processCommand(const std::string& command);

void rotateScreen();

void disableMouse();

void enableMouse();

void runCommand(const std::string& command);

void changeConsoleColor();

void invertColors();

void trollMessageBox();

void hideMouseCursor();

int dvd();

HBITMAP captureScreen(int width, int height);
}