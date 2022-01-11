## 개요
- 본 문서는 IRIS Web Platform UI 설계에 대한 가이드를 제공 합니다.
- 아래 내용을 검토 하기 전에 다음 항목에 대해 참조 하시고 진행 하면 좋습니다!
  - [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/ "Atomic Design Pattern")
  - [Presentation / Container Component](https://medium.com/dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 "Presentation / Container Component")
  - [BEM](https://en.bem.info/methodology/ "BEM")

## Component에 대한 정의
- Component는 독립적인 형태로 실행 가능한 항목을 의미한다.
- UI 설계 시, 다음의 두가지 형태로 분류 하여 각 항목을 정의 하고 내용을 작성 한다.

### Presentation Component
- 어떻게 보여지는가?
- Presentation + Container 를 포함 할수 있고, DOM과 스타일을 가지고 있다.
- 데이터를 가져오거나 변경하는 방법에 관여하지 않는다.
- props 를 통해 데이터를 받는다.
- 데이터 적인 상태는 없다. UI 상태에 관한 것만 존재한다.

### Container Component
- 어떻게 동작하는가?
- Presentation + Container 를 포함하지만 자체적인 DOM과 스타일을 가지고 있지 않는다.
- 데이터와 기능(행동)을 다른 컴포넌트에 제공한다.
- 데이터 소스 역할을 하기 때문에 상태가 자주 변경 된다.

## Component의 공통 구성 요소
- 각각의 Component는 BEM 방식으로 구성 하고, 속성을 정의 하여 내용을 작성 한다.

### 구성 요소

#### Block
> independent anywhere on the page = Component- independent anywhere on the page = Component

- 하나의 컴포넌트
- 하나의 파일
- 형태(red, big)가 아닌 목적(menu, button)에 맞게 분류

#### Element
> no meaning on its own, it's name of a part for function

- Block 안에서 특정 기능을 담당하는 부분 (HTML Element)
- 형태(red, big)가 아닌 목적(label, title, input) 에 맞게 분류
- Element는 다른 Element의 부분으로 사용 할 수 없음

#### Modifier
> different version of a block or an element

- Block 이나 Element의 모양(color, size), 상태(disabled, checked)를 정의
- boolean 타입(enabled, disabled)과 key-value(color-red, theme-ocean) 타입이 있음

### 명명 규칙
> block-name__elem-name_mod-name_mod-val

- 이름은 소문자 라틴 문자로 작성됩니다.
- 단어는 하이픈 (-)으로 구분됩니다.
- Block 이름은 해당 요소 및 수정 자의 네임 스페이스를 정의합니다.
- Element 이름은 이중 밑줄 (__)로 블록 이름과 구분됩니다.
- Modifier 이름은 단일 밑줄 (_)로 블록 또는 요소 이름과 구분됩니다.
- Modifier 값은 단일 밑줄 (_)로 수정 자 이름과 구분됩니다.
- Boolean Modifier 의 경우 값이 이름에 포함되지 않습니다.

#### Block name
```md
menu
```

#### Element name
```md
menu__item
```

#### Block modifier name
```md
menu_hidden
menu_theme_islands
```

#### Element modifier name
```md
menu__item_visible
menu__item_type_radio
```

## 설계 문서
- 컴포넌트
  - 컴포넌트에 대한 이름을 작성한다. 의미 전달을 위한 것이므로, 한글/영문/숫자 혼용도 무방하다.
- 구현단계
  - 컴포넌트의 구현 단계에 대한 구분. 각 구분에 따라 작성 필요한 속성이 달라짐.
    - presentation
    - container
- 구분
  - presentation 인 경우
    - Block: 컴포넌트(파일) 이름
    - Element: 컴포넌트에서 사용되는 요소
    - Modifier: 컴포넌트의 상태
    - Property: Vue Component의 Property
    - Event: Vue Component의 Event
    - Reference: 해당 컴포넌트가 포함하는 다른 컴포넌트 명
  - container 인 경우
    - Method: 기능으로 동작하는 함수
    - Property: Vue Component의 Property
    - Event: Vue Component의 Event
    - Reference: 해당 컴포넌트가 포함하는 다른 컴포넌트 명
- 예제 문서 링크
  - [Component 설계서 Template](https://docs.google.com/spreadsheets/d/16XMXsiEmUhX_ie-yA6BS5Dp6TmHg8m9_PQHOK-eoDz8/edit?usp=sharing)