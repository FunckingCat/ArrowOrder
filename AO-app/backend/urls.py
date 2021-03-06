"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/menu/', include('menu.urls')),
    re_path(r'^api/wiki/', include('wiki.urls')),
    re_path(r'^api/products/', include('products.urls')),
    re_path(r'^api/constructor/', include('constructor.urls')),
    re_path(r'^api/details/', include('conOrderDetails.urls')),
    re_path(r'^api/productCard/', include('productCard.urls')),
    re_path(r'^api/avalDates/', include('datesManager.urls')),
    re_path(r'^api/postOrder/', include('orderManager.urls')),
    re_path(r'^api/logger/', include('logger.urls')),
    re_path(r'^(?!api)(?!admin)[\w\W]*', views.index),
]
