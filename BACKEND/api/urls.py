# urls.py

from django.urls import path
from .views import get_articles,VideoUploadView

urlpatterns = [
    path('get_articles/', get_articles, name='get_articles'),  # Add comma here
    path('upload_video/', VideoUploadView.as_view(), name='upload_video'),
]
