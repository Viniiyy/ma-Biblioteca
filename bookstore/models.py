from django.db import models

# Create your models here.
class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    senha = models.CharField(max_length=100)
    cpf = models.CharField(max_length=11)

class Categoria(models.Model):
    categoria = models.CharField(max_length=100)

class Livro(models.Model):
    titulo = models.CharField(max_length=50)
    descricao = models.TextField()
    dataEntrada = models.DateField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    situacao = models.CharField(max_length=15)

class Emprestimo(models.Model):
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    data_emprestimo = models.DateField()
    data_devolucao = models.DateField()