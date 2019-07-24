from django.shortcuts import render
from django.utils.safestring import mark_safe
import json

def index(request):
    return render(request, 'draw/index.html', {})
  
def small(request):
    return render(request, 'draw/small.html', {})
  
def large(request):
    return render(request, 'draw/large.html', {})

def room(request, room_name):
    room_name;
      
    if room_name == 'room':
      return render(request, 'draw/room.html', {'room_name_json': mark_safe(json.dumps(room_name))
                                                
#     elif room_name == 'room2':
#       return render(request, 'draw/room2.html', {'room_name_json': mark_safe(json.dumps(room_name))
    })