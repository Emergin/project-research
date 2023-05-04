# pip install pytube
from pytube import YouTube

def progress_function(chunk, file_handle, bytes_remaining):
    print("Downloaded: {:.2f} MB".format((file_handle.tell() - chunk) / (1024 * 1024)))

video_url ="https://www.youtube.com/watch?v=L-aA6rlY27A"
yt = YouTube(video_url)

# Select the highest resolution progressive stream
stream = yt.streams.filter(progressive=True).order_by('resolution').desc().first()

# Download the video
stream.download(output_path='/home/trubel/Downloads/new', filename_prefix='')

print('Downloaded:', yt.title)

