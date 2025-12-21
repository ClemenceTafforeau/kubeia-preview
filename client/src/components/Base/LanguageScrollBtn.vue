<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import SvgComponent from '../UI/SvgComponent.vue';

let { locale } = useI18n();

const isOpen = ref(false);

const handleToggle = () => {
    isOpen.value = !isOpen.value;
}

const handleLanguageChange = (language: string) => {
    locale.value = language;
}
</script>

<template>
	<div class="menu-btn-container group">
		<input
			v-model="isOpen"
			@click="handleToggle"
			type="checkbox"
			aria-label="Game menu"
			class="menu-btn peer"
		/>
		<svg
			width="42"
			height="6"
			viewBox="0 0 42 6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="scroll-top cubic-bezier(1,-1.04,1,1.09)"
		>
			<rect x="4.44824" width="33.1034" height="5.51724" fill="#E8D3B9"/>
			<rect x="39.2415" y="1.37933" width="2.75862" height="2.75862" fill="#DAA96C"/>
			<rect y="1.37933" width="2.75862" height="2.75862" fill="#DAA96C"/>
		</svg>
		<div
			class="scroll cubic-bezier(1,-1.04,1,1.09)"
			:class="isOpen ? 'min-h-24' : 'min-h-6'"
		>
            <SvgComponent icon="language_icon" class="language-icon"/>
            <button 
                @click="handleLanguageChange('fr')"
                class="switch-language-btn" 
                :class="[
                    isOpen ? 'opacity-100' : 'opacity-0',
                    locale === 'fr' ? 'text-ku-dark' : 'text-ku-dark-transparent-80'
                ]"
            >
                    {{ $t("languages.fr") }}
            </button>
            <button 
                @click="handleLanguageChange('en')"
                class="switch-language-btn"
                :class="[
                    isOpen ? 'opacity-100' : 'opacity-0',
                    locale === 'en' ? 'text-ku-dark' : 'text-ku-dark-transparent-80'
                ]"
            >
                {{ $t("languages.en") }}
            </button>
		</div>
		<svg
			width="42"
			height="6"
			viewBox="0 0 42 6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="scroll-btm cubic-bezier(1,-1.04,1,1.09)"
			:class="isOpen ? 'translate-y-2' : '-translate-y-8'"
		>
			<rect x="4.44824" width="33.1034" height="5.51724" fill="#E8D3B9"/>
			<rect x="39.2415" y="1.37933" width="2.75862" height="2.75862" fill="#DAA96C"/>
			<rect y="1.37933" width="2.75862" height="2.75862" fill="#DAA96C"/>
		</svg>
	</div>
</template>

<style scoped>
@reference '../../assets/css/main.css';

.menu-btn-container {
	@apply fixed w-10.5 h-24 top-8 right-8 z-50;
}

.menu-btn {
	@apply absolute w-full h-full max-h-11 appearance-none cursor-pointer z-80;
}

.scroll-top {
	@apply absolute top-0 transition duration-300 z-10;
}

.scroll-btm {
	@apply absolute bottom-4 group-hover:-translate-y-7 peer-checked:translate-y-6 transition duration-300 z-10
}

.scroll {
	@apply absolute w-7 min-h-8 group-hover:min-h-9 peer-checked:min-h-22 bg-ku-light top-2 left-1/2 -translate-x-1/2 transition-[min-height] duration-300 overflow-hidden peer-checked:overflow-visible flex flex-col items-center origin-top z-60;
}

.language-icon {
    @apply w-5.5 h-5.5 absolute top-1 select-none;
}

.switch-language-btn {
    @apply absolute transition duration-300 ease-in-out z-90 font-bold;
}

.switch-language-btn:first-of-type {
    @apply top-8;
}

.switch-language-btn:last-of-type {
    @apply top-14;
}
</style>