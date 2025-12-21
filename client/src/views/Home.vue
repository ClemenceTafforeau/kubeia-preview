<script setup lang="ts">
import GameplayCoreSection from '../components/GameplayCoreSection.vue';
import HeroSection from '../components/HeroSection.vue';
import IntroductionSection from '../components/IntroductionSection.vue';
import ScreenshotsSection from '../components/ScreenshotsSection.vue';
import HighlightsSection from '../components/HighlightsSection.vue';
import RoadmapSection from '../components/RoadmapSection.vue';

</script>

<template>
    <div class="home-container">
        <HeroSection/>
        <IntroductionSection/>
        <GameplayCoreSection/>
        <ScreenshotsSection/>
        <HighlightsSection/>
        <RoadmapSection/>
    </div>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .home-container {
        @apply font-body text-ku-light;
    }
</style>