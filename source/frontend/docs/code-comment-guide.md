## 개요
- 본 문서는 IRIS Web Platform UI 코드 작성 시, Comment 작성에 대한 가이드를 제공 합니다.
- 코드의 Comment는 JSDoc 방식을 기본으로 합니다.
- 코드에 작성된 comment는 vue-stylegudist 로 자동 변환 되어 개발 명세서로 활용 예정입니다.
- 아래 내용을 검토 하기 전에 다음 항목에 대해 참조 하시고 진행 하면 좋습니다!
  - [JSDoc](https://devdocs.io/jsdoc/)
  - [Vue Styleguidist](https://vue-styleguidist.github.io/docs/Documenting.html)

## 작성 방법
- 아래 내용은 vue-style-guidist의 예제에서 발췌 하였습니다.
- 아래 내용 외에도 JSDoc 문법을 대부분 사용 가능 하니, 참고 하세요.

### 코드 주석
- /** ~ **/ 블럭으로 클래스, 메소드, 속성 시작 위치에 내용을 작성
- Tag
  - @displayName: 표시 이름을 변경할 수 있음
```md
  /**
   * The only true button.
   * @displayName Best Button
   */
  export default {
    name: 'Button',
    props: {
  ...

```

### 이벤트
- 이벤트 핸들러 바로 위에 작성
- Tag
  - @event: 이벤트 명(핸들러의 이벤트 명이 명시적이거나 상수면 써주지 않아도 자동 인식)
  - @type: 이벤트 파라메터
```md
/**
 * Success event.
 *
 * @event success
 * @type {object}
 */
this.$emit(EVENTS.success, {
  demo: 'example'
})
```

### 슬롯
- 슬롯은 기본적으로는 자동으로 문서화 처리 됨. 
- 별도의 Tag로 설명 추가 가능
- Tag
  - @slot: 슬롯에 대한 별도의 설명 추가
```md
  <template>
  <div class="modal">
    <div class="modal-container">
      <div class="modal-head">
        <!-- @slot Use this slot header -->
        <slot name="head"></slot>
      </div>
      <div class="modal-body">
        <!-- @slot Use this slot body -->
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>
```

### 메소드
- Tag
  - @param: 함수 인자 설명 추가
```md
    methods: {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} event The react `SyntheticEvent`
       * @param {Number} num Numbers of examples
       * @public This is a public method
       */
      launch(event, num) {
        /* ... */
      },
      // ...
      ignoreMethod() {
        /**
         * Success event.
         *
         * @event success
         * @type {object}
         */
        this.$emit('success', {})
      }
    }
```

### 주석 공개 or 비공개
- 클래스, 속성, 이벤트, 슬롯을 제외한 일반 메소드는 자동 표시 되지 않아서 별도 처리 필요함.
- 반대로 자동으로 공개되는 대상을 표시 하지 않도록 처리 가능함.
- Tag
  - @public: 해당 함수를 style-guidist 페이지에 표시
  - @ignore: 해당 클래스, 속성, 이벤트, 슬롯을 페이지에 표시 하지 않음