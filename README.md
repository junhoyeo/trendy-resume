<h1 align="center">
  Trendy Résumé
</h1>

<div align="center">
  <img src="./docs/assets/profile.png" alt="Zepeto of junhoyeo" height="256px" width="256px" />
  <blockquote>Hello, this is my trendy new <a href="https://trendy-resume.now.sh/">résumé</a>. Wanna make one for yourself too?<br />
  <small><i>If any of you are here for <strong>my latest(or English)</strong> résumé, please leave an issue <a href="https://github.com/junhoyeo/trendy-resume/issues">here</a> or contact me for updates,<br />since I don't have much time to keep track of my works nowadays. 🙏</i></small>
  </blockquote>
</div>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Typed with TypeScript](https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=555555&color=blue)](https://github.com/microsoft/TypeScript)

- [🇰🇷 한국어 (Korean)](./README.ko.md)

## 👀 Preview

![mockup for imac - 1](./docs/assets/mockups/imac-1.png)
![mockup for imac - 2](./docs/assets/mockups/imac-2.png)
![mockup for ipad - 1](./docs/assets/mockups/ipad-1.png)

<div align="center">
  <img alt="preview-from-page-top" src="./docs/assets/preview-top.png" width="48%" style="border-right:1px solid #dbedff" /> <img alt="preview-from-page-bottom" src="./docs/assets/preview-bottom.png" width="48%" />
</div>

## ❤️ Use case
Add yours too! 🥰

- [trendy-resume.now.sh](https://trendy-resume.now.sh)
- [kdw.now.sh](https://kdw.now.sh)
- [seungmin.io](https://seungmin.io)
- [about.mingeun.com](https://about.mingeun.com) (inspired from design)

## 🏗 Make one for youself!

### 1. Duplicate this repository
You can just clone this repo to your account, or [use this repo as a template](https://github.com/junhoyeo/trendy-resume/generate)!

### 2. Development on your local machine

```bash
git clone https://github.com/your-nickname/some-repository.git
# this clone link is from the repo that you generated at the previous step!

cd some-repository
# move to your newly cloned folder

yarn
# to install dependencies
# of course, you can use npm
# - but just be sure to delete yarn.lock because it'll be useless if then

yarn dev
# run the dev server in your local
```

### 3. Setup deployment

> ⚠️ This project uses Next.js for server-side rendering!!! ⚠️
>
> Keep this in mind while developing features related to paging, rendering, generating values etc. 👍

You can deploy to services that supports Next.js like [ZEIT](https://zeit.co/), Github Pages, Heroku.

### 4. Configurations
Now, look through the files and feel free to customize for yourself! 🔥

## 🔍 Documentation
I'm still working on a more proper documentation and make more things customizable, so you can either wait, hack, or help me by contributing via [Issues](https://github.com/junhoyeo/trendy-resume/issues) and [Pull Requests](https://github.com/junhoyeo/trendy-resume/pulls)!

### 👋 Infomation

#### Example

```json
{
  "title": "Résumé",
  "author": "junhoyeo",
  "catchphrase": {
    "text": "Frontend is \nINEVITABLE™",
    "description": [
      "불가능한 프론트엔드는 없다고 믿습니다.",
      "그렇기 때문에 오늘도 성장하기 위한 노력을 하고 있죠."
    ]
  }
}
```

#### Preview

![Rendered header](./docs/assets/configurations/header.png)

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file | [src/data/info.json](./src/data/info.json) |
| Type | Typing of object | [src/utils/types.ts](./src/utils/types.ts) (interface `IInfo`) |

#### Fields

| Field | Description | Example |
| ----- | ----------- | ------- |
| `title` | Title | `Résumé` |
| `author` | Author name next to title | `junhoyeo` |
| `catchphrase.text` | Main Catchphrase | `Frontend is \nINEVITABLE™` |
| `catchphrase.description` | Description below main catchphrase(rendered line by line) | `["불가능한 프론트엔드는 없다고 믿습니다.", "그렇기 때문에 오늘도 성장하기 위한 노력을 하고 있죠."]` |

### 🤝 Social Links
See above for preview.

#### Example

```json
[
  {
    "name": "github",
    "icon": "fab fa-github",
    "href": "https://github.com/junhoyeo"
  },
  {
    "name": "facebook",
    "icon": "fab fa-facebook",
    "href": "https://www.facebook.com/juno3704"
  }
]
```

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file that contains list of objects | [src/data/social.json](./src/data/social.json) |
| Type | Typing of a single object | [src/utils/types.ts](./src/utils/types.ts) (interface `ILink`) |

#### Fields

| Field | Description | Example |
| ----- | ----------- | ------- |
| `name` | Name of the navigation | `github` |
| `icon` | Icon className from [Font Awesome](https://fontawesome.com/) | `fab fa-github` |
| `href` | Location to move when link is clicked | `https://github.com/junhoyeo` |

### 🕵️‍♂️ Navigation
See above for preview.

#### Example

```json
[
  {
    "name": "홈",
    "href": "#"
  },
  {
    "name": "개발 스택",
    "href": "#stacks"
  },
  {
    "name": "최근 프로젝트",
    "href": "#recent"
  },
  {
    "name": "블로그 살펴보기",
    "href": "#blog"
  }
]
```

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file that contains list of objects | [src/data/navigations.json](./src/data/navigations.json) |
| Type | Typing of a single object | [src/utils/types.ts](./src/utils/types.ts) (interface `INavigation`) |

#### Fields

| Field | Description | Example |
| ----- | ----------- | ------- |
| `name` | Name of the navigation | `Home`, `My Stacks`, `Recent` |
| `href` | Location to move after navigation item is clicked(usually bookmarks with `id`) | `#home`, `#stacks`, `#recent` |

### 👩🏼‍💻 Avatars
See above for preview.

#### Example

```json
[
  {
    "image": "coffee.png"
  },
  {
    "image": "default.png"
  },
  {
    "image": "poze.png",
    "contain": true
  }
]
```

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file that contains list of objects | [src/data/avatar.json](./src/data/avatar.json) |
| Type | Typing of a single object | [src/utils/types.ts](./src/utils/types.ts) (interface `IAvatar`) |

#### Fields

| Field | Description | Required |
| ----- | ----------- | -------- |
| `image` | File name of the avatar file, located in the [public/static/avatar](https://github.com/junhoyeo/trendy-resume/tree/main/public/static/avatar) folder | `true` |
| `contain` | `object-fit` will be `contain` in the rendered img tag if this field is `true`(else `cover`) | `false` |

### 📚 Stacks

#### Example

```json
[
  {
    "name": "React & React Native",
    "image": "react.png",
    "skill": 90,
    "color": "#52C1DE",
    "description": "아이디어가 떠오르면 바로 구현해 낼 수 있습니다. Hooks를 사용해서 깔끔한 코드를 (보통 타입스크립트로) 작성합니다."
  }
]
```

#### Preview

![Rendered stack](./docs/assets/configurations/stack.png)

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file that contains list of objects | [src/data/stacks.json](./src/data/stacks.json) |
| Type | Typing of a single object | [src/utils/types.ts](./src/utils/types.ts) (interface `IStack`) |

#### Fields

| Field | Description | Required |
| ----- | ----------- | -------- |
| `name` | Name of stack | `true` |
| `image` | file name of the stack image(logo) file, located in the [public/static/stacks](https://github.com/junhoyeo/trendy-resume/tree/main/public/static/stacks) folder | `true` |
| `skill` | Skill proficiency expressed in percentiles(`0` to `100`) | `true` |
| `color` | Brand color for stack(used in image shadow & progress bar color) | `true` |
| `description` | Description under stack name | `true` |

### 📦 Products

#### Example

```json
[
 {
    "image": "static/products/danim.png",
    "title": "세상을 거닐다, 다님.",
    "parts": [
      "APP",
      "DESIGN"
    ],
    "category": "애플리케이션",
    "place": "제 19회 앱잼 - 생활 부문 최우수상(1위)",
    "date": "2019.12.21 ~ 2019.12.22",
    "description": "스스로 또는 소중한 사람에게, 특별한 여행을 선물할 수 있도록 도와주는 앱입니다. 맞춤형 여행 상품을 제공하고 선물할 수 있게 합니다. 인앱 UI를 디자인한 뒤 React Native를 이용해 모바일 앱을 제작하는 것을 담당했습니다.",
    "links": [
      {
        "icon": "fab fa-github",
        "text": "모바일 앱 코드 보기",
        "href": "https://github.com/junhoyeo"
      },
      {
        "icon": "fab fa-github",
        "text": "백엔드 코드 보기",
        "href": "https://github.com/junhoyeo"
      }
    ]
  }
]
```

#### Preview

<div align="center">
  <img alt="Rendered product card" src="./docs/assets/configurations/product.png" width="712" />
</div>

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file that contains list of objects | [src/data/products.json](./src/data/products.json) |
| Type | Typing of a single object | [src/utils/types.ts](./src/utils/types.ts) (interface `IProduct`) |

#### Fields

| Field | Description | Required |
| ----- | ----------- | -------- |
| `image` | file name of the product image file, located in the [public/static/products](https://github.com/junhoyeo/trendy-resume/tree/main/public/static/products) folder | `true` |
| `title` | Product title | `true` |
| `parts` | Array of string parts(tags in top left to express responsibilities) | `false` |
| `place` | Place of competition and award performance | `false` |
| `date` | Development Period | `false` |
| `description` | Product description(visible when card is clicked) | `false` |
| `links` | Array of product links with interface `ILink`(visible when card is clicked) | `false` |

### 📖 Posts
For blog posts(2nd section). All models/fields are same as products.

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file that contains list of objects | [src/data/products.json](./src/data/posts.json) |
| Type | Typing of a single object | [src/utils/types.ts](./src/utils/types.ts) (interface `IProduct`) |

## 🍭 Sweet Tips
These are the materials I used for designing this blog.

| Service or Material | Description | Alternatives |
| ------------------- | ----------- | ------------ |
| [Zepeto](https://zepeto.me/) | You can easily make a cool avatar like youself, and take pictures | Maybe some facial-emoji solutions? |
| [Smartmockups](https://smartmockups.com/) | Some of the mockups was generated here. It's really great but trial version like mine includes a small watermark in the corner, also it's hard to find multiple device mockups with the same machine. | Photoshop is the best, really. |

Feel free to add yours too!
