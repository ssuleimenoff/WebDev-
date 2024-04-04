from django.urls import path
from .views import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
    index  # Import the index view
)

urlpatterns = [
    path('', index, name='index'),  # Add root URL pattern
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:pk>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]
