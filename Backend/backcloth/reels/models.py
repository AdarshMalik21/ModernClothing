from django.db import models
from products.models import Product

class Reel(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="reels")

    video = models.FileField(upload_to="reels/")
    created_at = models.DateTimeField(auto_now_add=True)    

    likes = models.PositiveIntegerField(default=0)

    def __str__ (self):
        return f"Reels for {self.product.title}"

