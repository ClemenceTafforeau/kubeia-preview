<script setup lang="ts">
import { computed } from "vue";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import { useI18n } from "vue-i18n";
import SvgComponent from "./UI/SvgComponent.vue";

const { locale } = useI18n();

const heroes = computed(() =>
    locale.value === 'fr' ? fr["heroes"] : en["heroes"]
);
</script>

<template>
    <section class="heroes-container">
        <h2>{{ $t("sections.heroes") }}</h2>
        <p class="heroes-intro">{{ heroes.intro }}</p>
        <div class="heroes-grid">
            <article
                v-for="hero in heroes.list"
                :key="hero.slug"
                class="hero-card"
                :class="hero.status"
            >
                <div class="hero-media">
                    <video
                        v-if="hero.slug === 'theseus'"
                        autoplay
                        loop
                        muted
                        playsinline
                        class="hero-animation"
                    >
                        <source src="/src/assets/animations/Theseus-Idle.webm" type="video/webm">
                    </video>
                    <img v-else src="/img/odysseus-orpheus-icon.webp" :alt="hero.name" class="hero-icon"/>
                    <div v-if="hero.status === 'locked'" class="lock-badge">
                        <SvgComponent icon="lock_icon" class="lock-icon"/>
                    </div>
                </div>
                <div class="hero-text">
                    <span class="hero-status" :class="hero.status">
                        {{ hero.status === 'available' ? heroes['available-now'] : heroes['coming-soon'] }}
                    </span>
                    <hr class="hero-hr"/>
                    <h3 class="hero-name">{{ hero.name }}</h3>
                    <p class="hero-quote">{{ hero.quote }}</p>
                    <p class="hero-description">{{ hero.description }}</p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .heroes-container {
        @apply px-(--horizontal-spacing-sections) py-(--vertical-spacing-sections) flex flex-col items-center gap-12;
    }

    .heroes-container h2 {
        @apply text-4xl font-display text-ku-primary-1 text-center;
    }

    .heroes-intro {
        @apply max-w-[60ch] text-center leading-7;
    }

    .heroes-grid {
        @apply grid gap-10 w-full max-w-5xl lg:grid-cols-2;
    }

    .hero-card {
        @apply flex flex-col items-center gap-4 p-6 rounded-lg border border-ku-light-transparent-25;
    }

    .hero-card.locked {
        @apply opacity-80;
    }

    .hero-card.available {
        @apply lg:col-span-3 lg:flex-row lg:text-left;
    }

    .hero-media {
        @apply relative shrink-0 w-40 h-40 rounded-full overflow-hidden bg-ku-light flex items-center justify-center;
    }

    .hero-animation {
        @apply w-full h-full object-cover;
    }

    .hero-icon {
        @apply w-36 h-36 object-contain;
    }

    .lock-badge {
        @apply absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-ku-dark border border-ku-primary-1 rounded-full p-2 flex items-center justify-center;
    }

    .lock-icon {
        @apply w-6 h-6 text-ku-primary-1;
    }

    .hero-text {
        @apply flex flex-col gap-2;
    }

    .hero-card.available .hero-text {
        @apply lg:items-start lg:pl-6;
    }

    .hero-status {
        @apply text-xs uppercase tracking-wide font-bold text-ku-light-transparent-75;
    }

    .hero-status.available {
        @apply border-ku-primary-1 text-ku-primary-1;
    }

    .hero-name {
        @apply text-2xl font-display text-ku-primary-1;
    }

    .hero-quote {
        @apply italic;
    }

    .hero-description {
        @apply leading-6;
    }

    .hero-hr {
        @apply w-full border-ku-light-transparent-10;
    }
</style>
