from pytube import YouTube

url = 'https://www.youtube.com/watch?v=lf9oYtw488Y'
yt = YouTube(url)
stream = yt.streams.filter(progressive=True, file_extension='mp4').get_highest_resolution()
stream.download()

