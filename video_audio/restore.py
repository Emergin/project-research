import os
import time

# specify the path to the directory you want to search
path = '/path/to/usb/drive/'

# specify the time threshold (in seconds)
time_threshold = 60 * 60 * 24 # 24 hours

# list all files and directories in the specified path
for entry in os.scandir(path):
    if entry.is_file():
        # check the modification time of the file
        mtime = os.path.getmtime(entry.path)
        if time.time() - mtime < time_threshold:
            print(f"Recently deleted file: {entry.name}")

