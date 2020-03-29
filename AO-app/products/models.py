from django.db import models

# Create your models here.
class Product(models.Model):

    class Meta:
        verbose_name = 'Элемент меню первого уровня'
        verbose_name_plural = 'Элементы меню первого уровня'

    title  = models.CharField(max_length = 50)
    href   = models.CharField(max_length = 80, default = '/Products/')
    image  = models.CharField(max_length = 80, default = '/static/stock/')
    slogan = models.TextField(blank = True)

    def __str__(self):
        return self.title
    
    def all(self):
        return {
            'id'    : self.id,
            'title' : self.title,
            'image' : self.image,
            'href'  : self.href,
        }

class Products_sub(models.Model):

    class Meta:
        verbose_name = 'Элемент меню второго уровня'
        verbose_name_plural = 'Элементы меню второго уровня'

    title  = models.CharField(max_length = 50)
    href   = models.CharField(max_length = 80,
    default = '/')
    image  = models.CharField(max_length = 80,
    default = '/static/stock/')
    category = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return '{} --- {}'.format(self.title, self.category)
    
    def all(self):
        return {
            'id'    : self.id,
            'title' : self.title,
            'image' : self.image,
            'href'  : self.href,
        }