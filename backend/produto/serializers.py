from rest_framework import serializers
from produto.models import Produto


class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ['id', 'nome', 'descricao', 'imagem', 'categoria']

class ProdutoEmailSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nome = serializers.CharField()
    descricao = serializers.CharField()
    imagem = serializers.URLField(required=False, allow_blank=True)  # Aceita URLs ou pode ser vazio
    categoria = serializers.CharField()
    quantidade = serializers.IntegerField()  # Adicionado para o e-mai
