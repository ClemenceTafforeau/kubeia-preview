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
        <div class="animations-container">
            <div>
                <video autoplay loop muted playsinline class="animation">
                    <source src="/src/assets/animations/Theseus-Idle.webm" type="video/webm">
                </video>
            </div>
            <div>
                <video autoplay loop muted playsinline class="animation">
                    <source src="/src/assets/animations/Keres-Idle.webm" type="video/webm">
                </video>
            </div>
        </div>
        <div class="text-container">
            <article v-for="section in textSections">
                <div class="title-description-container">
                    <h3 class="gameplay-core-title">{{ section.title }}</h3>
                    <p class="gameplay-core-description">{{ section.description }}</p>
                </div>
            </article>
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
        @apply xl:max-w-[56ch] leading-7;
    }

    .text-container {
        @apply grid xl:grid-cols-2 gap-y-12 gap-x-20 py-16;
    }

    .text-sections-container {
        @apply py-16 lg:py-8 flex flex-row lg:flex-col gap-8 lg:gap-12 items-start justify-between w-full;
    }

    .title-description-container {
        @apply flex flex-col gap-4 w-full px-(--horizontal-spacing-sections) lg:px-0;
    }

    .animations-container {
        @apply flex flex-col sm:flex-row items-baseline;
    }

    .animation {
        @apply w-full;
    }

    .animations-container div {
        @apply relative flex w-full justify-center items-center after:absolute after:bg-ku-light-transparent-10 after:w-full after:h-full after:border-t-8 after:border-b-8 after:border-t-ku-primary-1 after:border-b-ku-primary-1 after:-z-1 after:top-1/2 after:-translate-y-1/2
    }
</style>