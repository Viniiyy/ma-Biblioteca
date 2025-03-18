from rest_framework import viewsets
from bookstore.api import serializers
from bookstore import models
from drf_yasg.utils import swagger_auto_schema

class UsuarioViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UsuarioSerializer
    queryset = models.Usuario.objects.all()
    @swagger_auto_schema(
        operation_description="Lista todos os usuarios",
        responses={200: serializers.UsuarioSerializer(many=True)}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Cria um novo usuarios",
        responses={200: "Usuario criado com sucessp"}
    )
    def create(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Retorna o usuario conforme o ID",
        responses={200: "Usuario encontrado com sucesso"}
    )
    def retrive(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Altera o Usuario conforme Id e dados informados",
        responses={200: "Usuario alterado com sucesso"}
    )
    def update(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Deleta o Usuario",
        responses={200: "Usuario deletado com sucessp"}
    )
    def destroy(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)



class LivroViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.LivroSerializer
    queryset = models.Livro.objects.all()
    @swagger_auto_schema(
        operation_description="Lista todos os livros",
        responses={200: serializers.LivroSerializer(many=True)}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Cria um novo livro",
        responses={200: "Livro criado com sucessp"}
    )
    def create(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Retorna o livro conforme o ID",
        responses={200: "livro o encontrado com sucesso"}
    )
    def retrive(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Altera o livro conforme Id e dados informados",
        responses={200: "Livro alterado com sucesso"}
    )
    def update(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Deleta o livro",
        responses={200: "livro deletado com sucesso"}
    )
    def destroy(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

class EmprestimoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EmprestimoSerializer
    queryset = models.Emprestimo.objects.all()
    @swagger_auto_schema(
        operation_description="Lista todos os emprestimos",
        responses={200: serializers.EmprestimoSerializer(many=True)}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Cria um novo emprestimos",
        responses={200: "Usuario criado com emprestimo"}
    )
    def create(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Retorna o emprestimo conforme o ID",
        responses={200: "Emprestimo encontrado com sucesso"}
    )
    def retrive(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Altera o emprestimos conforme Id e dados informados",
        responses={200: "Emprestimo alterado com sucesso"}
    )
    def update(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Deleta o emprestimo",
        responses={200: "Emprestimo deletado com sucessp"}
    )
    def destroy(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

class CategoriaViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CategoriaSerializer
    queryset = models.Categoria.objects.all()
    @swagger_auto_schema(
        operation_description="Lista todos os usuarios",
        responses={200: serializers.CategoriaSerializer(many=True)}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Cria uma nova categoria",
        responses={200: "Categoria criada com sucesspo"}
    )
    def create(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Retorna o categoria conforme o ID",
        responses={200: "Categoria encontrado com sucesso"}
    )
    def retrive(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Altera a categoria conforme Id e dados informados",
        responses={200: "Categoria alterado com sucesso"}
    )
    def update(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    @swagger_auto_schema(
        operation_description="Deleta a categoria",
        responses={200: "categoria deletado com sucessp"}
    )
    def destroy(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)