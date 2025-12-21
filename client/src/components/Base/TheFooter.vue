<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Octokit, App } from "octokit";
import dotenv from 'dotenv'
import { computed } from "vue";
import fr from "../../locales/fr.json";
import en from "../../locales/en.json";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const text = computed(() => 
    locale.value === 'fr' ? 
    Object.values(fr["roadmap"]) : 
    Object.values(en["roadmap"])
);

const status = 'active';
const loading = ref(false);
const lastCommitDate = ref(null);
const error = ref(null);
const commits = ref([]);
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

const formattedDate = computed(() => {
    if (!lastCommitDate.value) return 'Unknown'
    
    const date = new Date(lastCommitDate.value)
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
})

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

const fetchLastCommit = async () => {
    loading.value = true;

    try {
        commits.value = await octokit.request('GET /repos/{owner}/{repo}/commits?per_page=1', {
            owner: 'ClemenceTafforeau',
            repo: 'kubeia-game',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
    } catch (err) {
        error.value = t("errors.no-commit-date");
    } finally {       
        lastCommitDate.value = commits.value.data[0].commit.author.date;
        loading.value = false;
    }
}

onMounted(() => {
    fetchLastCommit();
})
</script>

<template>
    <footer>
        <section>
            <h2>{{ $t("project-status.status") }}</h2>
            <div class="status-container">
                <div class="dot" :class="status === 'active' ? 'active' : 'hiatus'"></div>
                <p class="status">{{ $t("project-status.active") }}</p>
            </div>
        </section>
        <section>
            <h3>{{ $t("project-status.update") }} :</h3>
            <p class="latest-commit-date">{{ formattedDate }}</p>
        </section>
        <section class="2xl:w-1/2">
            <p class="creation">{{ $t("footer-section.creation") }}</p>
            <p class="made-in">{{ $t("footer-section.made-in") }}</p>
            <p class="contact">{{ $t("footer-section.contact") }}</p>
            <a :href="`mailto:${contactEmail}`" class="email">{{ contactEmail }}</a>
        </section>
    </footer>
</template>

<style scoped>
    @reference "../../assets/css/main.css";

    footer {
        @apply py-(--vertical-spacing-sections) my-(--vertical-spacing-sections) mx-(--horizontal-spacing-sections) text-ku-light flex flex-wrap justify-between gap-x-16 gap-y-8 items-start border-t border-ku-light-transparent-25;
    }

    footer section {
        @apply flex flex-col gap-2;
    }

    h2 {
        @apply text-xl font-display text-ku-primary-1;
    }

    h3 {
        @apply text-xl font-display text-ku-primary-1;
    }

    .status-container {
        @apply flex gap-3 items-center;
    }

    .dot.active {
        @apply w-2 h-2 rounded-full bg-green-900;
    }

    .dot.hiatus {
        @apply w-2 h-2 rounded-full bg-yellow-600;
    }

    .status {
        @apply font-body;
    }

    .latest-commit-date {
        @apply font-body;
    }

    .creation {
        @apply text-xl font-display text-ku-primary-1;
    }

    .email {
        @apply font-bold text-ku-primary-1 hover:text-ku-light transition duration-300 ease-in-out;
    }
</style>