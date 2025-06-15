from produto.models import Produto
from produto.serializers import ProdutoSerializer
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend 
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class ProdutoViewSet(viewsets.ModelViewSet):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Produto.objects.all().order_by("id")
    serializer_class = ProdutoSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['nome']
    search_fields = ['nome', 'categoria']


    def get_queryset(self):
        queryset = super().get_queryset()
        categorias_param = self.request.query_params.get('categorias')  

        if categorias_param:
            categorias = categorias_param.split(',')
            queryset = queryset.filter(categoria__in=categorias)

        return queryset