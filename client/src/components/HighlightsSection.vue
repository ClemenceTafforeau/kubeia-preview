<script setup lang="ts">
import { computed } from "vue";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const text = computed(() => 
    locale.value === 'fr' ? 
    Object.values(fr["highlights"]) : 
    Object.values(en["highlights"])
);
</script>

<template>
    <section class="highlights-container">
        <h2 class="screen-reader-text">
            {{ $t("sections.highlights") }}
        </h2>
        <div class="cards-container">
            <article v-for="line in text" class="card">
                <div class="img-container"></div>
                <p>{{ line }}</p>
            </article>
        </div>
    </section>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .highlights-container {
        @apply px-(--horizontal-spacing-sections) py-(--vertical-spacing-sections) w-full;
    }

    .cards-container {
        @apply flex flex-wrap items-center justify-around gap-16;
    }

    .card {
        @apply max-w-[320px] h-120 flex flex-col gap-8;
    }

    .card p {
        @apply text-center px-2;
    }

    .img-container {
        @apply aspect-square bg-ku-light-transparent-25;
    }
</style>