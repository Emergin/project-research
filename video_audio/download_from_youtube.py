import pytube
import moviepy.editor as mp

# Define the YouTube video URL
video_url = "https://www.youtube.com/watch?v=Vc75pr0UteQ"

# Create a Pytube YouTube object
yt = pytube.YouTube(video_url)

# Get the first available stream with both video and audio
stream = yt.streams.filter(progressive=True).first()

# Download the video to a local file
stream.download(filename="video.mp4")

# Load the video as a MoviePy clip
video_clip = mp.VideoFileClip("video.mp4")

# Extract the audio and save it as an MP3 file
audio_clip = video_clip.audio
audio_clip.write_audiofile("audio.mp3")

# Clean up temporary files
video_clip.close()
audio_clip.close()

