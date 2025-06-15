from django.contrib import admin # type: ignore
from produto.models import Produto

class Produtos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'categoria','descricao')
    list_display_links = ('id', 'nome',)
    list_per_page = 20
    search_fields = ('nome','categoria')
    ordering = ('nome',)

admin.site.register(Produto, Produtos)


