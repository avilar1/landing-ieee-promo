<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import ILogo from './ILogo.vue'

const desktopImages = ['F0.webp', 'F1.webp', 'F2.webp', 'F3.webp', 'F4.webp']
const mobileImages = ['FM0.webp', 'FM1.webp', 'FM2.webp', 'FM3.webp', 'FM4.webp', 'FM5.webp']

const isMobile = ref(false)
const currentImage = ref(0)
const currentImages = computed(() => isMobile.value ? mobileImages : desktopImages)

let intervalId: number | null = null
let mql: MediaQueryList | null = null

function next() {
    const len = currentImages.value.length
    currentImage.value = (currentImage.value + 1) % len
}

function handleMqlChange(e: MediaQueryListEvent) {
    isMobile.value = e.matches
}

onMounted(() => {
    mql = window.matchMedia('(max-width: 768px)')
    isMobile.value = mql.matches
    if (mql) {
        if (typeof (mql as any).addEventListener === 'function') {
            (mql as MediaQueryList).addEventListener('change', handleMqlChange)
        } else if (typeof (mql as any).addListener === 'function') {
            (mql as any).addListener(handleMqlChange)
        }
    }

    // ajustar se quiser
    intervalId = window.setInterval(next, 5000)
})

onUnmounted(() => {
    if (intervalId !== null) {
        clearInterval(intervalId)
        intervalId = null
    }
    if (mql) {
        if (typeof (mql as any).removeEventListener === 'function') {
            (mql as MediaQueryList).removeEventListener('change', handleMqlChange)
        } else if (typeof (mql as any).removeListener === 'function') {
            (mql as any).removeListener(handleMqlChange)
        }
    }
})


watch(currentImages, (arr) => {
    currentImage.value = currentImage.value % arr.length
})
</script>

<template>
    <div class="capa">
        <!-- IMAGENS -->
        <div v-for="(image, index) in currentImages" :key="image" class="capa-bg-layer"
            :class="{ active: currentImage === index }" :style="{ backgroundImage: `url(/images/${image})` }"></div>

        <div class="capa-content">
            <div class="capa-principal">
                <h1 class="capa-h1">3RD IEEE IES STUDENTS AND <br /> YOUNG PROFESSIONALS CONGRESS</h1>
                <div class="capa-msg-container">
                    <p class="capa-msg capa-msg-1">August 6-8, 2026</p>
                    <p class="capa-msg capa-msg-2">RIO DE JANEIRO, BRAZIL</p>
                </div>
            </div>
            <div class="capa-baixo">
                <img src="../../images/IEEE-MB.webp" alt="logo ieee mb">
                <img src="../../images/IEEE-IES.webp" alt="logo ieee IES">
                <ILogo :light="true" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.capa {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}

.capa-bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
    background-blend-mode: overlay, overlay, multiply, normal;
}

.capa-bg-layer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
        url('../../images/ruido1.webp') repeat,
        linear-gradient(rgba(31, 28, 26, 0.15), rgba(255, 251, 247, 0.15)),
        linear-gradient(rgba(30, 25, 20, 0.3), rgba(30, 25, 20, 0.3));
    background-size: 200px 200px, cover, cover;
    background-blend-mode: overlay, overlay, multiply;
    pointer-events: none;
}

.capa-bg-layer.active {
    opacity: 1;
    z-index: 1;
}

.capa-content {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.capa-principal {
    font-family: "Righteous";
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.capa-h1 {
    color: var(--neutral-color-light);

    text-align: center;
    padding-top: 200px;
    font-size: 64px;
    font-weight: 400;
}

.capa-msg-container {
    text-align: center;
}

.capa-msg {
    color: var(--neutral-color-light);
    font-size: 36px;
    margin: 12px 0;
    font-weight: 400;
}

.capa-msg-1 {
    color: var(--primary-color);
}

.capa-msg-2 {
    font-family: "Archivo";
    font-size: 24px;
    font-weight: 500;
}

.capa-baixo {
    height: 30%;
    color: var(--neutral-color-light);
    align-self: flex-end;
    justify-self: flex-end;
    display: flex;
    align-items: self-end;
    margin-bottom: 80px;
    margin-right: 40px;
}

.capa-baixo img {
    height: 40px;
    margin: 0 16px 16px;
}

@media (max-width: 768px) {
    .capa-h1 {
        font-size: 32px;
        font-weight: 400;
    }

    .capa-msg {
        font-size: 24px;
        font-weight: 600;
    }

    .capa-baixo {
        margin-bottom: 40px;
        margin-right: 20px;
        align-self: center;
    }

    .capa-baixo img {
        height: 21px;
        margin: 0 8px;
    }
}
</style>