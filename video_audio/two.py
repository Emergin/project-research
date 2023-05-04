import youtube_dl

video_url = "https://www.youtube.com/watch?v=Vc75pr0UteQ"

ydl_opts = {
    'outtmpl': '/home/trubel/Downloads/new/%(title)s.%(ext)s',
}
with youtube_dl.YoutubeDL(ydl_opts) as ydl:
    ydl.download([video_url])
