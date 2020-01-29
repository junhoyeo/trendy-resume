<h1 align="center">
  Trendy Résumé
</h1>

<div align="center">
  <img src="./docs/assets/profile.png" alt="Zepeto of junhoyeo" height="256px" width="256px" />
  <blockquote>Hello, this is my trendy new <a href="https://trendy-resume.now.sh/">résumé</a>. Wanna make one for yourself too?</blockquote>
</div>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

- [🇺🇸 English](./README.ko.md)

## 👀 미리보기

<img alt="preview-from-page-top" src="./docs/assets/preview-top.png" width="48%" style="border-right:1px solid #dbedff" /><img alt="preview-from-page-bottom" src="./docs/assets/preview-bottom.png" width="48%" />

## ❤️ 사용 사례
여러분의 것도 추가해 주세요! 🥰

- [trendy-resume.now.sh](https://trendy-resume.now.sh)

## 🏗 직접 만들어 보세요!

### 1. 먼저, 이 저장소를 복제합니다.
여러분의 계정으로 클론해서 사용하거나, [템플릿 기능을 사용](https://github.com/junhoyeo/trendy-resume/generate)해서 새로운 저장소를 만들 수도 있어요!

### 2. 로컬 서버에서 개발하기

```bash
git clone https://github.com/your-nickname/some-repository.git
# 전 단계에서 만든 저장소의 클론 링크입니다.

cd some-repository
# 새로 만들어진 저장소의 폴더로 이동하세요.

yarn
# 패키지 매니저를 사용해 의존성을 설치합니다.
# 물론 npm을 사용할 수도 있습니다.
# 그 경우 필요 없어지는 yarn.lock을 삭제해도 상관 없을 거예요.

yarn dev
# 개발 서버를 시작합니다. (npm run dev)
```

### 2. Configurations
이제 파일을 훑어보면서 마음껏 바꿔도 좋아요!

빠른 시일 내에 자세한 문서와 함께 더 많은 것들을 쉽게 설정해서 적용할 수 있도록 해 드릴게요! [Issues](https://github.com/junhoyeo/trendy-resume/issues)와 [Pull Requests](https://github.com/junhoyeo/trendy-resume/pulls)를 통해서 저를 도와줄 수 있어요! 😘

#### 👋 기본 정보

| 이름 | 위치 | 현재 |
| --- | --- | --- |
| 제목 | [Header](./src/components/templates/Header.tsx) 컴포넌트 | `Résumé` |
| ~~주인장~~ 작가 | [Header](./src/components/templates/Header.tsx) 컴포넌트 | `@junhoyeo` |
| 캐치프레이즈 | [Carousel](./src/components/organisms/Carousel.tsx) 컴포넌트 | `Frontend is INEVITABLE™` |
| 캐치프레이즈 밑에 있는 설명 | [Carousel](./src/components/organisms/Carousel.tsx) 컴포넌트 | `불가능한 프론트엔드는 없다고 믿습니다.`, `그렇기 때문에 오늘도 성장하기 위한 노력을 하고 있죠.` |

#### 🕵️‍♂️ 네비게이션
현재는 [Navbar](./src/components/organisms/Navbar.tsx) 컴포넌트에 있어요!

| 필드 이름 | 설명 | 예시 |
| ------- | --- | --- |
| `name` | 네비게이션 이름 | `홈`, `개발 스택`, `최근 프로젝트` |
| `href` | 네비게이션 바를 클릭했을 때 이동할 위치(보통 `id` 태그를 이용한 북마크) | `#home`, `#stacks`, `#recent` |

#### 👩🏼‍💻 아바타

##### 참고 자료

| 이름 | 설명 | 위치 |
| --- | --- | --- |
| 설정 파일 | 오브젝트 리스트를 포함하고 있는 JSON 설정 파일 | [src/data/avatar.json](./src/data/avatar.json) |
| 타입 | 하나의 오브젝트에 대한 타이핑 | [src/utils/types.ts](./src/utils/types.ts) (interface `IAvatar`) |

##### 필드 정보

| 필드 이름 | 설명 | 필수 여부 |
| ----- | ----------- | -------- |
| `image` | [public/static/avatar](https://github.com/junhoyeo/trendy-resume/tree/master/public/static/avatar) 폴더에 있는 아바타(프로필 사진) 파일의 이름 | `true` |
| `contain` | `true`면 렌더링된 이미지 태그의 `object-fit` 스타일이 `contain`로 설정됨 | `false` |

#### 📚 스택

#### 📦 상품 ~~이라는 컨셉~~

#### 🤝 소셜 링크 (페이지 상단 우측에 표시됩니다!)

## 🍭 팁 몇 개
아래는 제가 포트폴리오를 디자인하면서 사용했던 서비스들이예요!

| 서비스나 자료 이름 | 설명 | 대체품 |
| ------------- | --- | ----- |
| [Zepeto](https://zepeto.me/) | 쉽게 자신과 비슷한 ~~???~~ 아바타를 만들고, 사진을 찍을 수 있어요. | 얼굴 인식 이모지 솔루션이 그나마 괜찮을 것 같긴 한데, 좀 더 알아봐야 할 것 같아요. |
| [Smartmockups](https://smartmockups.com/) | 제가 사용한 목업 몇 개는 여기에서 생성했습니다. 다루기도 쉽고 진짜 예쁘긴 한데, 저와 같은 체험판 버전 사용자가 생성한 목업은 구석이랑 가운데에 작은 워터마크가 들어간다는 단점이 있어요. 또, 같은 디바이스가 여러 개 있는 목업 레이아웃이 없어서 마음이 약간 아픕니다. | 무료 목업 PSD 파일을 받아, 포토샵으로 편집하는 게 가장 ~~귀찮지만~~ 좋긴 하네요. |

포트폴리오를 만들다 참고한 자료가 있다면 여기에 추가해주세요!
