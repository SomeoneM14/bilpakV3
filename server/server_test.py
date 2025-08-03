import socket
import requests
import numpy as np
from PIL import Image
import io
import struct
import numpy as np
import cv2
import time
import threading

def receive_images(server_ip, server_port):
    height = 200
    width = 200
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        s.bind((server_ip, server_port))
        print("Listening for images...")

        #while True:
        if 1:
           
            # Receive image size
            length_data, addr = s.recvfrom(8)
            print("test")
            length = str(struct.unpack("!I", length_data)[0])
            print(f"Image size: {length} bytes")
            print(len(length)/2-1)
            width=int(length[0:int(len(length)/2)])
            height=int(length[int(len(length)/2)-1::])
            print(width,height)

            length=width*height*4
            # Receive image data
            received_data = bytearray()
            now=time.time()
            while len(received_data) < length:
                chunk, addr = s.recvfrom(65507)  # UDP max payload
                received_data.extend(chunk)
                print(f"Received {len(received_data)}/{length} bytes")
                if (time.time()-now>10):return

            # Process the image
            try:
                print("Reconstructing image...")
                pixel_data = np.frombuffer(received_data, dtype=np.uint8).reshape((height, width, 4)) 
                
                rgb_data = pixel_data[..., [2,1,0]]  # Drop alpha channel
                img = Image.fromarray(rgb_data, 'RGB')
                img = img.transpose(Image.FLIP_TOP_BOTTOM)
                #img.show()
            except:
                print("Reconstructing image...")
                pixel_data = np.frombuffer(received_data, dtype=np.uint8).reshape((height, width, 4))
                
                rgb_data = pixel_data[..., [2,1,0]]  # Drop alpha channel
                img = Image.fromarray(rgb_data, 'RGB')
                img = img.transpose(Image.FLIP_TOP_BOTTOM)
                #img.show()
            cv_image=cv2.cvtColor(np.array(img),cv2.COLOR_RGB2BGR)
            cv2.imshow('image',cv_image)
            cv2.waitKey(1000)



def main():
    # Create a TCP/IP socket
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Connect to the server on localhost and port 12345
    server_address = ('localhost', 12345)
    client_socket.connect(server_address)
    while True:
        #client_socket.sendall("image".encode())
        client_socket.sendall("image".encode())
        #threading.Thread(target=receive_images,args=('127.0.0.1', 8878)).start()
        receive_images('127.0.0.1', 8878)
        time.sleep(1)
    
    try:
        while False:
            # Send data to the server
            message = input()
            print(f'Sending: {message}')
            client_socket.sendall(message.encode())

            # Receive response from the server
        

    finally:
        # Close the socket
        client_socket.close()
    

if __name__ == '__main__':
    #requests.get("http://127.0.0.1:8080/api/command",data="test")
    main()