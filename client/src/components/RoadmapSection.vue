<script setup lang="ts">
import { computed } from "vue";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const text = computed(() => {
    return locale.value === 'fr' ? fr["roadmap"] : en["roadmap"];
});
</script>

<template>
    <section class="roadmap-container">
        <h2>
            {{ $t("sections.roadmap") }}
        </h2>
        <div class="cards-container">
            <article v-for="line in text" class="card">
                <div class="img-container">
                    <img :src="`src/assets/img/${line.img}`" :alt="line.alt"/>
                </div>
                <p class="feature-text">{{ line.text }}</p>
            </article>
        </div>
    </section>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .roadmap-container {
        @apply px-(--horizontal-spacing-sections) py-(--vertical-spacing-sections) flex flex-col items-center;
    }

    .roadmap-container h2 {
        @apply text-4xl font-display text-ku-primary-1 pb-24;
    }

    .cards-container {
        @apply flex flex-wrap w-full gap-24 justify-center;
    }

    .card {
        @apply w-64 flex flex-col gap-8 items-center;
    }

    .feature-text {
        @apply text-center;
    }

    .img-container {
        @apply aspect-square bg-ku-light rounded-full w-48 relative flex justify-center items-center;
    }

    .img-container img {
        @apply max-h-40;
    }

    @media only screen and (min-width: 1472px) {
        .card:first-of-type .img-container::after {
            content: "";
            position: absolute;
            background-image: url('../assets/img/meander_small.svg');
            background-size: cover;
            width: 60px;
            height: 20px;
            top: 50%;
            right: -55%;
            transform: translateY(-50%);
        }
    }

    @media only screen and ((min-width: 864px) and (max-width: 1471px)) {
        .card:first-of-type .img-container::after {
            content: "";
            position: absolute;
            background-image: url('../assets/img/meander_small.svg');
            background-size: cover;
            width: 60px;
            height: 20px;
            top: 50%;
            right: -55%;
            transform: translateY(-50%);
        }
    }

    @media only screen and (max-width: 863px) {
        .card:first-of-type .img-container::after {
            content: "";
            position: absolute;
            background-image: url('../assets/img/meander_small.svg');
            background-size: cover;
            width: 60px;
            height: 20px;
            bottom: -72%;
            right: 50%;
            transform: translateX(50%);
        }
    }
</style>