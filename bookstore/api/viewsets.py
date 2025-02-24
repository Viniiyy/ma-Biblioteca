from rest_framework import viewsets
from bookstore.api import serializers
from bookstore import models

class UsuarioViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UsuarioSerializer
    queryset = models.Usuario.objects.all()

class LivroViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.LivroSerializer
    queryset = models.Livro.objects.all()

class EmprestimoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EmprestimoSerializer
    queryset = models.Emprestimo.objects.all()

class CategoriaViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CategoriaSerializer
    queryset = models.Categoria.objects.all()