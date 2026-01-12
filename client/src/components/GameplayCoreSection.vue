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
            <video autoplay loop muted playsinline class="animation">
                <source src="/src/assets/animations/Theseus-Idle.webm" type="video/webm">
            </video>
            <video autoplay loop muted playsinline class="animation">
                <source src="/src/assets/animations/Keres-Idle.webm" type="video/webm">
            </video>
        </div>
        <div class="text-container">
            <div v-for="section in textSections">
                <div class="title-description-container">
                    <h3 class="gameplay-core-title">{{ section.title }}</h3>
                    <p class="gameplay-core-description">{{ section.description }}</p>
                </div>
            </div>
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

    .text-container {
        @apply grid grid-cols-2 gap-y-12 py-16;
    }

    .text-sections-container {
        @apply py-16 lg:py-8 flex flex-row lg:flex-col gap-8 lg:gap-12 items-start justify-between w-full;
    }

    .title-description-container {
        @apply flex flex-col gap-4 w-full px-(--horizontal-spacing-sections) lg:px-0;
    }

    .animations-container {
        @apply flex items-baseline;
    }

    .animation {
        @apply w-1/2;
    }
</style>