from moviepy.editor import *

# specify the path to the video file
video_path = "/home/trubel/Downloads/new/afrobeat2022.mp4"

# create a VideoFileClip object
video_clip = VideoFileClip(video_path)

# extract the audio from the video clip
audio_clip = video_clip.audio

# specify the path to save the audio file
audio_path = "/home/trubel/Downloads/new/afrobeat2022.mp3"

# write the audio clip to a file
audio_clip.write_audiofile(audio_path)

