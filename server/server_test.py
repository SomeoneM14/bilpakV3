import socket

def main():
    # Create a TCP/IP socket
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Connect to the server on localhost and port 12345
    server_address = ('localhost', 12345)
    client_socket.connect(server_address)
    
    try:
        while True:
            # Send data to the server
            message = input()
            print(f'Sending: {message}')
            client_socket.sendall(message.encode())

            # Receive response from the server
        

    finally:
        # Close the socket
        client_socket.close()

if __name__ == '__main__':
    main()