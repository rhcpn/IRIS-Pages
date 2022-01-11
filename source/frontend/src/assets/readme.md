# IRIS Design Core 스타일 사용해서 작업하기

- **공통 스타일:** `/style-core`
  - 외부 레파지토리에서 서브모듈로 등록한 디렉토리.
  - 프로젝트 내에서 수정이 불가능하며 Update만 가능하다.
  - 수정이 필요한 경우 [IRIS-Design-Core](https://github.com/mobigen/IRIS-Design-Core)나 [IRIS-Design-Guide](https://github.com/mobigen/IRIS-Design-Guide) 레파지토리에서 수정한다.
- **프로젝트 스타일:** `/style-product`
  - 프로젝트에서 공통으로 사용하는 스타일을 작성한다.


## 📂 폴더 구조

```
assets/
│
├── style-core/                       // IRIS Design Cores submodule
│   ├── fonts/
│   ├── images/
│   │   ├── common/                   // 공통으로 사용하는 이미지 (.png)
│   │   ├── error/                    // 에러 화면 이미지
│   │   └── icon/                     // svg icon (.svg)
│   ├── scss/
│   └── ...
│
├── style-product/                    // 프로젝트에서 공통으로 사용하는 스타일
│   ├── images/
│   │   └── compiled-svg-icons/       // style-core/images/icon 을 번들링한 아이콘 파일
│   ├── vendors/                      // 라이브러리 CSS 재선언용 파일 디렉토리
│   │   └── simplebar.scss
│   └── proudct-index.scss            // 프로젝트용 변수 재선언과 인덱스용 scss 파일
│
└── main.scss                         // core와 produc 스타일 @import로만 구성된 scss 파일
```

## 🐙 서브모듈 사용하기

### 서브모듈 초기 설정

처음 저장소를 클론하면 서브모듈 디렉토리가 비어있다. 아래 명령어로 서브모듈 내용을 가져온다.
```bash
git submodule init
git submodule udpate
```
## 서브모듈 업데이트 하기

작업 중 서브모듈의 변경사항을 업데이트 해오는 명령어.
IRIS-Design-Core 저장소의 dev 브랜치를 참조해 가장 최근 커밋을 업데이트 해온다.

```bash
git submodule update --remote
From https://github.com/mobigen/IRIS-Design-Core
   bb8195d..4f903ac  dev       -> origin/dev
Submodule path 'source/frontend/src/style-core': checked out '4f903acf48e0a5502830eeda15bdd15f6a48c60e'
```

> **참조:** 
> 
> 프로젝트에 등록된 서브모듈이 IDC 하나만 있는 경우 간편하게 위 명령어로 업데이트 할 수 있지만, 여러 서브모듈이 등록된 경우!
> 
> 루트 디렉토리 (`IRIS-Project-Name/`)에서 아래와 같이 작성하면 style-core(IDC) 서브모듈만 콕 찝어 업데이트 할 수 있다.
> 
> ```bash
> git submodule update --remote source/frontend/src/assets/style-core
> ```

### 변경 내용 확인하기

업데이트 한 서브모듈의 커밋 내역을 확인한다.

```bash
git diff --submodule
```

위 명령어를 입력하면 새로운 화면에 아래와 같이 서브모듈로부터 업데이트 해 온 커밋명이 출력된다.

```bash
Submodule source/frontend/src/assets/style-core bb8195d..4f903ac:
  > Merge pull request #72 from user-name/dev (커밋)
(END)
```

`q` 를 눌러 빠져나온다. 위 과정을 `.gitconfig` 에 설정해 간편하게 사용할 수 있다.

```bash
git config status.submodulesummary 1
```

이제 `git status` 를 확인하면 서브모듈에서 업데이트 한 커밋 내역까지 한번에 확인할 수 있다.

### 변경 내용 Push 하기

변경 내용을 확인했고 이상이 없다면 커밋을 남기고 원격 저장소에 Push 한다.

커밋을 작성할 때는 프로젝트를 수정한 내용과 서브모듈을 업데이트한 내용이 섞이지 않도록, 업데이트 즉시 커밋을 남기는 것이 좋다.

커밋 메시지는 `Updated` 프리픽스를 사용하고, 어떤 커밋을 기준으로 merge 했는지도 함께 기록 한다.

```bash
git commit -m"Updated: style-core (IDC@4f903ac)"
```

### 업데이트 주기

디자인 작업 개선이 필요한 시기에 업데이트한다.
