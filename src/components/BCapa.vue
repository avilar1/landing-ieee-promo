<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ILogo from './ILogo.vue';

const currentImage = ref(0)
const images = ['F0.png', 'F1.png', 'F2.png', 'F3.png', 'F4.png']
let intervalId: number | null = null

onMounted(() => {
    intervalId = window.setInterval(() => {
        currentImage.value = (currentImage.value + 1) % images.length
    }, 5000)
})

onUnmounted(() => {
    if (intervalId !== null) {
        clearInterval(intervalId)
    }
})
</script>

<template>
    <div class="capa">
        <!-- Camadas de imagens com transição -->
        <div v-for="(image, index) in images" :key="image" class="capa-bg-layer"
            :class="{ active: currentImage === index }" :style="{ backgroundImage: `url(/images/${image})` }"></div>

        <div class="capa-content">
            <div class="capa-principal">
                <h1 class="capa-h1">3rd IEEE IES Students and Young Professionals Congress</h1>
                <div class="capa-msg-container">
                    <p class="capa-msg">August 6-8, 2026</p>
                    <p class="capa-msg">Rio de Janeiro, Brazil</p>
                </div>
            </div>
            <div class="capa-baixo">
                <img src="../../public/images/IEEE-MB.png" alt="logo ieee mb">
                <img src="../../public/images/IEEE-IES.png" alt="logo ieee IES">
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

    /* Aplica os filtros de overlay */
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
        /* C1 - ruído */
        url('../../public/images/noise.png') repeat,
        /* C2 */
        linear-gradient(rgba(31, 28, 26, 0.15), rgba(255, 251, 247, 0.15)),
        /* C3 */
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
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.capa-h1 {
    color: var(--neutral-color-light);
    text-align: center;
    padding-top: 200px;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
}

.capa-msg-container {
    text-align: center;
}

.capa-msg {
    color: var(--neutral-color-light);
    font-size: 64px;
    margin: 4px 0;
    font-weight: 600;
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
    margin: 0 16px;
}
</style>