<script setup lang="ts">
import { ref } from 'vue';
import TheFooter from './components/Base/TheFooter.vue';
import TheHeader from './components/Base/TheHeader.vue';
import Home from './views/Home.vue';

const views = {
    Home
} as const;

const currentView = ref<keyof typeof views>('Home');
</script>

<template>
    <TheHeader></TheHeader>
    <component :is="views[currentView]"></component>
    <TheFooter></TheFooter>
</template>

<style scoped></style>
