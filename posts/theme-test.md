---
date: 2025-03-14
title: Theme Test Page
category: 'test'
tags:
- vitepress
- Test
description: 
---
# Theme Test Page

This page is designed to test various theme features and components. It demonstrates how your theme handles different markdown elements and custom styling.

## Headings

### Level 3 Heading
#### Level 4 Heading
##### Level 5 Heading

## Text Formatting

Regular text with **bold text**, *italic text*, and `inline code`. 

~~Strikethrough text~~ is also supported.

## Links

[External link to Google](https://www.google.com)

[Internal link to Home](/)

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered Lists

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

## Code Blocks

```js
// JavaScript example
function hello() {
  console.log('Hello, world!');
  return true;
}

const obj = {
  name: 'Example',
  count: 42,
  active: true
};
```

```css
/* CSS example */
.my-class {
  color: #3eaf7c;
  background-color: #f9f9f9;
  border: 1px solid #eaeaea;
  padding: 1rem;
}
```

## Blockquotes

> This is a blockquote.
> 
> It can span multiple lines.

## Tables

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | String | #3eaf7c | Primary color |
| size | Number | 100 | Size in pixels |
| enabled | Boolean | true | Whether the feature is enabled |

## Custom Components

This section demonstrates theme-specific custom components:

<!-- Default theme button -->
<a class="default-button">Default Theme Button</a>

<!-- Dark theme button -->
<a class="dark-button">Dark Theme Button</a>

## Custom Containers

<!-- Will display differently based on the active theme -->
<div class="default-tip">
  <p>This is a tip in the default theme</p>
</div>

<div class="default-warning">
  <p>This is a warning in the default theme</p>
</div>

<div class="default-danger">
  <p>This is a danger note in the default theme</p>
</div>

<div class="dark-tip">
  <p>This is a tip in the dark theme</p>
</div>

<div class="dark-warning">
  <p>This is a warning in the dark theme</p>
</div>

<div class="dark-danger">
  <p>This is a danger note in the dark theme</p>
</div>

## Images

![VitePress Logo](https://vitepress.dev/vitepress-logo-large.webp)

## Horizontal Rule

---

## Theme Information

Current theme: {{ $theme }}

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
const $theme = theme.value.colorMode || 'default'
</script> 