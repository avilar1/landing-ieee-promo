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
            <a href="#themes">Theme</a>
            <a href="#visit">Visit Rio</a>
            <a href="#ieee">Organization</a>
            <a href="#Supporters">Supporters</a>
            <a href="#follow">Follow us</a>
            <a href="/sponsorship">Sponsorship</a>
        </div>

        <div class="in-nav-links" :class="{ 'visually-hidden': !hideMenu }" :aria-hidden="!hideMenu"
            :inert="!hideMenu ? true : undefined">
            <RouterLink to="/">Home</RouterLink>
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
/* COMO NAV ESTÁ NA PRIMEIRA DOBRA DA PÁGINA, TODO CONTEÚDO ESTÁ NO index.html */
/* SE PREFERIR, PARA MELHOR CORREÇÃO, PASSE TODO CONTEÚDO PARA CÁ E DEPOIS JOGA PRA LÁ. */
</style>