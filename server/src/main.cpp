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

#include <windows.h>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <thread>
#include <chrono>

HBITMAP captureScreen(int width, int height) {
    HDC hScreenDC = GetDC(nullptr);
    HDC hMemoryDC = CreateCompatibleDC(hScreenDC);

    // Define a BITMAPINFO for a 32-bit DIB
    BITMAPINFO bi = {};
    bi.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    bi.bmiHeader.biWidth = width;
    bi.bmiHeader.biHeight = -height;  // Negative height for top-down DIB
    bi.bmiHeader.biPlanes = 1;
    bi.bmiHeader.biBitCount = 32;     // 32-bit color (ARGB)
    bi.bmiHeader.biCompression = BI_RGB;

    // Create a DIB section and select it into the memory DC
    void* pBits;
    HBITMAP hBitmap = CreateDIBSection(hMemoryDC, &bi, DIB_RGB_COLORS, &pBits, NULL, 0);
    SelectObject(hMemoryDC, hBitmap);

    // Copy the screen to the memory DC
    BitBlt(hMemoryDC, 0, 0, width, height, hScreenDC, 0, 0, SRCCOPY);

    // Cleanup
    DeleteDC(hMemoryDC);
    ReleaseDC(nullptr, hScreenDC);

    return hBitmap;
}

void applyColorMultiply(HBITMAP hBitmap, COLORREF color) {
    BITMAP bmp;
    GetObject(hBitmap, sizeof(BITMAP), &bmp);

    // Access the pixel data
    BITMAPINFO bi = {};
    bi.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    bi.bmiHeader.biWidth = bmp.bmWidth;
    bi.bmiHeader.biHeight = bmp.bmHeight;
    bi.bmiHeader.biPlanes = 1;
    bi.bmiHeader.biBitCount = 32; // ARGB

    HDC hMemoryDC = CreateCompatibleDC(NULL);
    void* pBits;
    HBITMAP hTempBitmap = CreateDIBSection(hMemoryDC, &bi, DIB_RGB_COLORS, &pBits, NULL, 0);
    SelectObject(hMemoryDC, hTempBitmap);

    // Copy bitmap data to a temporary bitmap to manipulate pixels
    BitBlt(hMemoryDC, 0, 0, bmp.bmWidth, bmp.bmHeight, GetDC(NULL), 0, 0, SRCCOPY);

    // Get the RGB components from the COLORREF
    BYTE rMultiplier = GetRValue(color);
    BYTE gMultiplier = GetGValue(color);
    BYTE bMultiplier = GetBValue(color);

    // Modify pixel data
    BYTE* pixels = static_cast<BYTE*>(pBits);
    for (int y = 0; y < bmp.bmHeight; ++y) {
        for (int x = 0; x < bmp.bmWidth; ++x) {
            // Calculate pixel index (BGRA format)
            int index = (y * bmp.bmWidth + x) * 4;
            pixels[index] = static_cast<BYTE>(pixels[index] * bMultiplier / 255); // Blue
            pixels[index + 1] = static_cast<BYTE>(pixels[index + 1] * gMultiplier / 255); // Green
            pixels[index + 2] = static_cast<BYTE>(pixels[index + 2] * rMultiplier / 255); // Red
        }
    }

    // Copy modified pixels back to the original bitmap
    HDC hOriginalDC = GetDC(NULL);
    SelectObject(hOriginalDC, hBitmap);
    BitBlt(hOriginalDC, 0, 0, bmp.bmWidth, bmp.bmHeight, hMemoryDC, 0, 0, SRCCOPY);

    // Cleanup
    DeleteObject(hTempBitmap);
    DeleteDC(hMemoryDC);
    ReleaseDC(NULL, hOriginalDC);
}

int main1() {
    // Seed the random number generator
    srand(static_cast<unsigned int>(time(nullptr)));

    // Get screen dimensions
    RECT desktop;
    GetWindowRect(GetDesktopWindow(), &desktop);
    int screenWidth = desktop.right;
    int screenHeight = desktop.bottom;

    // Capture the entire screen once
    HBITMAP screenshotBitmap = captureScreen(screenWidth, screenHeight);

    // Main loop
    while (true) {
        // Generate a random color
        COLORREF randomColor = RGB(rand() % 256, rand() % 256, rand() % 256);

        // Apply color multiplication
        applyColorMultiply(screenshotBitmap, randomColor);

        // Small delay (for example, every 2 seconds)
        std::this_thread::sleep_for(std::chrono::seconds(2));
    }

    DeleteObject(screenshotBitmap);
    return 0;
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
    //dvd();
    serversThread.join();

    //trollMessageBox();

    // std::cin >> variablequickrandomthing;

    //startServer();
    return 0;
}
