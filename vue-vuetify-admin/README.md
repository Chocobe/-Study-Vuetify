# Vuetify 기본편

## ``Vuetify`` 란?

``Vuetify``는 ``Vue.js`` 프레임 워크에 특화된 ``UI 프레임워크`` 입니다.

``Material Design``을 기반으로 한 UI를 제공하며, 다른 UI 프레임워크와 차이점은 ``Vue Component``로 제공한다는 점 입니다.

``Vue Component``를 제공한다는 뜻은 다음과 같습니다.

```html
<template>
  <v-app>
    <v-app-bar app>
      <!-- ... -->
    </v-app-bar>

    <v-navigation-drawer app>
      <!-- ... -->
    </v-navigation-drawer>

    <v-main>
      <!-- ... -->
    </v-main>
  </v-app>
</template>
```



<br/><hr/><br/>



## 01. ``app`` 속성 Layout

Vuetify의 기본 Layout은 ``app`` 속성으로 설정할 수 있습니다.

``app`` 속성을 사용하면 다음과 같은 ``Layout``을 만들 수 있습니다.

(이하 ``Layout``은 아래 Layout 도식을 지칭합니다)

<img src="./readmeAssets/01-layout-01.png" alt="사진: Layout" width="700px"><br/>

<br/>

``Vuetify`` 프로젝트를 구성하는 ``Layout`` 컴포넌트는 다음과 같습니다.

* ``<v-app>``
    * 프로젝트의 ``Root`` 컴포넌트 입니다.
    * 프로그램이 실행될 때, ``진입점`` 역할을 합니다.

* ``<v-app-bar app>``
    * ``Header`` 컴포넌트 입니다.

* ``<v-navigation-drawer app>``
    * 좌측 메뉴 컴포넌트 입니다.

* ``<v-footer app>``
    * 푸터 컴포넌트 입니다.

* ``<v-main>``
    * 프로젝트상의 컨텐츠 영역 전체 Wrapper 컴포넌트 입니다.
    * 브라우저 랜더링 시, ``<main>`` 태그로 치환됩니다.

* ``<v-container>``
    * 실제 컨텐츠 Wrapper 컴포넌트 입니다.

<br/>

위의 ``Layout``은 프로젝트 최상위 컴포넌트인 ``App.vue``에 작성해야 합니다.

```html
<!-- App.vue -->

<template>
  <v-app>
    <!-- 헤더 컴포넌트 -->
    <v-app-bar app>
      <!-- v-app의 구성요소로써 동작하기 위해, "app" 속성 할당 -->
    </v-app-bar>

    <!-- 메뉴 컴포넌트 -->
    <v-navigation-drawer app>
      <!-- v-app의 구성요소로써 동작하기 위해, "app" 속성 할당 -->
    </v-navigation-drawer>

    <!-- main 컴포넌트 -->
    <v-main>
      <v-container>
        <!-- 컨텐츠 영역 -->
      </v-container>
    </v-main>

    <v-footer app>
      <!-- v-app의 구성요소로써 동작하기 위해, "app" 속성 할당 -->
    </v-footer>
  </v-app>
</template>
```



<br/><hr/><br/>



## 02. ``Vuetify`` 설치하기

생성한 Vue 프로젝트에 ``Vuetify``를 설치를 위해, 터미널에 다음 명령을 실행 합니다.

```bash
$ vue add vuetify
```

<br/>

설치가 완료된 후, 로컬 서버를 실행 하면 다음과 같은 결과를 확인할 수 있습니다.

<img src="./readmeAssets/02-install-01.png" alt="사진: 설치" width="700px"><br/>



<br/><hr/><br/>



## 03. ``메뉴`` 만들기

``Layout``에서 ``메뉴``에 해당하는 부분은 ``<v-navigation-drawer app>`` 입니다.

[``Navigation Drawers``](https://vuetifyjs.com/en/components/navigation-drawers/)에서 필요한 소스코드를 사용할 수 있습니다.

사용할 소스코드는 ``app.vue``에서 다음 위치에 사용하면, ``Layout``의 ``<v-navigation-drawer app>``을 구현할 수 있습니다.

```html
<template>
	<v-app>
		<!-- 헤더 -->
		<v-app-bar app color="primary" dark>
			<!-- ... -->
		</v-app-bar>

		<!-- 메뉴 -->
		<!-- 삽입한 소스코드 -->
    <!-- 🐫 permanent 속성 삭제, app 속성 추가 -->
		<v-navigation-drawer app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title"> Application </v-list-item-title>
					<v-list-item-subtitle> subtext </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>
```

<br/>

``<template>``에서 참조하고 있는 데이터를 ``<script>``에 추가해 줍니다.

```html
<script>
import Vue from "vue";

export default {
  data: () => {
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
    right: null,
  }
}
</script>
```

<br/>

지금까지의 결과는 다음과 같습니다.

<img src="./readmeAssets/03-menu-01.png" width="700px" alt="사진: v-navigation-drawer"><br/>

<br/>

현재 추가한 ``<v-navigation-drawer>`` 컴포넌트에는 ``router`` 기능이 없는 상태입니다.

``router`` 기능을 추가하기 전에, 사용할 페이지 2개를 생성해 보겠습니다.

1. ``Dashboard.vue``
2. ``GridSystem.vue``

```html
<!-- 경로: @/views/Dashboard.vue -->
<!-- router: "/" -->
<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  //
}
</script>

<style></style>
```

<br/>

```html
<!-- 경로: @/views/GridSystem.vue -->
<!-- router: "/grid-system" -->
<template>
  <div>
    <h1>Grid System</h1>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  //
}
</script>

<style></style>
```

<br/>

이제 우리가 만든 페이지를 ``<v-navigation-drawer>``에서 ``router``로 사용할 수 있도록 ``app.vue``를 수정해 보겠습니다.

``router`` 기능을 할 실제 컴포넌트는 ``<v-list-item>`` 컴포넌트 이며, 해당 문서를 참고하여 ``router`` 기능을 구현할 수 있습니다.

> [``🐫 <v-list-item> 메뉴얼: https://vuetifyjs.com/en/api/v-list-item/#props-to``](https://vuetifyjs.com/en/api/v-list-item/#props-to)

<br/>

```html
<template>
	<v-app>
		<!-- 헤더 -->
		<v-app-bar app color="primary" dark>
			<!-- ... -->
		</v-app-bar>

		<!-- 메뉴 -->
		<!-- 삽입한 소스코드 -->
		<v-navigation-drawer app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title"> Application </v-list-item-title>
					<v-list-item-subtitle> subtext </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<!-- 🐫 :to 속성 추가 -->
				<v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import Vue from "vue";

export default {
  data: () => {
    items: [
      { 
        title: 'Dashboard', 
        icon: 'mdi-view-dashboard',
        to: "/",
      },
      { 
        title: 'Grid System',
        icon: 'mdi-image',
        to: "/grid-system",
      },
    ],
    right: null,
  }
}
</script>
```

<br/>

지금까지의 결과는 다음과 같습니다.

<img src="./readmeAssets/03-menu-02.gif" width="700px" alt="사진: 메뉴 결과"><br/>



<br/><hr/><br/>



## 04. ``Hammburger 버튼`` 만들기 (메뉴버튼)

``<v-navigation-drawer>`` 컴포넌트의 ``v-model`` 기본값은 ``null`` 입니다.

``v-model="null"`` 일 경우, 다음과 같이 동작 합니다.

1. 모바일 화면: ``v-model="true"`` 일 때, ``overlay`` 방식으로 출력됩니다.
2. 데스트탑 화면: ``v-model="true"`` 일 때, ``Flex Item`` 방식으로 출력 됩니다. (코드 상 position: ``fixed``)

> [<v-navigation-drawer>의 상태값: https://vuetifyjs.com/en/components/navigation-drawers/#usage](https://vuetifyjs.com/en/components/navigation-drawers/#usage)

<br/>

현재 ``<v-navigation-drawer>``의 ``v-model`` 은 설정하지 않았으므로 ``null`` 상태이며, 모바일 화면에서는 메뉴를 볼 수 없습니다.

이를 해결하기 위해, ``<v-app-bar> (헤더)``에 ``<v-app-bar-nav-icon> (메뉴 아이콘)``을 만들고 ``@click`` 이벤트를 사용하여 메뉴 버튼을 구현하겠습니다.

<br/>

먼저 ``app.vue``의 ``<script>``에 ``isDrawer: boolean (메뉴 상태값)``을 만들고, ``toggleMenu()`` 함수를 만들어 줍니다.

```html
<script>
export default {
  data: () => ({
    // ... 생략

    // 메뉴 상태값
    isDrawer: false,
  }),

  methods: {
    // ... 생략

    // 메뉴 상태값 토글 함수
    toggleMenu() {
      this.isDrawer = !this.isDrawer;
    }
  }
}
</script>
```

<br/>

작성한 함수를 ``<v-app-bar-nav-icon>`` 의 ``@click`` 이벤트에 연결해 주고, ``isDrawer`` 상태값을 ``<v-navigation-drawer>`` 의 ``v-model``에 바인딩 시켜 줍니다.

```html
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- 🐫 @click 이벤트에 toggleMenu() 함수 바인딩 -->
      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- 🐫 v-model에 isDrawer 상태값 바인딩 -->
    <v-navigation-drawer v-model="isDrawer" app>
      <!-- ... 생략 ... -->
    </v-navigation-drawer>
  </v-app>>
</template>
```

<br/>

작성 후, 로컬 서버를 실행하면 메뉴 버튼이 동작하는 것을 볼 수 있습니다.

<img src="./readmeAssets/04-menu-button-01.gif" alt="사진: 메뉴버튼" width="700px"><br/>



<br/><hr/><br/>



## 05. ``Vuetify ESLint`` 설정

``Vuetify``는 ``2.x`` 기준으로 컴포넌트 사용법이 다수 변경 되었습니다.

때문에 ``2.x 이상`` 버전에서 ``2.x 미만`` 문법에 대한 코딩 컨벤션이 달라지게 되는데, 이를 보정하기 위해 ``eslint-plugin-vuetify`` 를 사용 합니다.

<br/>

먼저 ``eslint-plugin-vuetify`` 를 설치 합니다.

```bash
$ npm i eslint-plugin-vuetify
```

<br/>

설치가 완료된 후, ``.eslintrc.js``에 ``eslint-plugin-vuetify`` 설정을 추가해 줍니다.

```javascript
// .eslintrc.js
module.exports = {
  // ... 생략
  extends: [
    // ... 생략
    
    "plugin:vue/base",
    // 또는 "plugin:vue/essential"
    // 또는 "plugin:vue/recommended"
  ],

  plugins: [
    // ... 생략

    "vuetify",
  ],

  rules: {
    // ... 생략

    "vuetify/no-deprecated-classes": "error",
  },
};
```

<br/>

위의 설정이 완료된 ``.eslintrc.js`` 파일은 다음과 같습니다.

```javascript
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		// "plugin:vue/essential",
		"plugin:vue/recommended",
		"eslint:recommended",
		"@vue/prettier",
	],
	plugins: ["vuetify"],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-var": "error",
		"prefer-const": "error",
		"vuetify/no-deprecated-classes": "error",

		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: "all",
				printWidth: 100,
				bracketSpacing: true,
				arrowParens: "avoid",
			},
		],
	},
};
```



<br/><hr/><br/>



## 06. ``Vuetify``의 ``Grid System`` 개념

UI Framework 에는 ``Grid System`` 개념을 가지고 있습니다.

``Grid System``은 ``레이아웃``을 만들기 위한 규격과 사용방법을 나타냅니다.

이러한 ``Grid System``을 사용하는 이유는 다음과 같습니다.

1. 컨텐츠의 ``정렬``과 ``정돈``
2. ``일관적``이고 ``규칙적인`` 디자인
3. ``디자인 가이드``와 ``협업``에 도움
4. 쉬운 ``반응형 디자인 설계``

<br/>

``Vuetify``는 Google의 ``Material Dsign``을 기반으로 하고 있습니다.

> [Material Design 홈페이지: https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins](https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins)

``Vuetify``의 ``Grid System`` 특징은 다음과 같습니다.

1. ``Flex Box``를 사용하여 구축되었습니다.
2. ``12 Column`` Grid를 사용 합니다.
3. ``5가지 Breakpoint``를 가집니다.

<br/>

여기서 ``Breakpoint``는 ``종단점``의 개념으로 ``반응형 디자인``의 ``@media`` 범위를 나타냅니다.

> [Vuetify Breakpoint: https://vuetifyjs.com/en/components/grids/](https://vuetifyjs.com/en/components/grids/)

<img src="./readmeAssets/05-grid-system-01.png" alt="사진: Grid System" width="700px"><br/>

<br/>

위의 가이드에 따르면 ``md`` 스펙의 Viewport에서는 ``하나의 Row``에 ``12개 Column``이 존재 합니다.

만약 ``md`` Viewport일 때, 12개의 Column 중, ``4개 Column`` 만큼 영역을 할당 하려면, 해당 ``v-col``의 ``md``속성으로 지정할 수 있습니다.

```html
<v-row>
  <v-col md="4">
    <!-- ... 생략 ... --->
  </v-col>
</v-row>
```

<br/>

위의 예시를 사용하여, ``md``개수별 예시를 만들면 다음과 같습니다.

```html
<template>
	<div>
		<h1><span class="yellow">md</span> Breakpoint 테스트</h1>

		<v-container fluid>
			<v-row class="pink">
				<v-col md="12">
					<v-card class="pa-3" outlined> md: 12 </v-card>
				</v-col>
			</v-row>

			<v-row class="blue">
				<v-col md="10">
					<v-card class="pa-3" outlined> md: 10 </v-card>
				</v-col>
			</v-row>

			<v-row class="green">
				<v-col md="8">
					<v-card class="pa-3" outlined> md: 8 </v-card>
				</v-col>
			</v-row>

			<v-row class="pink">
				<v-col md="6">
					<v-card class="pa-3"> md: 6 </v-card>
				</v-col>
			</v-row>

			<v-row class="blue">
				<v-col md="4">
					<v-card class="pa-3" outlined> md: 4 </v-card>
				</v-col>
			</v-row>

			<v-row class="green">
				<v-col md="2">
					<v-card class="pa-3" outlined> md: 2 </v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
```

<img src="./readmeAssets/05-grid-system-02.png" alt="사진: Breakpoint" width="700px"><br/>

<br/>



<br/><hr/><br/>



## 07. ``Grid System``으로 배치되는 ``v-row`` 와 ``v-col``

위에서 설명한 ``Grid System`` 개념이 반영된 컴포넌트는 다음과 같습니다.

1. ``v-container``
      * 컴텐츠의 폭을 나타내며, 웹사이트의 컨텐츠를 중앙에 배치합니다.

2. ``v-row``
      * Grid의 ``Row`` 역할을 하며, ``v-col``을 하위 컴포넌트로 가집니다. 
      * ``v-col`` 컴포넌트의 ``레이아웃 제어`` 기능을 가집니다.

3. ``v-col``
      * 화면에 출력할 실제 컨텐츠 (v-card 등)을 하위 컴포넌트로 가집니다.
      * ``v-row``의 하위 컴포넌트로 위치해야 합니다.

4. ``v-spacer``
      * 컴포넌트간 간격을 만들어 줍니다.

<br/>

위의 요소들을 사용하면 다음과 같이 사용할 수 있습니다.

```html
<template>
	<div>
		<v-container fluid>
			<!-- v-row, v-col 테스트 -->
			<h1 class="mb-3">v-row, v-col</h1>
			<v-row>
				<v-col>
					<v-card class="pa-3" outlined> Column 0 - 0 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 0 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 0 - 2 </v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-col>
					<v-card class="pa-3" outlined> Column 1 - 0 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 1 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 1 - 2 </v-card>
				</v-col>
			</v-row>
		</v-container>

		<!-- v-space 테스트 -->
		<h1 class="mt-3">v-space</h1>

		<v-card class="mt-5 pa-3" outlined>
			<v-row>
				<v-col>
					<v-card class="pa-3" outlined> Column 2 - 0 </v-card>
				</v-col>

				<v-spacer></v-spacer>

				<v-col>
					<v-card class="pa-3" outlined> Column 2 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 2 - 2 </v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-spacer></v-spacer>

				<v-col>
					<v-card class="pa-3" outlined> Column 3 - 0 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 3 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 3 - 2 </v-card>
				</v-col>
			</v-row>
		</v-card>
  </div>
</template>
```

<br/>

<img src="./readmeAssets/05-grid-system-03.png" alt="사진: Grid System 컴포넌트" width="700px"><br/>



<br/><hr/><br/>



## 08. ``v-row`` 와 ``v-col``의 ``justify-content``, ``align-items``, ``align-self`` 설정

``v-row``는 ``Flex Box`` 속성을 가지고 있고, ``v-col``은 ``Flex Item`` 속성을 가지고 있습니다.

따라서, ``flex``의 하위속성인 ``justify-content``와 ``align-items``를 설정할 수 있습니다.

<br/>

``justify-content``와 ``align-items``는 ``Flex Box``의 하위 속성이므로, ``v-row``에서 설정할 수 있습니다.

```html
<v-row justify="start"></v-row>

<v-row justify="center"></v-row>

<v-row justify="end"></v-row>

<v-row justify="space-between"></v-row>

<v-row justify="space-around"></v-row>
```

<br/>

```html
<v-row align="start"></v-row>

<v-row align="center"></v-row>

<v-row align="end"></v-row>
```

<br/>

```html
<v-row style="height: 150px">
  <v-col align-self="start"></v-col>
</v-row>

<v-row style="height: 150px">
  <v-col align-self="center"></v-col>
</v-row>

<v-row style="height: 150px">
  <v-col align-self="end"></v-col>
</v-row>
```

<br/>

위의 예시를 사용하면 다음과 같습니다.

```html
<template>
	<div>
		<!-- align 속성 테스트 -->
		<h1 class="mt-5">align 속성</h1>

		<v-card class="mt-5 pa-3" outlined>
			<v-row class="green" style="height: 150px">
				<v-col>
					<v-card class="pa-3" outlined>align: start</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: start</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: start</v-card>
				</v-col>
			</v-row>

			<v-row class="pink" style="height: 150px" align="end">
				<v-col>
					<v-card class="pa-3" outlined>align: end</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: end</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: end</v-card>
				</v-col>
			</v-row>

			<v-row class="purple" style="height: 150px" align="center">
				<v-col>
					<v-card class="pa-3"> align: center </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3"> align: center </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3"> align: center </v-card>
				</v-col>
			</v-row>
		</v-card>

		<!-- align-self 테스트 -->
		<h1 class="mt-5">align-self 테스트</h1>

		<v-card class="pa-3" outlined>
			<v-row class="cyan" style="height: 150px">
				<v-col align-self="start">
					<v-card class="pa-3"> align-self: start </v-card>
				</v-col>

				<v-col align-self="end">
					<v-card class="pa-3" outlined> align-self: end </v-card>
				</v-col>

				<v-col align-self="center">
					<v-card class="pa-3" outlined> align-self: center </v-card>
				</v-col>
			</v-row>
		</v-card>

		<!-- justify 테스트 -->
		<h1 class="mt-5">justify 테스트</h1>

		<v-card class="mt-5 pa-3">
			<v-row class="green" justify="start">
				<v-col md="4">
					<v-card class="pa-3"> justify: start </v-card>
				</v-col>

				<v-col md="4">
					<v-card class="pa-3"> justify: start </v-card>
				</v-col>
			</v-row>

			<v-row class="pink" justify="end">
				<v-col md="4">
					<v-card class="pa-3" outlined> justify: end </v-card>
				</v-col>

				<v-col md="4">
					<v-card class="pa-3" outlined> justify: end </v-card>
				</v-col>
			</v-row>

			<v-row class="purple" justify="center">
				<v-col md="4">
					<v-card class="pa-3" outlined> justify: center </v-card>
				</v-col>

				<v-col md="4">
					<v-card class="pa-3" outlined> justify: center </v-card>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>
```

<br/>

<img src="./readmeAssets/08-justify-align-01.png" alt="사진: justify, align" width="700px"><br/>



<br/><hr/><br/>



## 09. ``v-col``의 ``cols`` 속성과 ``Breakpoint``

``v-col``은 ``v-row``에서 몇개의 ``Column`` 영역을 가질 것인지 설정할 수 있습니다.

이 설정이 ``cols`` 입니다.

``cols``에 설정한 ``Column 개수``는 ``xs`` Breakpoint에서 Column 개수이며, ``cols="auto"``를 설정할 경우에는 ``v-col``의 컨텐츠 크기만큼만 영역을 차지하게 됩니다.

<br/>

``v-col``의 ``cols`` 속성을 사용하면 다음과 같습니다.

```html
<template>
	<div>
		<!-- cols 개수 설정 -->
		<h1>cols 개수 설정</h1>

		<v-container class="mt-3" fluid>
			<v-row>
				<template v-for="i in 12">
					<v-col :key="i" cols="12" sm="6" md="4" lg="3">
						<v-card class="pa-3"> Column {{ i }} </v-card>
					</v-col>
				</template>
			</v-row>
		</v-container>

		<!-- cols="auto" 설정 -->
		<h1 class="mt-5">cols="auto" 설정</h1>

		<v-container class="mt-3" fluid>
			<v-row>
				<template v-for="i in 12">
					<v-col :key="i" cols="auto">
						<v-card class="pa-3" outlined> Column {{ i }} </v-card>
					</v-col>
				</template>
			</v-row>
		</v-container>

		<!-- Breakpoint 별 cols 설정 -->
		<h1 class="mt-5">Breakpoint 별 cols 설정</h1>

		<v-container class="mt-3" fluid>
			<v-row>
				<template v-for="i in 12">
					<v-col :key="i" cols="2" sm="6" md="4" lg="3" xl="1">
						<v-card class="pa-3"> Column {{ i }} </v-card>
					</v-col>
				</template>
			</v-row>
		</v-container>
	</div>
</template>
```

<br/>

<img src="./readmeAssets/09-cols-01.png" alt="사진: cols 속성" width="700px"><br/>



<br/><hr/><br/>



## 10. ``Breakpoint Service Object``

``Breakpoint`` 에 대한 상태값을 가진 객체를 말합니다.

각 Viewport 별로 동작되는 상태값을 나타내며, 직접 커스터마이징도 가능 합니다.

> [``Breakpoint Service Object``: https://vuetifyjs.com/en/features/breakpoints/#breakpoint-service-object](https://vuetifyjs.com/en/features/breakpoints/#breakpoint-service-object)

<br/>

``Breakpoint Service Object``의 접근 경로는 다음과 같습니다.

```javascript
this.$vuetify.breakpoint
```

<br/>

```javascript
this.$vuetify.breakpoint: {
  // Breakpoints 상태값
  // 현재 Viewport가 Breakpoint에 해당할 경우, "true"
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean

  // Conditionals 상태값
  //Breakpoints 의 범위형 상태값
  xsOnly: boolean // xs 일 경우, "true"
  smOnly: boolean // sm 일 경우, "true"
  smAndDown: boolean // sm 이하일 경우, "true"
  smAndUp: boolean // sm 이상일 경우, "true"
  mdOnly: boolean // md 일 경우, "true"
  mdAndDown: boolean // md 이하일 경우, "true"
  mdAndUp: boolean // md 이상일 경우, "true"
  lgOnly: boolean // lg 일 경우, "true"
  lgAndDown: boolean // lg 이하일 경우, "true"
  lgAndUp: boolean // lg 이상일 경우, "true"
  xlOnly: boolean // xl 일 경우, "true"

  // true if screen width < mobileBreakpoint
  // 모바일 Viewport에 대한 상태값
  mobile: boolean
  // 모바일에 해당하는 Breakpoint
  mobileBreakpoint: number

  // Current breakpoint name (e.g. 'md')
  // 현재 Breakpoint 명
  name: string

  // Dimensions
  // 현재 Viewport 크기값
  height: number
  width: number

  // Thresholds
  // Configurable through options
  // 각 Breakpoint의 기준값
  {
    xs: number
    sm: number
    md: number
    lg: number
  }

  // Scrollbar
  scrollBarWidth: number
}
```

<br/>

만약, 위의 Breakpoint 값을 ``변경`` 하고자 하면, ``Vuetify`` 컴포넌트 생성자에서 Override할 수 있습니다.

```javascript
// 경로: @/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	breakpoint: {
    // 모바일 Breakpoint를 "sm"로 변경
		mobileBreakpoint: "sm",

    thresholds: {
      // "xs" Breakpoint 기준값을 "500px"로 변경
      xs: 500,
    },
	},
});
```



<br/><hr/><br/>



## 11. Typography

``Vuetify`` 에서는 테스트에 대한 ``Helper Class`` 를 제공 합니다.

> [Typography: https://vuetifyjs.com/en/styles/text-and-typography/](https://vuetifyjs.com/en/styles/text-and-typography/)

<br/>

``Typograph``를 적용할 태그에 ``Style Class``를 사용하면 적용 되며, 특정 Viewport 이상에서만 적용되는 ``Helper Class``도 사용할 수 있습니다.

위의 공식문서에서 제공하는 ``Helper Class``는 ``Base`` 와 ``Value``로 분리할 수 있습니다.

```bash
Heading 1: text-h1
  "Base": text
  "Value": h1
```

여기에 ``sm`` Viewport 이상에서만 적용되는 ``Helper Class``를 사용한다면, ``Base`` 와 ``Value`` 사이에 ``Breakpoint``를 추가하여 사용할 수 있습니다.

```bash
Heading 1: text-sm-h1
  "Base": text
  "Breakpoint": sm
  "Value": h1
```

<br/>

위와 같은 형식으로 모든 ``Typography``를 사용할 수 있습니다.



<br/><hr/><br/>



## 11. Color

``Vuetify``는 ``Material Design`` 스타일을 기반으로 합니다.

> [Material Design: https://material.io/design/color/the-color-system.html#color-usage-and-palettes](https://material.io/design/color/the-color-system.html#color-usage-and-palettes)

<br/>

따라서 ``Vuetify``에서도 ``Material Design``의 색상을 그대로 사용할 수 있습니다.

> [Colors: https://vuetifyjs.com/en/styles/colors/#material-colors](https://vuetifyjs.com/en/styles/colors/#material-colors)

<br/>

위의 색상은 ``Style Class``에 ``색상명``으로 사용할 수 있습니다.

```html
<p class="red lighten-1">
  배경색: Red 의 lighten-1 색상
</p>
```

<br/>

위의 색상 사용법은 ``배경색``으로 사용된 방식이며, ``텍스트 색상``으로 사용하고자 한다면, 다음과 같이 사용할 수 있습니다.

```bash
색상명--text
```

```html
<p class="red--text">
  텍스트색: Reg
</p>
```

<br/>

기존 CSS에서도 텍스트 색에는 ``Alpha``값을 사용할 수 없듯이, 텍스트색에 ``lighten`` 또는 ``darken``은 사용할 수 없습니다.

<br/>

``Vuetify``에는 ``Theme``에 대한 값이 설정되어 있고, ``Theme``에서 정의한 색상은 특수한 이름을 가지고 있습니다.

* primary: 메인 색상
* secondary: 보조 색상
* accent: 강조 색상
* error: 에러 상태 색상
* info: 인포 색상
* success: 성공 상태 색상
* warning: 경고 상태 색상

<br/>

위의 색상은 기본값을 가지고 있는데, 이를 커스터마이징 하기 위해서는 ``Vuetify`` 인스턴스 생성부에서 Override 할 수 있습니다. (Vuetify ``Presets`` 값 변경)

> [Presets: https://vuetifyjs.com/en/features/presets/#default-preset](https://vuetifyjs.com/en/features/presets/#default-preset)

<br/>

```javascript
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	breakpoint: {
		// mobileBreakpoint: "xs",
	},

  // 테마 속성
	theme: {
		themes: {
			light: {
				primary: "#FF9800",
				secondary: "#EA80FC",
        // ...생략
			},
		},
	},
});
```



<br/><hr/><br/>



## 12. Helper Class

``UI Framework``는 자조 사용하는 스타일을 ``Helper Class``로 제공 합니다.

``Vuetify`` 역시 ``Helper Class``를 제공하며, UI Framework가 ``깨지는 현상``을 막기 위해서 ``필히 사용``해야 합니다.

<br/>

``Helper Class``는 지금까지 사용했던 ``ma-3``, ``pa-3``, ``primary``, ``secondary`` 등 과 같은 ``Style Class`` 입니다.

해당 내용은 공식 홈페이지의 ``Styles and animations`` 카테고리로 안내하고 있습니다.

> [Styles and animations: https://vuetifyjs.com/en/styles/css-reset/](https://vuetifyjs.com/en/styles/css-reset/)

<br/>

<img src="./readmeAssets/12-helper-class-01.png" alt="사진: Styles and animations" width="700px"><br/>



<br/><hr/><br/>



## 13. Component: Data Table

Vuetify의 ``데이터 테이블`` 컴포넌트 입니다.

> [Data Table: https://vuetifyjs.com/en/components/data-tables/](https://vuetifyjs.com/en/components/data-tables/)

```html
<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>
```

<img src="./readmeAssets/13-data-table-01.png" alt="사진: Data Table" width="700px"><br/>



<br/><hr/><br/>



## 14. Button

Vuetify의 ``버튼`` 컴포넌트 입니다.

```html
<template>
  <v-btn class="primary">Primary</v-btn>
</template>
```

<br/>

<img src="./readmeAssets/14-button-01.png" alt="사진: Button" width="700px"><br/>



<br/><hr/><br/>



## 15. Icon

Vuetify의 ``아이콘`` 컴포넌트 입니다.

```html
<v-icon color="primary">mdi-account</v-icon>
```

<br/>

``아이콘`` 컴포넌트는 ``Material Design Icons``가 기본으로 설치되어 있습니다.

> [Material Design Icons: https://materialdesignicons.com/](https://materialdesignicons.com/)

검색한 아이콘은 ``mdi`` 를 ``Prefix``로 하여, ``kebab-case`` 로 작성하여 사용할 수 있습니다.

* 검색한 아이콘: "mdiAccount"
* <v-icon>mdi-account</v-icon>

<br/>

<img src="./readmeAssets/15-icon-01.png" alt="사진: Icon" width="700px"><br/>



## 16. Form

Vuetify에서는 사용자 입력용 컴포넌트를 ``Form`` 카테고리에 안내하고 있습니다.

> 메뉴: [UI Components > Form inputs & controls](https://vuetifyjs.com/en/components/autocompletes/#usage)

<img src="./readmeAssets/16-form-01.png" alt="사진: Form" width="700px"><br/>



<br/><hr/><br/>



## 17. Sparklines

Vuetify의 ``라인 차트`` 컴포넌트 입니다.

> [Sparklines: https://vuetifyjs.com/en/components/sparklines/](https://vuetifyjs.com/en/components/sparklines/)

<br/>

```html
<template>
  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>
```

<br/>

<img src="./readmeAssets/17-sparkline-01.png" alt="사진: Sparkline" width="700px"><br/>



<br/><hr/><br/>



# Vuetify 실전편

## b-01. ``SCSS Variables``

``Vuetify``의 기본 스타일은 ``SCSS Variables``를 사용하여 수정할 수 있습니다.

``UI Framework``의 구조를 깨지 않기 위해서, ``Vuetify``의 기본 스타일을 변경할 때는 필수로 ``SCSS Variables``를 사용해야 합니다.

> [``SCSS Variables``: https://vuetifyjs.com/en/features/sass-variables/](https://vuetifyjs.com/en/features/sass-variables/)

<img src="./readmeAssets/a-01-scss-variables-01.png" alt="사진: SCSS Variables" width="700px"><br/>

<br/>

Vuetify를 ``Vue CLI``를 사용하여 설치 하였다면, 함꼐 설치 되어 있으므로, 추가 환경설정은 필요 없습니다.

<br/>

``SCSS Variables``는 각 ``컴포넌트 API`` 페이지에서 가이드를 하지만, ``SCSS Variables`` 의 ``Variable API`` 페이지에서 ``검색``으로 안내 받을 수 있습니다.

[``Variable API``: https://vuetifyjs.com/en/features/sass-variables/#variable-api](https://vuetifyjs.com/en/features/sass-variables/#variable-api)

<img src="./readmeAssets/a-01-scss-variables-02.png" alt="사진: SCSS Variable 검색" width="700px"><br/>

<br/>

``Vuetify``의 ``SCSS Variables``을 Override 하려면, 다음 조건에 맞는 파일에 작성 해야 합니다.

* ``src/styles 또는 scss 또는 sass/variables.scss`` 경로의 파일에 작성

위 조건에 맞는 파일이 있다면, ``vuetify-loader``가 자동으로 ``SCSS Variables`` 파일로 인식하고 컴파일 합니다.

<br/>

``v-btn`` 컴포넌트의 ``size``를 수정해 보겠습니다.

1. ``SCSS Variables`` 페이지에서 ``v-btn``을 검색합니다.

<img src="./readmeAssets/a-01-scss-variables-03.png" alt="사진: v-btn 검색" width="700px"><br/>

<br/>

2. ``v-btn`` 관련 변수 중, ``size`` 변수를 찾으면 다음과 같습니다.

<img src="./readmeAssets/a-01-scss-variables-04.png" alt="사진: v-btn size" width="700px"><br/>

3. ``src/styles/variables.scss`` 파일을 생서하고, 다음과 같이 작성 합니다.

```scss
// 경로: @/styles/variables.scss

$btn-sizes: (
  'x-small': 10,
  'small': 18,
  'default': 26,
  'large': 34,
  'x-large': 42
);
```

<br/>

실행 결과를 확인하면 다음과 같이 버튼의 크기가 작아진 것을 확인할 수 있습니다.

<img src="./readmeAssets/a-01-scss-variables-05.png" alt="사진: SCSS Variables 수정 전" width="500px"><br/>

<img src="./readmeAssets/a-01-scss-variables-06.png" alt="사진: SCSS Variables 수정 후" width="500px"><br/>

<br/>

위의 예시는 ``컴포넌트``별 스타일 수정이었고, Vuetify의 ``Helper Class``의 수정도 가능 합니다.

대표적인 예로 ``Typography``의 ``h1`` 을 수정해 보겠습니다.

1. ``h1``에 대한 ``Helper Class``는 ``Text and typography`` 메뉴에서 ``Helper Class`` 명을 확인 합니다.

<img src="./readmeAssets/a-01-scss-variables-07.png" alt="사진: Typography 페이지" width="500px"><br/>

<br/>

2. ``Typography`` 페이지에서 ``h1 Helper Class`` 명을 확인 합니다.

<img src="./readmeAssets/a-01-scss-variables-08.png" alt="사진: h1" width="500px"><br/>

<br/>

3. ``API 메뉴``의 ``$vuetify`` 페이지에서 ``Helper Class명``인 ``h1``을 검색(Ctrl + F) 합니다.

<img src="./readmeAssets/a-01-scss-variables-09.png" alt="사진: h1 검색" width="700px"><br/>

<br/>

4. ``h1``의 스타일을 가진 ``SCSS 변수명``을 확인하고, ``variables.scss``에 변경할 스타일을 작성 합니다.

```scss
// 경로: @/styles/variables.scss

$headings: (
  "h1": (
    "size": 5rem
  )
);
```

<br/>

변경한 결과, ``96px`` 에서 ``80px``로 변경된 것을 확인할 수 있습니다.

<img src="./readmeAssets/a-01-scss-variables-11.png" alt="h1 font-size 수정 결과" width="500px"><br/>

<br/>

``Vuetify``의 ``UI Framework`` 구조가 깨지지 않도록 이와같은 방법으로 스타일을 수정하는 것이 좋습니다.



<br/><hr/><br/>



## b-02. 로그인 페이지 구현

``경로: @/views/authentication/SignIn.vue``

```html
<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 font-weight-black mb-10">
              로그인
            </div>

            <v-text-field label="이메일" prepend-icon="mdi-email" clearable></v-text-field>

            <v-text-field label="비밀번호" prepend-icon="mdi-lock-outline" clearable></v-text-field>

            <v-btn block x-large rounded class="mt-6">
              로그인
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
```



<br/><hr/><br/>



## b-03. ``Transition`` 컴포넌트

``<v-fade-transition>``컴포는트를 사용하면 ``router-view``의 화면이 변경될 때, 애니메이션 효과를 줄 수 있습니다.



<br/><hr/><br/>



## b-04. ``Menu`` 구현하기

필요한 컴포넌트는 다음과 같습니다.

1. ``<v-navigation-drawer>``
    * ``<v-app>`` 컴포넌트와 연동하기 위한 컴포넌트
2. ``<v-divider>``
    * ``경계선`` 컴포넌트
3. ``<v-list>``
    * ``리스트`` Wrapper 컴포넌트
4. ``<v-list-item>``
    * ``리스트 항목`` 컴포넌트
5. ``<v-list-content>``
    * ``리스트 항목`` 의 ``컨텐츠`` Wrapper 컴포넌트
7. ``<v-list-item-avatar>``
    * ``리스트 항목 컨텐츠`` 컴포넌트의 ``아바타`` 컴포넌트
8. ``<v-list-item-title>``
    * ``리스트 항목 컨텐츠`` 컴포넌트의 ``제목`` 컴포넌트
9. ``<v-list-group>``
    * ``리스트 그룹`` 컴포넌트

<br/>

``메뉴 헤더`` 구현 입니다.

```html
<template>
	<v-list-item>
		<v-list-item-avatar>
			<v-img src="../../assets/image/moon-menu.jpg"></v-img>
		</v-list-item-avatar>
		<v-list-item-content>
			<v-list-item-title class="text-h6">Chocobe</v-list-item-title>
			<v-list-item-subtitle>Vuetify v2.4.5</v-list-item-subtitle>
		</v-list-item-content>
	</v-list-item>
</template>

<script>
export default {
	name: "DefaultDrawerHeader",
};
</script>

<style></style>
```

<br/>

``메뉴 아이템`` 구현 입니다.

```html
<template>
	<v-list-item
		:to="item.to"
		link
		:class="{ purple: item.myCustom }"
		:active-class="item.myCustom ? 'blue' : 'primary'"
		class="py-1"
	>
		<v-list-item-icon>
			<v-icon>{{ item.icon }}</v-icon>
		</v-list-item-icon>

		<v-list-item-content>
			<v-list-item-title>{{ item.title }}</v-list-item-title>
		</v-list-item-content>
	</v-list-item>
</template>

<script>
export default {
	name: "DefaultListItem",
	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style></style>
```

<br/>

``메뉴 그룹`` 구현 입니다.

```html
<template>
	<v-list-group :prepend-icon="item.icon">
		<template v-slot:activator>
			<v-list-item-content>
				<v-list-item-title>
					{{ item.title }}
				</v-list-item-title>
			</v-list-item-content>
		</template>

		<template v-for="(child, index) in item.items">
			<div :key="index" class="pl-3">
				<template v-if="child.items">
					<DefaultListGroup
						:key="`sub-group-${index}`"
						:item="child"
					></DefaultListGroup>
				</template>

				<template v-else>
					<DefaultListItem
						:key="`child-${index}`"
						:item="child"
					></DefaultListItem>
				</template>
			</div>
		</template>
	</v-list-group>
</template>

<script>
import DefaultListItem from "@/layouts/default/ListItem.vue";

export default {
	name: "DefaultListGroup",

	components: {
		DefaultListItem,
	},

	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style></style>
```

<br/>

``메뉴 그룹``과 ``메뉴 항목``을 묶는 Wrapper 컴포넌트 입니다.

```html
<template>
	<v-list dense nav expand>
		<template v-for="(item, index) in items">
			<template v-if="item.items">
				<DefaultListGroup
					:key="`group-${index}`"
					:item="item"
				></DefaultListGroup>
			</template>

			<template v-else>
				<DefaultListItem :key="`item-${index}`" :item="item"></DefaultListItem>
			</template>
		</template>
	</v-list>
</template>

<script>
import DefaultListItem from "@/layouts/default/ListItem.vue";
import DefaultListGroup from "@/layouts/default/ListGroup.vue";

export default {
	name: "DefaultDrawerList",

	components: {
		DefaultListItem,
		DefaultListGroup,
	},

	props: {
		items: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style></style>
```

<br/>

``최종 메뉴`` 컴포넌트 입니다.

```html
<template>
	<v-navigation-drawer
		v-bind="$attrs"
		app
		dark
		src="../../assets/image/moon-menu.jpg"
	>
		<template v-slot:img="imgProps">
			<v-img v-bind="imgProps" :gradient="gradient"></v-img>
		</template>

		<DefaultDrawerHeader></DefaultDrawerHeader>

		<v-divider />

		<DefaultDrawerList :items="items"></DefaultDrawerList>
	</v-navigation-drawer>
</template>

<script>
import DefaultDrawerHeader from "@/layouts/default/DrawerHeader.vue";
import DefaultDrawerList from "@/layouts/default/DrawerList.vue";

export default {
	name: "DefaultDrawer",

	components: {
		DefaultDrawerHeader,
		DefaultDrawerList,
	},

	data: () => {
		return {
			// 메뉴 배경 Gradient
			gradient: "rgba(0, 0, 0, 0.7), rgba(55, 100, 222, 0.7)",

			// 메뉴 리스트 데이터
			items: [
				{
					title: "Dashboard",
					icon: "mdi-view-dashboard",
					to: "/",
				},
				{
					title: "Pages",
					icon: "mdi-menu",
					items: [
						// Authentication
						{
							title: "Authentication",
							icon: "mdi-security",
							items: [
								{
									title: "SignIn",
									icon: "mdi-login-variant",
									to: "/authentication/signin",
								},
								{
									title: "SignUp",
									icon: "mdi-clipboard-account-outline",
									to: "/authentication/signup",
								},
							],
						},

						// Page
						{
							title: "ProductList",
							icon: "mdi-inbox-full",
							to: "/page/product-list",
						},
					],
				},
				{
					title: "Grid System",
					icon: "mdi-image",
					to: "/grid-system",
				},
				{
					title: "Grid List Page",
					icon: "mdi-view-dashboard",
					to: "/grid-list-page",
				},
				{
					title: "Breakpoint",
					icon: "mdi-image",
					to: "/breakpoint",
				},
				{
					title: "Typography",
					icon: "mdi-data-matrix-scan",
					to: "/typography",
				},
				{
					title: "Tables",
					icon: "mdi-file-table-box-multiple-outline",
					to: "/tables",
				},
				{
					title: "Buttons",
					icon: "mdi-gesture-tap-button",
					to: "/buttons",
				},
				{
					title: "Forms",
					icon: "mdi-format-float-right",
					to: "/forms",
				},
				{
					title: "Icons",
					icon: "mdi-emoticon-lol-outline",
					to: "/icons",
				},

				// 추가 연습용 페이지
				{
					title: "Breakpoint2",
					icon: "mdi-basket-minus-outline",
					to: "/breakpoint2",
					myCustom: true,
				},
				{
					title: "Slot Props",
					icon: "mdi-share-variant-outline",
					to: "/slot-props",
					myCustom: true,
				},
			],
			right: null,
		};
	},
};
</script>

<style></style>

```



<br/><hr/><br/>



