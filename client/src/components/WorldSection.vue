<script setup lang="ts">
import { computed } from "vue";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const world = computed(() =>
    locale.value === 'fr' ? fr["world"] : en["world"]
);
</script>

<template>
    <section class="world-container">
        <h2>{{ $t("sections.world") }}</h2>
        <p class="world-intro">{{ world.intro }}</p>
        <blockquote class="world-tagline">
            <img src="/img/meander_small.svg" alt="" class="meander"/>
            <p>{{ world.tagline }}</p>
            <img src="/img/meander_small.svg" alt="" class="meander flipped"/>
        </blockquote>
        <div class="stories-grid">
            <article v-for="story in world.stories" :key="story.hero" class="story-card">
                <h3 class="story-place">{{ story.place }}</h3>
                <span class="story-status" :class="story.status">
                    {{ story.status === 'available' ? world['available-now'] : world['coming-soon'] }}
                </span>
                <hr class="story-hr"/>
                <p class="story-hero">{{ story.hero }}</p>
                <p class="story-synopsis">{{ story.synopsis }}</p>
            </article>
        </div>
    </section>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .world-container {
        @apply px-(--horizontal-spacing-sections) py-(--vertical-spacing-sections) flex flex-col items-center gap-12;
    }

    .world-container h2 {
        @apply text-4xl font-display text-ku-primary-1 text-center;
    }

    .world-intro {
        @apply max-w-[70ch] text-center leading-7;
    }

    .world-tagline {
        @apply flex items-center gap-6 py-4;
    }

    .world-tagline p {
        @apply text-2xl italic text-center max-w-[32ch] text-ku-primary-1;
    }

    .meander {
        @apply hidden sm:block w-12 h-auto shrink-0;
    }

    .meander.flipped {
        @apply -scale-x-100;
    }

    .stories-grid {
        @apply grid gap-10 w-full max-w-5xl md:grid-cols-3;
    }

    .story-card {
        @apply flex flex-col items-start gap-3 p-6 rounded-lg border border-ku-light-transparent-25;
    }

    .story-status {
        @apply text-xs uppercase tracking-wide font-bold text-ku-light-transparent-75;
    }

    .story-status.available {
        @apply border-ku-primary-1 text-ku-primary-1;
    }

    .story-place {
        @apply text-2xl font-display text-ku-primary-1 pt-2;
    }

    .story-hero {
        @apply text-xl font-display text-ku-light-transparent-75;
    }

    .story-synopsis {
        @apply leading-6;
    }

    .story-themes {
        @apply flex flex-wrap gap-2 pt-2;
    }

    .story-themes li {
        @apply text-xs px-3 py-1 rounded-full bg-ku-light-transparent-10;
    }

    .story-hr {
        @apply w-full border-ku-light-transparent-10;
    }
</style>
