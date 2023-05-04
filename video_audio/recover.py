import pyrecover

# specify the path to the flash drive you want to recover data from
path = '/run/user/1000/gvfs/mtp:host=INFINIX_MOBILITY_LIMITED_Infinix_SMART_5_06871371A5105820/Internal shared storage/Download'

# specify the output directory for the recovered files
output_dir = '/home/trubel/Music'

# initialize the data recovery object
recovery = pyrecover.PyRecover()

# scan the drive for recoverable data
recovery.scan(path)

# recover the data to the specified output directory
recovery.recover(output_dir)

