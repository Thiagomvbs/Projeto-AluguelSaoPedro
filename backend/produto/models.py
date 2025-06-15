from django.db import models
import os

class Produto(models.Model):
    OPCOES_CATEGORIAS = [
        ('PRATOS', 'Pratos'),
        ('COPOS', 'Copos'),
        ('RECHAUD', 'Rechaud'),
        ('GARRAFAS', 'Garrafas'),
        ('TALHERES', 'Talheres'),
        ('VIDROS', 'Vidros'),
        ('TRAVESSAS', 'Travessas'),
        ('INOX', 'Inox'),
        ('LOUÇAS', 'Louças'),
        ('XÍCARAS', 'Xícaras'),
        ('PRATARIA', 'Prataria'),
        ('MADEIRA', 'Madeira'),
        ('PANELAS', 'Panelas'),
        ('TOALHAS', 'Toalhas'),
        ('EQUIPAMENTOS', 'Equipamentos')
        ]

    nome = models.CharField(max_length=100,null=False, blank=False)
    descricao = models.TextField(null=False, blank=False)
    categoria = models.CharField(max_length=100, choices=OPCOES_CATEGORIAS, default='')
    
    
    def get_upload_to(self, filename):
        return os.path.join('img', self.categoria, filename)

    imagem = models.ImageField(upload_to=get_upload_to, blank=True)
    

    def __str__(self):
        return self.nome

