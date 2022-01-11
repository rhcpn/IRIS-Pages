## 개요
- 본 문서는 IRIS Web Platform UI 코드 작성 시, 코드 작성 규칙에 대한 가이드를 제공 합니다.
- Javascript 및 Vue 코드 작성에 대한 가이드를 포함하고 있습니다.
- Javascript 코딩 가이드의 경우, prettier auto fix 항목에 대해서는 가급적 배제 하였습니다.
- Vue 코드 작성 가이드는 필수적으로 주의해야 할 항목만 추출 하였습니다.
- 아래 내용을 검토 하기 전에 다음 항목에 대해 참조 하시고 진행 하면 좋습니다!
  - [Google Javascript Guide](https://google.github.io/styleguide/jsguide.html)
  - [Vue Style Guide](https://kr.vuejs.org/v2/style-guide/index.html)

## Javascipt (ES6) 코드 작성 가이드
### 명명 규칙
- 기본적으로 CamelCase를 사용하며, 구체적으로는 아래와 같은 규칙을 사용한다.
```md
functionNamesLikeThis, variableNamesLikeThis, ClassNamesLikeThis, EnumNamesLikeThis, 
methodNamesLikeThis, CONSTANT_VALUES_LIKE_THIS, foo.namespaceNamesLikeThis.bar, filenameslikethis.js.
```
### 전역 변수
- 아주 특수한 경우를 제외 하곤, 전역 변수를 사용하지 않는다.
- 특히, 암묵적인 전역 선언을 조심하자.
```md
// Bad
function sum(x, y) {
  result = x + y;
  return result;
}
// Bad
function foo() {
  let a = b = 0; // let a = (b = 0);와 같다. b가 암묵적 전역이 된다.
}

// Good
function sum(x, y) {
  let result = x + y;
  return result;
}

// Good
function foo() {
  let a, b;
  a = b = 0;
}
```

### 선언과 할당
- 변수
  - 값이 변하지 않는 변수는 const
  - 값이 변하는 변수는 let
  - 변수는 항상 사용 시점에 선언 및 할당을 한다. 하지만 const 는 let 보다 언제나 위쪽에 선언한다.
```md
// Bad - 블록 스코프 밖에서 변수 선언
function foo() {
  const len = this._array.length;
  let i = 0;
  let j = 0;
  let len2, item;

  for (; i < len; i += 1) {
      ...
  }
  
  len2 = this._array2.length;
  for (j = 0, len2 = this._array2.length; j < len2; j += 1) {
      item = this._array2[j];
      ...
  }
}

// Good 
function foo() {
  const len = this._array.length;
  for (let i = 0; i < len; i += 1) {
      ...
  }

  // 사용 시점에 선언 및 할당
  const len2 = this._array2.length;
  for (let j = 0; j < len2; j += 1) {
      const item = this._array2[j];
      ...
  }
}
```

### 배열과 객체
- 배열과 객체는 반드시 리터럴로 선언 한다.
```md
 // Bad
const emptyArr = new Array();
const arr = new Array(1, 2, 3, 4, 5);

// Bad - 객체 생성자 사용
const emptyObj = new Object();
const obj = new Object();

// Good
const emptyArr = [];
const arr = [1, 2, 3, 4, 5];

// Good
const emptyObj = {};
const obj = {
  pro1: 'val1', 
  pro2: 'val2'
};
```

- 배열 복사 시, 순환문을 사용하지 않는다.
```md
const len = items.length;
let i;

// Bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// Good
const itemsCopy = [...items];
```

- 객체의 매서드 표현 시 축약 메소드 표기를 사용 한다.
```md
// Bad
const atom = {
  value: 1,

  addValue: function(value) {
    return atom.value + value;
  }
};

// Good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  }
};
```
### 함수
- 함수 생성자를 사용하여 선언하지 않는다.
  - 문자열로 전달되는 파라메터가 수행 시점에 eval로 처리되어 실행 속도가 느려진다.
```md
// Bad - 함수 생성자 사용
const doSomething = new Function('param1', 'param2', 'return param1 + param2;');

// Good - 함수 선언식 사용
function doSomething(param1, param2) {
  return param1 + param2;
}

// Good - 함수 표현식 사용
const doSomething = function(param1, param2) {
  return param1 + param2;
};
```

- 함수는 사용 전에 선언되어야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
```md
// Bad - 선언 이전에 사용
const sumedValue = sum(1, 2);
const sum = function(param1, param2) {
  return param1 + param2;
};

// Bad - 선언 이전에 사용
const sumedValue = sum(1, 2);
function sum(param1, param2) {
  return param1 + param2;
};

// Good
const sum = function(param1, param2) {
  return param1 + param2;
};
const sumedValue = sum(1, 2);
```

### Arrow 함수
- 가급적 함수 표현식 대신 화살표 함수를 사용한다.
```md
// Bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// Good
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});
```

- 암시적 반환을 최대한 활용한다.
  - 함수의 본체가 하나의 표현식이면 중괄호를 생략하고 암시적 반환을 사용할 수 있다. 그 외에는 return문을 명시해야 한다.
```md
// Bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// Good - 암시적 return을 사용
[1, 2, 3].map(number => `A string containing the ${number + 1}.`);
```

### Promise Executor 함수
- Promise Executor 함수에 async 함수를 사용하지 않는다.
  - 비동기 Excutor 함수가 throw한 오류를 잡을 수 없고, Promise가 reject되지 않아 디버깅이 어렵다.
```md
// Bad
const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});

// Good
const result = new Promise((resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

### Destructuring
- 오브젝트의 프로퍼티에 접근할 때는 Destructuring을 이용한다.
```md
// Bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// Bad
const first = arr[0];
const second = arr[1];

// Good
function getFullName(obj) {
  const {firstName, lastName} = obj;

  return `${firstName} ${lastName}`;
}

// Good
const [first, second] = arr;

// Good
function getFullName({firstName, lastName}) {
  return `${firstName} ${lastName}`;
}
```

### 템플릿 문자열
- 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.
```md
// Bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// Bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// Bad - 일반적인 경우, 홑따옴표를 사용
function sayHi(name) {
  return `How are you name?`;
}

// Good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

### 모듈
- 항상 import와 export를 이용한다.
```md
// Best
import {es6} from './AirbnbStyleGuide';
export default es6;

// Bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// Good
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;
```

- wildcard import는 사용하지 않는다.
```md
// Bad
import * from './AirbnbStyleGuide';

// Good
import * as AirbnbStyleGuide from './AirbnbStyleGuide';
```

### 조건 확인
- 삼중 등호 연산자인 ===, !==만 사용한다.
```md
const numberB = 777;

// Bad
if (numberB == '777') {
  ...
}

// Good
if (numberB === 777) {
  ...
}
```

## Vue 코드 작성 가이드
### 컴포넌트 이름에 합성어 사용
- root 컴포넌트인 App 과 <transition>, <component>등 Vue에서 제공되는 빌트인 컴포넌트를 제외하고 컴포넌트의 이름은 항상 합성어를 사용해야 한다.
- 모든 HTML 엘리먼트의 이름은 한 단어이기 때문에 합성어를 사용하는 것은 기존 그리고 향후 HTML엘리먼트와의 충돌을 방지해 준다.
```md
// bad
Vue.component(‘todo’, {
// …
})
export default {
  name: 'Todo',
  // ...
}

// Good
Vue.component('todo-item', {
  // ...
})
export default {
  name: 'TodoItem',
  // ...
}
```

### 컴포넌트 데이터
- 컴포넌트의 data는 반드시 함수여야 한다.
- 컴포넌트(i.e. new Vue를 제외한 모든곳)의 data 프로퍼티의 값은 반드시 객체(object)를 반환하는 함수여야 한다.
```md
// bad
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})
export default {
  data: {
    foo: 'bar'
  }
}

// good
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})
// In a .vue file
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}

// It's OK to use an object directly in a root
// Vue instance, since only a single instance
// will ever exist.
new Vue({
  data: {
    foo: 'bar'
  }
})
```

### Props 정의
- Prop은 가능한 상세하게 정의되어야 한다.
```md
// bad
props: ['status']

// good
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

### Props는 가급적 Primitive 형만 사용하자
- Vue.js는 JavaScript 원시 값 (string, number, boolean) 및 함수만을 사용하고 복잡한 Object는 피하는게 좋다.
- 개별적으로 prop 속성을 사용함으로써 컴포넌트는 명확한 API를 가진다.
- 원시 자료형과 함수만을 props 값으로 사용하면 컴포넌트 API가 네이티브 HTML(5) 엘리먼트의 API와 유사해진다.
```md
// bad
<range-slider :config="complexConfigObject"></range-slider>

// good
<range-slider
  :values="[10, 20]"
  min="0"
  max="100"
  step="5"
  :on-slide="updateInputs"
  :on-end="updateResults">
</range-slider>
```

### v-for 에 key 지정
- v-for는 key와 항상 함께 사용합니다.
- 서브트리의 내부 컴포넌트 상태를 유지하기 위해 v-for는 _항상_ key와 함께 요구됩니다. 비록 엘리먼트이긴 하지만 에니메이션의 객체 불변성과 같이 예측 가능한 행동을 유지하는것은 좋은 습관입니다.
```md
// bad
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>

// good
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

### v-if와 v-for를 동시에 사용하지 말것
- 다음과 같은 경우에만 사용 할것
  - 리스트 목록을 필터링하기 위해서 (e.g. v-for="user in users" v-if="user.isActive"). 이 경우 users을 새로운 computed 속성으로 필더링된 목록으로 대체 (e.g. activeUsers).
  - 숨기기 위해 리스트의 랜더링을 피할 때 (e.g. v-for="user in users" v-if="shouldShowUsers"). 이 경우 v-if를 컨테이너 엘리먼트로 옮김 (e.g. ul, ol).
```md
// bad
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

// Good
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

### Private 속성 이름
- 플러그인, mixin 등에서 커스텀 사용자 private 프로터피에는 항상 접두사 $_를 사용하라. 다른 사람의 코드와 충돌을 피하려면 named scope를 포함하라. (e.g. $_yourPluginName_).
```md
// bad
var myGreatMixin = {
  // ...
  methods: {
    update: function () {
      // ...
    }
  }
}
var myGreatMixin = {
  // ...
  methods: {
    _update: function () {
      // ...
    }
  }
}
var myGreatMixin = {
  // ...
  methods: {
    $update: function () {
      // ...
    }
  }
}
var myGreatMixin = {
  // ...
  methods: {
    $_update: function () {
      // ...
    }
  }
}

// good
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction()
    }
  }
}

function myPrivateFunction() {
  // ...
}

export default myGreatMixin
```

### 컴포넌트 파일 나누기
- 서로 연관이 있는 컴포넌트를 하나의 파일에 위치 시키지 말고 각각 파일을 만들자.
- 합쳐놓으면 찾기도 어렵고 어짜피 WebPack 에서 알아서 하나로 합쳐줄 것이다.
```md
// bad
Vue.component('TodoList', {
  // ...
})
Vue.component('TodoItem', {
  // ...
})

// good
components/
|- TodoList.vue
|- TodoItem.vue
```

### 싱글 파일 컴포넌트 이름 규칙 지정 (casing)
- 단일 파일 구성 요소의 파일 이름은 항상 PascalCase이거나 항상 kebab-case 여야 한다.
- PascalCase는 가능한 경우 JS (X) 및 템플릿의 구성 요소를 참조하는 방식과 일치하므로 코드 편집기의 자동 완성에 가장 적합함. 그러나 대소 문자를 구분하는 파일 이름은 대소 문자를 구분하지 않는 파일 시스템에서 문제를 일으킬 수 있으므로 kebab-case도 완벽하게 수용 할 수 있다.
- 우리는 kebab-case을 우선 차용 한다!!!
  - PascalCase가 자바스크립트 개발 시에는 좀더 유리하지만 (자동완성등) HTML은 대소문자 구분을 하지 않기 때문에 어짜피 kebab 스타일을 사용해야함. 그러니까 그냥 한가지로 통일

```md
// bad
components/
|- mycomponent.vue

components/
|- myComponent.vue

// good
components/
|- MyComponent.vue

components/
|- my-component.vue
```

### 베이스 컴포넌트 이름
- 연관성 있는 컴포넌트는 접두사를 공통적으로 통일하자.
```md
// bad
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue

// good
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue

components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue

components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

### 싱글 인스턴스 컴포넌트 이름
- 단 하나의 파일로 이루어진 컴포넌트는 접두사를 통해 하나만 존재한다는 것을 표현하자.
```md
// bad
components/
|- Heading.vue
|- MySidebar.vue

// good
components/
|- TheHeading.vue
|- TheSidebar.vue
```

### 강한 연관성을 가진 컴포넌트 이름
- 부모와 밀접하게 연결된 자식 컴포넌트는 부모 컴포넌트 이름을 접두사로 포함해야합니다.
```md
// bad
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue

components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue

components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

### 컴포넌트 이름에서 단어 순서
- 컴포넌트의 이름은 맨앞에 일반적인 단어로 시작하고 마지막에 상태 등의 변경에 대한 설명을 포함하는 단어로 구성 하자.
```md
// bad
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue

// good
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

### 전체 이름 컴포넌트 이름
- 컴포넌트 이름은 항상 축약된 단어를 쓰지말고 전체 단어를 사용하자
```md
// bad
components/
|- SdSettings.vue
|- UProfOpts.vue

// good
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### Prop 이름 규칙 지정(casing)
- 속성명은 항상 camelCase로, 실제 사용 시에는 kebab-case로 (HTML 대소문자 구분 안함 때문에)
```md
// bad
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>

// good
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```

### 다중 속성 엘리먼트
- 속성이 여러개인 컴포넌트를 선언하여 사용 할 경우, 속성 별로 개행 처리 하여 의미를 명확하게 한다.
```md
// bad
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<MyComponent foo="a" bar="b" baz="c"/>

// good
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

### 축약형 디렉티브
- 되도록이면 일관되게 축약형을 쓰던지 말던지 하자. (: for v-bind:, @ for v-on: and # for v-slot)
```md
// bad
<input
  v-bind:value="newTodoText"
  :placeholder="newTodoInstructions"
>
<input
  v-on:input="onInput"
  @focus="onFocus"
>

// good
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>
<input
  v-bind:value="newTodoText"
  v-bind:placeholder="newTodoInstructions"
>
<input
  @input="onInput"
  @focus="onFocus"
>
<input
  v-on:input="onInput"
  v-on:focus="onFocus"
>
```

### 컴포넌트 구조
- 아래와 같은 구조를 권장한다.
```md
<template lang="html">
	<div class="Ranger__Wrapper">
		<!-- ... -->
	</div>
</template>

<script type="text/javascript">
  export default {
	// 이름 적는 것을 잊지마세요
    name: 'RangeSlider',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {
			bar: {}, // 알파벳순으로 정렬합니다
			foo: {},
			fooBar: {},
		},
    // 컴포넌트 변수 그룹
    data() {},
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {},
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
    mounted() {},
};
</script>

<style scoped>
  .Ranger__Wrapper { /* ... */ }
</style>
```