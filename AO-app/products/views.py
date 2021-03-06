from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Products_sub

# Create your views here.

def categories(request):
    if request.method == 'GET':
        items = Product.objects.all()
        response = {'values' : {
                'title'  : 'Продукция',
                'slogan' : '',
                'items'  : [],
            }
        }
        for item in items:
            response['values']['items'].append(item.all())
        return JsonResponse(response)

def subs(request, name):
    if request.method == 'GET':
        all_items = Products_sub.objects.all()
        items = []
        for item in all_items:
            if item.category.title == name:
                items.append(item)
        response = {'values' : {
            'title' : items[0].category.title,
            'slogan': items[0].category.slogan,
            'items' : [],
        }}
        for item in items:
            response['values']['items'].append(item.all())
        return JsonResponse(response)
        
