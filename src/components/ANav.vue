<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ILogo from './ILogo.vue';

const isScrolled = ref(false)

function handleScroll() {
    isScrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="in-nav" :class="{ scrolled: isScrolled }">
        <div class="in-nav-logo">
            <ILogo :light="true" />
        </div>
        <div class="in-nav-links">
            <a href="#about">About us</a>
            <a href="#themes">Focus Theme</a>
            <a href="#visit">Visit Rio</a>
            <a href="#ieee">Organization</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#follow">Follow us</a>
        </div>
    </div>
</template>

<style scoped>
.in-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px;
    height: calc(80px - 32px);
    background-color: transparent;
    transition: background-color 300ms ease;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.in-nav.scrolled {
    background-color: var(--neutral-color-dark);
}

.in-nav-links {
    display: flex;
    gap: 24px;
}

.in-nav-links a {
    color: var(--neutral-color-light);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
}
</style>