<script setup lang="ts">
import { computed } from "vue";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const textSections = computed(() => 
    locale.value === 'fr' ? 
    Object.values(fr["gameplay-core"]) : 
    Object.values(en["gameplay-core"])
);
</script>

<template>
    <section class="gameplay-core-container">
        <h2 class="screen-reader-text">
            {{ $t("sections.gameplay-core") }}
        </h2>
        <div v-for="section in textSections" class="title-description-img-container">
            <div class="title-description-container">
                <h3 class="gameplay-core-title">{{ section.title }}</h3>
                <p class="gameplay-core-description">{{ section.description }}</p>
            </div>
            <div class="img-container"></div>
        </div>
    </section>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .gameplay-core-container {
        @apply lg:px-(--horizontal-spacing-sections) py-(--vertical-spacing-sections);
    }

    .gameplay-core-title {
        @apply text-4xl font-display text-ku-primary-1;
    }

    .gameplay-core-description {
        @apply max-w-[56ch] leading-7;
    }

    .title-description-img-container {
        @apply py-16 lg:py-20 flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-start;
    }

    .title-description-img-container:nth-of-type(even) {
        @apply lg:flex-row-reverse;
    }

    .title-description-container {
        @apply flex flex-col gap-4 w-full lg:w-3/5 xl:w-1/2 px-(--horizontal-spacing-sections) lg:px-0;
    }

    .img-container {
        @apply w-full aspect-3/4 xs:aspect-video h-auto bg-ku-light-transparent-25;
    }
</style>