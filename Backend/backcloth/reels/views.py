from rest_framework import generics
from .models import Reel
from .serializers import ReelSerializer
from django.db.models import Count
import random

class ReelListView(generics.ListAPIView):
    serializer_class = ReelSerializer

    def get_queryset(self):
        queryset = Reel.objects.all().order_by("-created_at")

        # 1️⃣ Category filter: /reels/?category=mens-coat
        category_slug = self.request.GET.get("category")
        if category_slug:
            queryset = queryset.filter(product__category__slug=category_slug)

        # 2️⃣ Product filter: /reels/?product=5
        product_id = self.request.GET.get("product")
        if product_id:
            queryset = queryset.filter(product__id=product_id)

        # 3️⃣ Random reels: /reels/?random=true
        if self.request.GET.get("random") == "true":
            queryset = list(queryset)
            random.shuffle(queryset)
            return queryset

        return queryset

class ReelDetailView(generics.RetrieveAPIView):
    queryset = Reel.objects.all()
    serializer_class = ReelSerializer    

    