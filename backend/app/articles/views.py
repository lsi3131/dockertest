from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .util import CustomPagination

class ArticleAPIView(APIView):
    def get(self, request):
        return Response(
            {"message": "게시글이 작성되었습니다."},
            status=status.HTTP_201_CREATED
        )

