<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)

function show(n: number) {
    active.value = n
}
</script>

<template>
    <div class="visit-rio" id="visit">
        <div class="visit-titl">
            <h2 class="visit-h2" v-observe="{ once: false }">Welcome to Rio: Explore the Host City</h2>
            <p class="visit-sub" v-observe="{ once: false }">Don't forget to explore the vibrant city hosting us!
                Rio de Janeiro é uma mistura de beleza natural e riqueza cultural que oferece uma experiência
                inesquecível
                fora das salas de conferência.</p>
        </div>
        <div class="visit-container-deck">
            <nav class="visit-nav" v-observe="{ once: false }">
                <button class="btn-visit" :class="{ active: active === 1 }" @click="show(1)">Beaches &
                    Coastline</button>
                <button class="btn-visit" :class="{ active: active === 2 }" @click="show(2)">Natural Wonders</button>
                <button class="btn-visit" :class="{ active: active === 3 }" @click="show(3)">Culture & History</button>
            </nav>

            <nav class="visit-nav-menu-mobile" v-observe="{ once: false }">
                <select class="btn-visit" v-model="active">
                    <option :value="1">Beaches & Coastline</option>
                    <option :value="2">Natural Wonders</option>
                    <option :value="3">Culture & History</option>
                </select>
            </nav>

            <!-- um único transition com chave, para evitar sobreposição -->
            <transition name="fade" mode="out-in">
                <div :key="active" class="visit-imgs-cards" :class="`visit-imgs-cards-${active}`">
                    <template v-if="active === 1">
                        <img src="../../images/R11.webp" alt="">
                        <img src="../../images/R12.webp" alt="">
                        <img src="../../images/R13.webp" alt="">
                    </template>

                    <template v-else-if="active === 2">
                        <img src="../../images/R21.webp" alt="">
                        <img src="../../images/R22.webp" alt="">
                        <img src="../../images/R23.webp" alt="">
                    </template>

                    <template v-else>
                        <img src="../../images/R31.webp" alt="">
                        <img src="../../images/R32.webp" alt="">
                        <img src="../../images/R33.webp" alt="">
                    </template>
                </div>
            </transition>
        </div>

        <div class="visit-container-btn-visit">
            <button class="btn-vRio" v-observe="{ once: false }">Go To Visit Rio</button>
        </div>
    </div>
</template>

<style scoped>
.visit-rio {
    width: 100%;
    background-color: var(--neutral-color-dark);
    padding: 64px 0;
}

.visit-titl {
    color: var(--neutral-color-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem 2rem 2rem;
    gap: 1rem;
}

.visit-h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
}

.visit-sub {
    font-size: 18px;
    text-align: center;
    max-width: 800px;
}

.visit-container-deck {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 2rem;
}

.visit-nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    background-color: var(--secondary-color-light);
    border-radius: 8px;
}



.btn-visit {
    background-color: var(--secondary-color-light);
    color: var(--secondary-color-dark);
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
    margin: 10px;
}


.visit-nav-menu-mobile {
    display: none;
}

@media (max-width: 768px) {
    .visit-nav {
        display: none;
    }

    .visit-nav-menu-mobile {
        display: block;
    }

    .btn-visit {
        background-color: var(--neutral-color-light);
        color: var(--primary-color);
        border-radius: 8px;
        padding: 8px;
    }
}

/* estado visual do botão ativo */
.btn-visit.active {
    background-color: var(--primary-color);
    color: var(--neutral-color-light);
    transition: background-color 200ms ease, color 200ms ease;
}

.visit-imgs-cards {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.visit-imgs-cards img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .visit-imgs-cards {
        flex-direction: column;
        align-items: center;
    }

    .visit-imgs-cards img {
        width: 90%;
        height: auto;
    }
}

/* transição suave (fade + slide horizontal consistente) */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 260ms ease, transform 260ms ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(12px);
}

.fade-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.fade-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(-12px);
}

.btn-vRio {
    margin: 4rem auto;
    background-color: var(--primary-color);
    color: var(--neutral-color-light);
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;

    box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25);
}

.btn-vRio:hover {
    background-color: var(--primary-color-dark);
    transition: background-color 200ms ease;
}

.visit-container-btn-visit {
    text-align: center;
}
</style>