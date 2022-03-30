<!-- relative path -->
[Home](../README.md)  
[Config Reference](../reference/config.md)  
[Getting Started](./getting-started.md)
<!-- absolute path -->
[Guide](/guide/README.md)  
[Config Reference > markdown.links](/reference/config.md#links)
<!-- URL -->
[GitHub](https://github.com)

...

<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">

[[toc]]

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

{4,7-13,16,23-27,40}

```ts
// line-numbers is enabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// line-numbers is disabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```md
<!-- This will be kept as is by default -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- This will be compiled by Vue -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// This won't be compiled correctly because of js syntax highlighting
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

<!-- minimal syntax -->
@[code js{1-10}](../foo.js)

@[code{3-10} js{3}:no-line-numbers](../foo.js)

One plus one equals: {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>