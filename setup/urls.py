"""
URL configuration for setup project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.urls import path, include
from bookstore.api import viewsets
from rest_framework import routers

route = routers.DefaultRouter()
route.register(r'Usuarios', viewsets.UsuarioViewSet, basename='Usuarios')
route.register(r'Livros', viewsets.LivroViewSet, basename='Livros')
route.register(r'Emprestimos', viewsets.EmprestimoViewSet, basename='Emprestimos')
route.register(r'Categorias', viewsets.CategoriaViewSet, basename='Categorias')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
]
