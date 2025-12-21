<script setup lang="ts">
import { computed, ref } from "vue";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import { useI18n } from "vue-i18n";
import SvgComponent from "./UI/SvgComponent.vue";
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y, Virtual, Keyboard, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const { locale, t } = useI18n();

const slideshowIndex = ref<number>();

const screenshotsJson = computed(() => {
    const data = locale.value === 'fr' ? fr["screenshots"] : en["screenshots"];
    return data as Array<{ image: string }>;
});

const screenshots = computed(() => { 
    return screenshotsJson.value.map((screenshot: { image: string }) => `/src/assets/img/${screenshot.image}`);
});

const setIndex = (swiper) => {
    slideshowIndex.value = swiper.realIndex;
}
</script>

<template>
    <section class="screenshots-container">
        <h2 class="screen-reader-text">
            {{ $t("sections.screenshots") }}
        </h2>
        <div class="slideshow-container">
            <swiper
                @swiper="setIndex"
                @slideChange="setIndex"
                :modules="[Virtual, Pagination, A11y, Navigation, Keyboard, EffectFade]"
                :slides-per-view="1"
                :speed=300
                :a11y="{
                    prevSlideMessage: locale.value === 'fr' ? fr.buttons.previous : en.buttons.previous,
                    nextSlideMessage: locale.value === 'fr' ? fr.buttons.next : en.buttons.next,
                    firstSlideMessage: locale.value === 'fr' ? fr.buttons.first : en.buttons.first,
                    lastSlideMessage: locale.value === 'fr' ? fr.buttons.last : en.buttons.last,
                }"
                :effect="'fade'"
                :enabled=true
                :loop="true"
                :keyboard="{
                    enabled: true
                }"
                :navigation=true
                :pagination="{
                    type: 'progressbar'
                }"
            >
                <swiper-slide
                    v-for="(screenshot, index) in screenshots"
                    :key="index"
                    :virtualIndex="index"
                >
                    <img :src="screenshot" alt=""/>
                </swiper-slide>
            </swiper>
            <div class="caption-container">
                <Transition>
                    <p :key="slideshowIndex" class="caption">
                        {{ slideshowIndex ? screenshotsJson[slideshowIndex].caption : screenshotsJson[0].caption }}
                    </p>
                </Transition>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
        position: absolute;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .screenshots-container {
        @apply px-0 lg:px-32 2xl:px-(--horizontal-spacing-sections) py-(--vertical-spacing-sections);
    }

    .caption-container {
        @apply relative pt-6 pb-20;
    }

    .caption {
        @apply absolute left-1/2 -translate-x-1/2 text-lg italic text-center w-full px-4;
    }
</style>