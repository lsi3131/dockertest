from bs4 import BeautifulSoup
import requests
import os

html_code = """
"""

# User-Agent 설정
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36'
}

# requests를 사용하여 페이지에 GET 요청 보내기
response = requests.get("https://www.zigbang.com/home/apt/subways/138", headers=headers)

html_code = response.text
soup = BeautifulSoup(html_code, 'html.parser')

img_tags = soup.find_all('img')

# 이미지를 저장할 디렉토리 생성
os.makedirs('../images', exist_ok=True)

# 각 이미지의 src 속성을 가져와서 이미지 다운로드
image_index = 0
for img_tag in img_tags:
    img_path = os.path.join('../images', f'image_{image_index}.jpg')
    img_url = img_tag.get('src')

    with open(img_path, 'wb') as f:
        img_response = requests.get(img_url)
        f.write(img_response.content)

    image_index += 1


    # # 이미지가 상대 경로로 제공될 수 있으므로, 절대 경로로 변환하여 다운로드
    # if img_url.startswith('/'):
    #     img_url = 'https://www.zigbang.com' + img_url
    # img_name = img_url.split('/')[-1]  # 이미지 URL에서 파일명 추출
    # img_path = os.path.join('images', img_name)
    # with open(img_path, 'wb') as f:
    #     img_response = requests.get(img_url)
    #     f.write(img_response.content)
    # print(f"{img_name} 다운로드 완료")

# 이미지 URL을 포함한 요소를 찾기 위해 해당 클래스를 사용하여 찾음
# files = {'regPic': requests.get(soup.select_one("div>img").get("src")).content}
#
# content = requests.get(soup.select_one("div>img").get("src")).content
#
# # print(content)
# with open("image.jpg", "wb") as f:
#     f.write(content)