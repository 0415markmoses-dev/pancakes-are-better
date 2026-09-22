import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'BugTrackingSystem.settings')

from BugTrackingSystem.wsgi import application

app = application
