from rest_framework import generics
from .models import Reel
from .serializers import ReelSerializer

class ReelListView(generics.ListCreateAPIView):
    queryset = Reel.objects.all().order_by("-created_at")
    serializer_class = ReelSerializer

class ReelDetailView(generics.RetrieveAPIView):
    queryset = Reel.objects.all()
    serializer_class = ReelSerializer    

    