cmake_minimum_required(VERSION 3.10)

# Project setup
project(my_project)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
option(BUILD_SHARED_LIBS "Build shared libraries" OFF)


include(FetchContent)
FetchContent_Declare(SFML
    GIT_REPOSITORY https://github.com/SFML/SFML.git
    GIT_TAG 2.6.x
    GIT_SHALLOW ON
    EXCLUDE_FROM_ALL
    SYSTEM)
FetchContent_MakeAvailable(SFML)

# Include directories
include_directories(include)
include_directories(thirdparty/asio)
include_directories(thirdparty/crow)

# Source files
file(GLOB_RECURSE SOURCES "src/*.cpp")

# Add executable
add_executable(bilpak ${SOURCES})

target_link_libraries(bilpak PRIVATE sfml-graphics)

# Link libraries
if (WIN32)
    target_link_libraries(bilpak PRIVATE ws2_32 mswsock)  # Winsock libraries
     add_custom_command(
        TARGET bilpak
        COMMENT "Copy OpenAL DLL"
        PRE_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${SFML_SOURCE_DIR}/extlibs/bin/$<IF:$<EQUAL:${CMAKE_SIZEOF_VOID_P},8>,x64,x86>/openal32.dll $<TARGET_FILE_DIR:bilpak>
        VERBATIM)
else()
    target_link_libraries(bilpak PRIVATE pthread)
endif()
