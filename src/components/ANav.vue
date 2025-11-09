<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ILogo from './ILogo.vue'

// novas props
const props = defineProps<{
    forceDark?: boolean
    hideMenu?: boolean
}>()

const isScrolled = ref(false)
const isOpen = ref(false)

const navIsDark = computed(() => !!props.forceDark || isScrolled.value)

function handleScroll() {
    if (props.forceDark) return
    isScrolled.value = window.scrollY > 0
}

function toggleMenu() { isOpen.value = !isOpen.value }
function closeMenu() { isOpen.value = false }
function handleKeydown(e: KeyboardEvent) { if (e.key === 'Escape') closeMenu() }
function handleResize() { if (window.innerWidth > 768 && isOpen.value) closeMenu() }

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <div class="in-nav" :class="{ scrolled: navIsDark }">
        <div class="in-nav-logo">
            <ILogo :light="true" />
        </div>

        <!-- Links desktop -->
        <div class="in-nav-links" :class="{ 'visually-hidden': hideMenu }" :aria-hidden="hideMenu"
            :inert="hideMenu ? true : undefined">
            <a href="#about">About us</a>
            <a href="#themes">Focus Theme</a>
            <a href="#visit">Visit Rio</a>
            <a href="#ieee">Organization</a>
            <a href="#Supporters">Supporters</a>
            <a href="#follow">Follow us</a>
            <a href="/sponsorship">Sponsorship</a>
        </div>

        <!-- Botão burger (mobile) -->
        <button v-if="!hideMenu" class="burger-btn" @click="toggleMenu" :aria-expanded="isOpen"
            aria-controls="mobile-menu" aria-label="Abrir menu">
            <img src="/images/burguer.svg" alt="" />
        </button>

        <!-- Menu mobile -->
        <nav v-if="!hideMenu" id="mobile-menu" class="mobile-menu" :class="{ open: isOpen }">
            <a href="#about" @click="closeMenu">About us</a>
            <a href="#themes" @click="closeMenu">Focus Theme</a>
            <a href="#visit" @click="closeMenu">Visit Rio</a>
            <a href="#ieee" @click="closeMenu">Organization</a>
            <a href="#Supporters" @click="closeMenu">Supporters</a>
            <a href="#follow" @click="closeMenu">Follow us</a>
            <a href="/sponsorship" @click="closeMenu">Sponsorship</a>
        </nav>
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

/* Oculta visualmente mas mantém layout */
.visually-hidden {
    visibility: hidden;
    pointer-events: none;
    /* impede cliques */
}

.in-nav-links a {
    color: var(--neutral-color-light);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
}

/* Burger */
.burger-btn {
    display: none;
    background: transparent;
    border: 0;
    padding: 8px;
    cursor: pointer;
}

.burger-btn img {
    width: 28px;
    height: 28px;
}

/* Mobile menu (dropdown) */
.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--neutral-color-dark);
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px;
    transform-origin: top;
    transform: scaleY(0);
    opacity: 0;
    pointer-events: none;
    transition: transform 220ms ease, opacity 220ms ease;
}

.mobile-menu.open {
    transform: scaleY(1);
    opacity: 1;
    pointer-events: auto;
}

.mobile-menu a {
    color: var(--neutral-color-light);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 4px;
}

@media (max-width: 768px) {
    .in-nav {
        justify-content: space-between;
        padding: 16px 20px;
    }

    .in-nav-links {
        display: none;
    }

    .burger-btn {
        display: block;
    }
}
</style>