from django.urls import path
from .views import ReelDetailView, ReelListView

urlpatterns = [
    path("",ReelListView.as_view(), name = "reel-list"),
    path("<int:pk>/",ReelDetailView.as_view(), name = "reel-detail"),
]
