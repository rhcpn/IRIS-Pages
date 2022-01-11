## 개요
- 본 문서는 IRIS Web Platform 개발 환경 구성에 대한 가이드를 제공 합니다.
- 개발 환경 구성은 Visual Stuido Code 사용을 기본적으로 전제 합니다.

## 개발 환경 설정
### 사용자 개발 환경 설정
- 소스를 설치 하여 개발 하기 전에 우선 NodeJS 및 Git 환경이 구성 되어야 한다.

#### NodeJS & NPM 설치
- [NodeJS](https://nodejs.org/ko/download/)를 설치 한다.

#### Git 설치
- [Git](https://git-scm.com/downloads)를 설치 한다.

#### Source Tree 설치
- [SourceTree](https://www.sourcetreeapp.com/)를 설치 한다.

>아래에 안내 할 Visual Studio Code의 Git 관련 기능을 사용해도 좋지만 아무래도 SourceTree가 좋다! 


### 개발 도구 설치
#### Visual Studio Code 설치
- [Visual Studio Code](https://code.visualstudio.com/download)를 설치 한다.

#### Extention 설치
- ESLint (VS Code ESLint extension)
- npm (Node npm)
- npm (npm commands for VSCode)
- Prettier - Code formatter
- Vetur (Vue tooling for VS Code)
- Vue2 Snippets

## 개발 소스 설정
### GitHub Fork
- [IRIS-Web-Platform](https://github.com/mobigen/IRIS-Web-Platform)으로 이동 하여 Fork 버튼을 클릭 하여 개인 Repository로 프로젝트를 Fork 받는다.
- Fork 받은 개인 Repository를 SourceTree를 이용하여 사용자 PC의 적당한 곳에 Clone 하여 다운로드 한다.

### Visual Studio Code의 작업 영역에 프로젝트 로드
- Visual Studio Code에서 파일 > 작업 영역에 폴더 추가를 선택 하여 위의 과정으로 다운로드한 경로를 지정 한다.

### 프로젝트 기본 설정
- Ctrl + ` 키를 눌러 터미널 창을 띄운 뒤, 아래의 명령어를 실행 하여 개발에 필요한 node-module을 다운로드 한다.
```md
npm install
```

### 프로젝트 실행
- vue 실행
```md
npm run serve
```

- vue styleguidist 실행
```md
npm run styleguide
```
>styleguide는 개발 문서와 컴포넌트의 preview 를 동시에 처리 해주는 좋은 도구이다. 자세한 내용은 code-comment-guide를 참조한다.


## 개발 경로 설명
- 위의 과정을 통해 설치한 개발 환경에 대한 대략의 구조는 다음과 같다.
<pre>
├── docs                    // 각종 가이드 문서를 포함
├── public                  // 웹 html
└── src
    ├── assets
        ├── css             // scss 파일
        ├── font            // font 파일
        └── image           // .jpg, .png, .gif 등 이미지 파일
    ├── components          // Vue Component
    ├── locales             // 다국어
    ├── router              // vue-route 설정 파일
    ├── store               // vuex 설정 파일
    ├── utils               // javascript class, util 파일
    ├── views               // 실제 화면을 구성하는 페이지에 해당하는 vue component
├── .env                    // 빌드 환경 설정 상수 파일
├── .gitignore              // git 예외 처리 파일 
├── babel.config.js         // babel 설정 파일 
├── package.json            // npm 개발 환경 설정 파일
├── README.md               // 프로젝트 소개 파일
├── styleguide.config.js    // stylegudist 설정 파일
└── vue.config.js           // vue cli 설정 파일
</pre>

## 테스트 환경
### DB 접속정보
- ip: 192.168.102.112
- pw: hello.dev
### 터미널 접속정보
- ip: 192.168.102.112:22
- pw: hello.mobigen