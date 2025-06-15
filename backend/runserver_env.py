import os
from dotenv import load_dotenv
import subprocess


for var in ['DB_USER', 'DB_PASSWORD', 'DB_NAME', 'DB_HOST', 'DB_PORT']:
    if var in os.environ:
        del os.environ[var]


dotenv_path = os.path.join(os.getcwd(), '.env')
load_dotenv(dotenv_path, override=True)

subprocess.run(['python', 'manage.py', 'runserver'])
