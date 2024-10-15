cmake_minimum_required(VERSION 3.10)

# Project setup
project(my_project)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Include directories
include_directories(include)
include_directories(thirdparty/asio)
include_directories(thirdparty/crow)

# Source files
file(GLOB_RECURSE SOURCES "src/*.cpp")

# Add executable
add_executable(my_program ${SOURCES})

# Link libraries
if (WIN32)
    target_link_libraries(my_program PRIVATE ws2_32 mswsock)  # Winsock libraries
else()
    target_link_libraries(my_program PRIVATE pthread)
endif()
