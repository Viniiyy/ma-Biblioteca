from django.db import models
import uuid
import os
from django.utils.deconstruct import deconstructible

# Create your models here.
class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    senha = models.CharField(max_length=100)
    cpf = models.CharField(max_length=11)

class Categoria(models.Model):
    categoria = models.CharField(max_length=100)

@deconstructible
class RenameImage(object):
    def __init__(self, subdir = 'images'):
        self.subdir = subdir
    def __call__(self, instance, filename):
        extension = filename.split('.')[-1]
        new_name = f"{uuid.uuid4()}.{extension}"
        return os.path.join(self.subdir, new_name)

class Livro(models.Model):
    imagem = models.ImageField(upload_to=RenameImage('images/'))
    titulo = models.CharField(max_length=50)
    descricao = models.TextField()
    dataEntrada = models.DateField()
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)
    situacao = models.CharField(max_length=15)

class Emprestimo(models.Model):
    livro = models.ForeignKey(Livro, on_delete=models.DO_NOTHING)
    usuario = models.ForeignKey(Usuario, on_delete=models.DO_NOTHING)
    data_emprestimo = models.DateField()
    data_devolucao = models.DateField()