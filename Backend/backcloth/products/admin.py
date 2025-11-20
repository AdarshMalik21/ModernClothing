from django.contrib import admin
from .models import Category, Product, ProductImage

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1    

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "category", "created_at")
    list_filter = ("category", "is_ai_generated")
    search_fields = ("title",)

@admin.register(ProductImage)    
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ("product", "image")


