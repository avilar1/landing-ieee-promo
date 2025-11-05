<template>
    <div class="tema" id="themes">
        <div class="tema-container" v-observe="{ once: false }">
            <h2 class="tema-h2">Shaping Tomorrow's Industry: <br /> Key Themes for IES SYP Congress 2026</h2>

            <!-- Desktop: galeria lado a lado -->
            <div v-if="!isMobile" class="tema-gallery">
                <img v-for="s in slides" :key="s.src" :src="s.src" :alt="s.alt" class="tema-img-grid" />
            </div>

            <!-- Mobile: slider -->
            <div v-else class="tema-slider" @mouseenter="pause" @mouseleave="resume">
                <transition name="tema-fade" mode="out-in">
                    <div class="tema-slide" :key="current">
                        <img v-if="currentSlide" :src="currentSlide.src" :alt="currentSlide.alt" class="tema-img" />
                    </div>
                </transition>

                <button class="tema-nav tema-prev" @click="prev" aria-label="Anterior">‹</button>
                <button class="tema-nav tema-next" @click="next" aria-label="Próximo">›</button>

                <div class="tema-dots">
                    <button v-for="(_, i) in slides" :key="i" class="tema-dot" :class="{ active: i === current }"
                        @click="go(i)" :aria-label="`Ir para slide ${i + 1}`"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

type Slide = { src: string; alt: string }

const slides: Slide[] = [
    { src: '/images/G1.webp', alt: 'um braço robótico e uma mão humana de encontro a se cumprimentar' },
    { src: '/images/G2.webp', alt: 'uma impressão digital em alto relevo' },
    { src: '/images/G3.webp', alt: 'uma mulher símbolo da justiça cega, olhos vendados e balança' }
]

const current = ref(0)
const currentSlide = computed(() => slides[current.value])

let timer: number | null = null

function next() {
    current.value = (current.value + 1) % slides.length
}
function prev() {
    current.value = (current.value - 1 + slides.length) % slides.length
}
function go(i: number) {
    current.value = i
}
function pause() {
    if (timer !== null) {
        clearInterval(timer)
        timer = null
    }
}
function resume() {
    if (timer === null) {
        timer = window.setInterval(next, 5000)
    }
}

/* Renderiza slider só no mobile */
const isMobile = ref(false)
let mql: MediaQueryList | null = null

function onMqlChange(e: MediaQueryListEvent) {
    isMobile.value = e.matches
}

onMounted(() => {
    mql = window.matchMedia('(max-width: 768px)')
    isMobile.value = mql.matches
    if (mql) {
        if ('addEventListener' in mql) mql.addEventListener('change', onMqlChange)
        else (mql as any).addListener(onMqlChange)
    }

    // inicia o autoplay só no mobile
    if (isMobile.value) resume()
})

onUnmounted(() => {
    pause()
    if (mql) {
        if ('removeEventListener' in mql) mql.removeEventListener('change', onMqlChange)
        else (mql as any).removeListener(onMqlChange)
    }
})

watch(isMobile, (val) => {
    if (val) resume()
    else pause()
})
</script>

<style scoped>
.tema {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 96px 0;
    background-color: var(--neutral-color-light);
}

.tema-container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.tema-h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    max-width: 800px;
}

/* Desktop: galeria lado a lado */
.tema-gallery {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
}

.tema-img-grid {
    width: 268px;
    height: 400px;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: block;
}

/* Mobile: slider */
.tema-slider {
    position: relative;
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 48px;
    /* espaço para as setas */
    box-sizing: border-box;
}

.tema-slide {
    max-width: 268px;
    max-height: 400px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tema-img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    display: block;
}

/* Transição suave */
.tema-fade-enter-active,
.tema-fade-leave-active {
    transition: opacity 280ms ease;
}

.tema-fade-enter-from,
.tema-fade-leave-to {
    opacity: 0;
}

/* Controles */
.tema-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    display: grid;
    place-items: center;
}

.tema-prev {
    left: 8px;
}

.tema-next {
    right: 8px;
}

.tema-dots {
    position: absolute;
    bottom: -24px;
    left: 0;
    right: 0;
    display: flex;
    gap: 8px;
    justify-content: center;
}

.tema-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #cfcfcf;
    border: none;
    cursor: pointer;
}

.tema-dot.active {
    background: var(--primary-color);
}

/* Mobile: ocupa toda a largura e reduz altura */
@media (max-width: 768px) {
    .tema-slider {
        max-width: 100%;
        padding: 0 40px;
    }

    .tema-slide {
        max-width: 90%;
    }

    .tema-img {
        height: 300px;
    }

    /* A galeria não aparece no mobile (já está controlado por v-if) */
}
</style>