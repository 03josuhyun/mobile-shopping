# 적응형 모바일 쇼핑몰

## 프로젝트 소개
Point of.는 20~30대 고객을 타깃으로 한 액세서리 쇼핑몰 프로젝트입니다.
브랜드 콘셉트에 맞는 깔끔한 UI와 직관적인 상품 탐색 경험을 제공하는 것을 목표로 제작했습니다.
기존 웹 사이트를 바탕으로 모바일 환경에 최적화된 적응형 쇼핑몰을 구현하여, 화면 크기에 따라 적절한 레이아웃과 사용자 인터페이스를 제공하도록 구성했습니다.

## 구현 화면
<table>
 <tr>
  <td>
   <img width="320" alt="image 20" src="https://github.com/user-attachments/assets/39a89228-2540-4add-a6f3-17ee1747bba4" />
  </td>
  <td>
   <img width="320" alt="image 21" src="https://github.com/user-attachments/assets/e7ee4cac-2afd-4efb-90f8-c88f82293b97" />
  </td>
  <td>
   <img width="320" alt="image 22" src="https://github.com/user-attachments/assets/2c0f1363-a5fc-4e47-b80e-951c80e6e579" />
  </td>
 </tr>
 <tr>
  <td>
   <img width="320" alt="image 23" src="https://github.com/user-attachments/assets/ba1f6d0e-7615-4843-97e5-6bc812638c97" />
  </td>
  <td>
   <img width="320" alt="image 24" src="https://github.com/user-attachments/assets/b2b7dc07-095b-4be0-a3aa-8071903a0cf7" />
  </td>
  <td>
   <img width="320" alt="image 25" src="https://github.com/user-attachments/assets/17c30dea-a42d-41e7-abe4-d3a7c8937d5e" />
  </td>
 </tr>
 <tr>
   <td>
   <img width="320" alt="image 26" src="https://github.com/user-attachments/assets/a2e9b958-229c-4e61-b83e-790f88be21c9" />
  </td>
  <td>
   <img width="320" alt="image 27" src="https://github.com/user-attachments/assets/70dffa5d-72a7-4b9b-8807-86014b9f9d25" />
  </td>
  <td>
   <img width="320" alt="image 28" src="https://github.com/user-attachments/assets/66c88df9-fa4d-40b2-8612-46ce9cb2a9d6" />
  </td>
 </tr>
</table>


### 📋 기획 의도
* 액세서리 상품을 직관적으로 탐색할 수 있는 쇼핑 환경 구성
* 브랜드 아이덴티티를 반영한 일관된 디자인 구현
* 모바일 화면에 적합한 레이아웃과 콘텐츠 배치
* 사용자의 편리한 상품 탐색 및 구매 경험
 개선

### 💡 핵심 기능
* **오늘의 액세서리 카테고리 탭**
  * jQuery를 활용해 카테고리 탭 클릭 시 활성화 스타일 및 해당 상품 목록 전환
  * 목걸이, 귀걸이, 반지 등 카테고리별 상품 목록을 탐색할 수 있는 UI 구현 
* **상품 더보기 기능**
  * 더보기 버튼 클릭 시 숨겨진 상품 목록을 표시하고, 다시 클릭하면 목록을 숨기는 토글 기능 구현
  * 초기 화면의 상품 노출량을 조절하여 콘텐츠 탐색 편의성 개선 
* **MBTI 및 시즌별 콘텐츠 탭**
  * 탭 클릭에 따라 MBTI 유형별 추천 콘텐츠 전환
  * 시즌별 탭 선택 시 콘텐츠와 배경 이미지를 함께 변경하여 계절별 분위기 연출
* **사이드 메뉴 아코디언**
  * 메뉴 아이콘 클릭 시 하위 메뉴를 펼치거나 접는 토글 기능 구현
  * 메뉴 구조를 간결하게 구성하여 페이지 탐색 편의성 향상
* **상품 찜하기 인터렉션**
  * 하트 이모티콘 클릭 시 이미지 변경을 통해 찜하기 상태를 시각적으로 표현
  * 찜하기 안내 팝업을 일정 시간 동안 표시한 후 자동으로 닫히도록 구현

### 기술 스택 (Tech Stack)
* HTML5
* CSS3
* JavaScript
* jQuery
* Swiper
* Font Awesome

## 프로젝트 구조 (Architecture)

### 1. 디렉토리 구조 (Directory Structure)
```text
Point of.
├ img/                # 상품 이미지 및 디자인 리소스
├ json_file/          # JSON 데이터 파일
│
├ index.html          # 메인 페이지
├ index.sccs          # 메인 페이지 스타일 원본
├ index.css           # 컴파일된 css
├ index.js            # 메인 페이지 인터랙션
│
├ detail.html         # 상품 상세 페이지
├ cart.html           # 장바구니 페이지
├ sub.html            # 서브 페이지
├ search.html         # 검색 페이지
│
├ login.html          # 로그인 페이지
├ log_add.html        # 회원가입 페이지
├ log_detail.html     # 회원정보 관련 페이지
├ mypage.html         # 마이페이지 
├ find_id.html        # 아이디 찾기 페이지
├ find_pw.html        # 비밀번호 찾기 페이지
└ gnb.html            # 공통 내비게이션 관련 페이지
```
### 2. 페이지 구성

| 페이지           | 주요 기능                |
| ------------- | -------------------- |
| 메인            | 상품 추천, 시즌별 콘텐츠 및 이벤트 |
| 상품 상세         | 상품 정보 확인             |
| 장바구니          | 장바구니 화면              |
| 로그인 · 회원가입    | 사용자 계정 관련 화면         |
| 아이디 · 비밀번호 찾기 | 계정 찾기 화면             |
| 마이페이지         | 사용자 정보 관련 화면         |
| 검색            | 상품 검색 화면             |


## 코드 리뷰(Code Review)

**1. 카테고리 탭 전환**
```javascript
const onTab01 = $('.today .today_tab ul li');
const onSheet01 = $('.today .today_sheet>div');

onTab01.on('click', function () {
  onTab01.removeClass('tab_on01');
  $(this).addClass('tab_on01');

  const index01 = $(this).index();

  onSheet01.removeClass('sheet_on01');
  onSheet01.eq(index01).addClass('sheet_on01');
});
```
카테고리 탭을 클릭하면 선택된 탭의 활성화 스타일을 변경하고, 해당 카테고리에 맞는 상품 목록을 표시하도록 구현했습니다.
* **removeClass()** : 기존 활성화 클래스를 제거합니다.
* **$(this).addClass** : 클릭한 탭을 활성화합니다.
* **index()** : 선택한 탭의 순서를 확인합니다.
* **eq(index01)** : 같은 순서에 해당하는 상품 영역을 선택합니다.


**2. 상품 더보기**
```javascript
$('.today_item_add').each(function () {
  const btn = $(this);
  const item02 = btn.prev('.item02');

  let index02 = false;

  btn.on('click', function () {
    if (index02 === false) {
      item02.css('display', 'flex');
      index02 = true;
    } else {
      item02.css('display', 'none');
      index02 = false;
    }
  });
});
```
상품목록을 처음부터 모두 노출하지 않고, 사용자가 더보기 버튼을 클릭했을 때 추가 상품을 확인할 수 있도록 구현했습니다.
* **each()** : 각 더보기 버튼에 이벤트를 등록합니다.
* **prev('.item02')** : 버튼 바로 앞에 있는 추가 상품 영역을 선택합니다.
* **Boolean** : 변수 index02를 사용해 표시 상태를 관리합니다.
* 클릭할 때마다 상품 영역을 표시하거나 숨깁니다.

### 반응형
* 모바일 화면 크기에 맞춘 레이아웃 구성
* 화면 크기에 따른 콘텐츠 및 UI 배치 조정
* 터치 환경을 고려한 사용자 인터페이스 설계
* Swiper를 활용한 슬라이드 콘텐츠 구현


### 🔗 배포 링크(Live Demo)
[Point of. 모바일 바로가기](https://03josuhyun.github.io/mobile-shopping/)
