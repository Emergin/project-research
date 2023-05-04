from moviepy.editor import *

# Load audio and image
audio = AudioFileClip('/home/trubel/Music/tatiana.mp3')
image = ImageClip('/home/trubel/Pictures/smoke.jpg').set_duration(audio.duration)

# Combine audio and image
video = image.set_audio(audio)

# Export video
video.write_videofile('output_video.mp4', fps=24)

