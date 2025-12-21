<script setup lang="ts">
import LanguageScrollBtn from './LanguageScrollBtn.vue';

</script>

<template>
    <header>
        <LanguageScrollBtn/>
    </header>
</template>

<style scoped>
    @reference "../../assets/css/main.css";

    header {
        @apply fixed w-full h-41;
    }

    @media only screen and (max-width: 1024px) {
        header {
            background: linear-gradient(to bottom,  rgba(14,11,8,1) 0%,rgba(14,11,8,0.8) 60%,rgba(14,11,8,0) 100%);
        }
    }
</style>