# Vuetify 기본

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



## 04. ``Vuetify ESLint`` 설정

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



## 05. ``Vuetify``의 ``Grid System`` 개념

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



<br/><hr/><br/>



