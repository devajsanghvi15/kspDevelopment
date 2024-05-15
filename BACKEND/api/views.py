from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Video
from .serializers import VideoSerializer
import os
import subprocess
from django.conf import settings
# views.py
import json
from django.http import JsonResponse
import os

def get_articles(request):
    json_path = './awareness/articles_summarised2.json'
    with open(json_path, 'r') as file:
        articles = json.load(file)
    return JsonResponse(articles, safe=False)

class VideoUploadView(APIView):
    def post(self, request):
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            video_path = os.path.join(settings.MEDIA_ROOT, serializer.data['file'])
            subprocess.Popen(["python", "/home/uday/Desktop/projectTry/BACKEND/code/run.py", video_path])
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
