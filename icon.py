import subprocess

devices = subprocess.check_output(['iw', 'dev']).decode().split('\n')
for device in devices:
    if 'Interface' in device:
        print(device)

