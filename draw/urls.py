# chat/urls.py
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^small$', views.small, name='small'),
    url(r'^large$', views.large, name='large'),
    url(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
]
