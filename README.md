<h1 align="center">
  Trendy Résumé
</h1>

<div align="center">
  <img src="./docs/assets/profile.png" alt="Zepeto of junhoyeo" height="256px" width="256px" />
  <blockquote>Hello, this is my trendy new <a href="https://trendy-resume.now.sh/">résumé</a>. Wanna make one for yourself too?</blockquote>
</div>

## 👀 Preview

<img alt="preview-from-page-top" src="./docs/assets/preview-top.png" width="48%" style="border-right:1px solid #dbedff" /><img alt="preview-from-page-bottom" src="./docs/assets/preview-bottom.png" width="48%" />

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

### 2. Configurations
Now, look through the files and feel free to customize for yourself!

I'm still working on a more proper documentation and make more things customizable, so you can either wait, hack, or help me by contributing via [Issues](https://github.com/junhoyeo/trendy-resume/issues) and [Pull Requests](https://github.com/junhoyeo/trendy-resume/pulls)!

### 👋 Infomation

| Name | Location | Current Placeholder |
| ---- | -------- | ------------------- |
| Title | [Header](./src/components/templates/Header.tsx) component | `Résumé` |
| Author | [Header](./src/components/templates/Header.tsx) component | `@junhoyeo` |
| Catchphrase | [Carousel](./src/components/organisms/Carousel.tsx) component | `Frontend is INEVITABLE™` |
| Description after Catchphrase | [Carousel](./src/components/organisms/Carousel.tsx) component | `불가능한 프론트엔드는 없다고 믿습니다.`, `그렇기 때문에 오늘도 성장하기 위한 노력을 하고 있죠.` |

### 🕵️‍♂️ Navigation
Currently inside [Navbar]() component(will detach soon).

| Field | Description | Example |
| ----- | ----------- | ------- |
| `name` | Name of the description | `Home`, `My Stacks`, `Recent` |
| `href` | Location to move after navigation item is clicked(usually bookmarks with `id`) | `#home`, `#stacks`, `#recent` |

### 👩🏼‍💻 Avatars

#### About

| Name | Description | Location |
| ---- | ----------- | ------- |
| Config | The JSON config file that contains list of objects | [src/data/avatar.json](./src/data/avatar.json) |
| Type | Typing of a single object | [src/utils/types.ts](./src/utils/types.ts) (interface `IAvatar`) |

#### Fields

| Field | Description | Required |
| ----- | ----------- | -------- |
| `image` | file name of the avatar file, located in the [public/static/avatar](https://github.com/junhoyeo/trendy-resume/tree/master/public/static/avatar) folder. | `true` |
| `contain` | `object-fit` will be `contain` in the rendered img tag if this field is set | `false` |

### 📚 Stacks

### 📦 Products

### 🤝 Social Links
