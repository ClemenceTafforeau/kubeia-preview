<script setup lang="ts"></script>

<template>
    <section class="introduction-container">
        <div class="title-container">
            <img 
                src="/img/kubeia_logo_light.svg" 
                alt="The Kubeia logo: a silhouette representing Sisyphus hoisting a twenty-sided dice up a steep path."
            />
            <h1 class="screen-reader-text">
				{{ $t('title') }}
			</h1>
        </div>
        <p class="subtitle">{{ $t('subtitle') }}</p>
    </section>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .introduction-container {
        @apply w-full flex flex-col items-center justify-center px-(--horizontal-spacing-sections);
    }

    .title-container img {
        @apply w-md pb-4;
    }

    .subtitle {
        @apply text-2xl italic max-w-[36ch] text-center;
    }
</style>