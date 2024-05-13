import requests
from bs4 import BeautifulSoup

# User-Agent 설정
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36'
}

# requests를 사용하여 페이지에 GET 요청 보내기
response = requests.get("https://www.zigbang.com/home/apt/subways/138", headers=headers)

# 응답 코드 확인
print(response.status_code)

# BeautifulSoup을 사용하여 HTML 파싱
soup = BeautifulSoup(response.text, 'html.parser')

# 이미지 태그 찾기
img_tags = soup.find_all('img')

# 이미지 URL 출력
for img_tag in img_tags:
    img_url = img_tag.get('src')
    print(img_url)

# 각 이미지의 URL에 대해 별도의 요청 보내기
for img_tag in img_tags:
    img_url = img_tag.get('src')
    img_response = requests.get(img_url)
    # 이미지 파일로 저장
    with open('../image.jpg', 'wb') as f:
        f.write(img_response.content)
