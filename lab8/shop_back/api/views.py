from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from django.http import HttpRequest


def index(request):
    return HttpRequest("Welcome to the shop!")

class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductsAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        try:
            category_id = self.kwargs['id']
            return Product.objects.filter(category_id=category_id)
        except KeyError:
            return Product.objects.none()  # Return an emp
