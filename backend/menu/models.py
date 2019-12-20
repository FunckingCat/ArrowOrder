from django.db import models

# Create your models here.

class MainPageContent(models.Model):

    title = models.CharField(max_length = 200, verbose_name = 'Заголовок', blank = True)
    text = models.TextField(verbose_name = 'Текст')
    image = models.CharField(max_length = 500, verbose_name = 'Ссылка на изображение')

    def __str__(self):
        return '{} --- {}...'.format(self.title, self.text[0:40])

    def all(self):
        return {
            'title' : self.title,
            'text' : self.text,
            'image' : self.image
        }

class BurgerMenuItems(models.Model):

    title = models.CharField(max_length = 100, verbose_name = 'Заголовок')
    href = models.CharField(max_length = 100, verbose_name = 'Ссылка')

    def __str__(self):
        return '{} --- {}'.format(self.title,self.href)

    def all(self):
        return{
            'title' : self.title,
            'href' : self.href
        }
    