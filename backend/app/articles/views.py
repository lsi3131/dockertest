from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ArticleAPIView(APIView):
    def get(self, request):
        return Response(
            {"message": "서버에서 전송되었습니다."},
            status=status.HTTP_201_CREATED
        )
