---
page: true
title: home
aside: false
---
<script setup>
import Page from "./components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(0,10)
</script>
<template>
<Page :posts="posts" :pageCurrent="1" :pagesNum="1" />
</template>