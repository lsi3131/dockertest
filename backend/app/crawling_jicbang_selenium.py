from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Chrome WebDriver 경로 설정
webdriver_path = '경로를_입력하세요'

# WebDriver 생성
options = Options()
options.add_argument('--headless')  # 브라우저를 숨김
# driver = webdriver.Chrome(service=service, options=options)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# 페이지 로드 및 대기
driver.get("https://www.zigbang.com/home/apt/subways/138")
wait = WebDriverWait(driver, 10)  # 최대 10초간 대기
wait.until(EC.visibility_of_element_located((By.TAG_NAME, 'img')))

# 이미지 가져오기
div_class = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'css-1dbjc4n.r-13awgt0.r-1mlwlqe')))

div_elements = driver.find_elements(By.CSS_SELECTOR, 'div[data-testid="test"]')

img_tags = driver.find_elements(By.TAG_NAME, 'img')
for img_tag in img_tags:
    img_url = img_tag.get_attribute('src')
    print(img_url)

# 브라우저 종료
driver.quit()
