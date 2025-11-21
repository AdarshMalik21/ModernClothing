from django.contrib import admin
from .models import Reel

@admin.register(Reel)

class ReelAdmin(admin.ModelAdmin):
    list_display = ("id", "product", "created_at", "likes")
    search_fields = ("product__title",)
    list_filter = ("created_at",)

