from django.urls import path
from .views import ProductListView, ProductDetailView ,CategoryListView, MainCategoryListView

urlpatterns = [
    path("",ProductListView.as_view(), name = "product-list"),
    path("<int:pk>/", ProductDetailView.as_view(), name = "product-detail"),
    path("categories/", CategoryListView.as_view(), name="category-list"),
    path("main-categories/", MainCategoryListView.as_view(), name="main-category-list"),
]
