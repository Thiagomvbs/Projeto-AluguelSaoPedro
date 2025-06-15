from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from emailASP.views import enviar_email
from produto.views import ProdutoViewSet
from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Documentação da API",
      default_version='v1',
      description="Documentação da API Produtos",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
)

router = routers.DefaultRouter()
router.register('produtos', ProdutoViewSet, basename='Produtos')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('enviar-email/', enviar_email, name='enviar_email'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
