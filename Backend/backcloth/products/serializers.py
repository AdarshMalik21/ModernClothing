from rest_framework import serializers
from .models import Category, Product, ProductImage, MainCategory

class MainCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MainCategory
        fields = ["id", "name", "slug"]

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["image"]

class CategorySerializer(serializers.ModelSerializer):
    main_category = MainCategorySerializer()
    class Meta:
        model = Category
        fields = ["id", "name", "slug","main_category"]  

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only = True)
    images = ProductImageSerializer(many=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "title",
            "description",
            "price",
            "sizes",
            "category",
            "is_ai_generated",
            "created_at",
            "images",
        ]
