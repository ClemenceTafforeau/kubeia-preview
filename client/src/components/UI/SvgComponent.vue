<script setup lang="ts">
import { computed } from 'vue';
import iconsRaw from "@/assets/icons/icons.svg?raw"

const props = defineProps<{
    icon: string,
}>();


if (typeof document !== 'undefined' && !document.getElementById('svg-icons-sprite')) {
    const div = document.createElement('div');
    div.id = 'svg-icons-sprite';
    div.style.display = 'none';
    div.innerHTML = iconsRaw;
    document.body.insertBefore(div, document.body.firstChild);
}

const iconPath = computed(() => `#${props.icon}`);
</script>

<template>
    <svg>
        <use :href="iconPath" />
    </svg>
</template>