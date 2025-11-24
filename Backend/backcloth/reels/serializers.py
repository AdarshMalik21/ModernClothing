from rest_framework import serializers
from .models import Reel
from products.serializers import ProductSerializer

class ReelSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = Reel
        fields = ["id",
            "video",
            
            "created_at",
            "likes",
            "product",
            ]