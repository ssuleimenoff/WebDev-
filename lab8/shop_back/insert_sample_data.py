import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shop_back.settings")
django.setup()

from api.models import Product, Category

# Sample categories
categories_data = [
    {'name': 'iPhone'},
    {'name': 'Macbook'},
    {'name': 'Fruits'},
    {'name': 'Electronics'},
    {'name': 'Books'},
]

# Insert categories
for category_data in categories_data:
    category = Category.objects.create(**category_data)
    print(f"Category '{category.name}' created successfully.")

# Sample products
products_data = [
    {'name': 'iPhone 13', 'price': 999.99, 'description': 'Latest iPhone model', 'count': 50, 'is_active': True, 'category_id': 1},
    {'name': 'Macbook Pro', 'price': 1999.99, 'description': 'High-performance laptop by Apple', 'count': 30, 'is_active': True, 'category_id': 2},
    # You can add more products here
]

# Insert products
for product_data in products_data:
    product = Product.objects.create(**product_data)
    print(f"Product '{product.name}' created successfully.")
