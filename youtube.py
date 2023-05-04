# pip  install pytube
from pytube import YouTube

def progress_function(chunk, file_handle, bytes_remaining):
    print("Downloaded: {:.2f} MB".format((file_handle.tell() - chunk) / (1024 * 1024)))

video_urls = [
    "https://www.youtube.com/watch?v=lPbfnAuAjIM"
    "https://www.youtube.com/watch?v=3BI9N_k7G44"
    "https://www.youtube.com/watch?v=IuHkTQORfDg"
    "https://www.youtube.com/watch?v=jSp4pdJbGbU"
    "https://www.youtube.com/watch?v=JV7vDLv4DGE"
    "https://www.youtube.com/watch?v=EmgGD75sw6M"
    ]

for url in video_urls:
    yt = YouTube(url)
    stream = yt.streams.filter(progressive=True, file_extension='mp4').get_by_resolution('720p')
    stream.download(r'/home/trubel/Downloads/new')
    print('Downloaded', url)

