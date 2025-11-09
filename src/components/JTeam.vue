<template>
    <div class="team-container-geral">
        <div class="team-geral">
            <h2>Meet the Team: IEEE IES SYP Congress 2026 Organizing Committee</h2>

            <!-- Primeiro carrossel -->
            <div class="team-containers-img team-container-1">
                <button class="team-arrow left" @click="scrollLeft(carousel1)" aria-label="Anterior">‹</button>
                <div class="team-carousel" ref="carousel1">
                    <div class="team-track">
                        <!-- Sequência 1 -->
                        <div class="team-card">
                            <img src="../../public/images/MEM1.webp" alt="">
                            <div class="team-card-text">
                                <h3>Chairperson</h3>
                                <h4>Leandro Buss Becker</h4>
                                <p class="p-D">Universidade Federal de Santa Catarina (UFSC)</p>
                                <p class="p-M">UFSC</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM2.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Program</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM3.webp" alt="">
                            <div class="team-card-text">
                                <h3>Treasurer</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM4.webp" alt="">
                            <div class="team-card-text">
                                <h3>Secretary</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM5.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Young Professionals</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>

                        <!-- Sequência 2 (duplicada para loop) -->
                        <div class="team-card">
                            <img src="../../public/images/MEM1.webp" alt="">
                            <div class="team-card-text">
                                <h3>Chairperson</h3>
                                <h4>Leandro Buss Becker</h4>
                                <p class="p-D">Universidade Federal de Santa Catarina (UFSC)</p>
                                <p class="p-M">UFSC</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM2.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Program</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM3.webp" alt="">
                            <div class="team-card-text">
                                <h3>Treasurer</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM4.webp" alt="">
                            <div class="team-card-text">
                                <h3>Secretary</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM5.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Young Professionals</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="team-arrow right" @click="scrollRight(carousel1)" aria-label="Próximo">›</button>
            </div>

            <!-- Segundo carrossel -->
            <div class="team-containers-img team-container-2">
                <button class="team-arrow left" @click="scrollLeft(carousel2)" aria-label="Anterior">‹</button>
                <div class="team-carousel" ref="carousel2">
                    <div class="team-track team-track-reverse">
                        <!-- Sequência 1 -->
                        <div class="team-card">
                            <img src="../../public/images/MEM6.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Technical Activities</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM7.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Sponsorship</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM8.webp" alt="">
                            <div class="team-card-text">
                                <h3>Webmaster</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM0.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Meals and Accommodation</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM9.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Social Activities</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>

                        <!-- Sequência 2 (duplicada para loop) -->
                        <div class="team-card">
                            <img src="../../public/images/MEM6.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Technical Activities</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM7.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Sponsorship</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM8.webp" alt="">
                            <div class="team-card-text">
                                <h3>Webmaster</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM0.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Meals and Accommodation</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM9.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Social Activities</h3>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="team-arrow right" @click="scrollRight(carousel2)" aria-label="Próximo">›</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const carousel1 = ref<HTMLElement | null>(null)
const carousel2 = ref<HTMLElement | null>(null)

function getStep(el: HTMLElement) {
    const card = el.querySelector('.team-card') as HTMLElement | null
    const track = el.querySelector('.team-track') as HTMLElement | null
    if (!card) return 360
    const gap = track ? parseInt(getComputedStyle(track).gap || '0') : 0
    return card.offsetWidth + gap
}

function scrollLeft(el: HTMLElement | null) {
    if (!el) return
    el.scrollBy({ left: -getStep(el), behavior: 'smooth' })
}

function scrollRight(el: HTMLElement | null) {
    if (!el) return
    el.scrollBy({ left: getStep(el), behavior: 'smooth' })
}
</script>

<style scoped>
.team-container-geral {
    background-color: var(--neutral-color-light);
}

.team-geral {
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
    background-color: var(--neutral-color-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 4rem;
    color: var(--neutral-color-dark);
}

.team-geral h2 {
    font-family: "Archivo";
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
}

.team-card {
    background-color: var(--primary-color-light);
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 1rem;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    width: 540px;
    padding: 20px 16px;
    flex: 0 0 auto;

}

.team-card img {
    width: 160px;
    height: 160px;
}


.team-containers-img {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
}

.team-carousel {
    width: 100%;
    overflow: hidden;
}


.team-track {
    display: flex;
    gap: 2rem;
    flex-wrap: nowrap;
    will-change: transform;
    animation: team-scroll 30s linear infinite;
}

.team-track:hover {
    animation-play-state: paused;
}


.team-track-reverse {
    animation: team-scroll-reverse 30s linear infinite;
}

@keyframes team-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@keyframes team-scroll-reverse {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0);
    }
}

.team-card-text {
    font-family: "Archivo";
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    padding: 1rem;
    gap: 0.5rem;
    line-height: 1.2;
}

.team-card-text h3 {
    font-size: 24px;
    font-weight: 700;
}

.team-card-text h4 {
    font-size: 20px;
    font-weight: 700;
}

.team-card-text p {
    font-size: 16px;
    font-weight: 400;
}

.p-D {
    display: inline-block;
}

.p-M {
    display: none;
}

.team-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--neutral-color-dark);
    color: var(--neutral-color-light);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;

    /* Agora visível no desktop também, mas só ao hover do contêiner */
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    /* escondida por padrão no desktop */
    pointer-events: none;
    /* evita clique quando invisível */
    transition: opacity 200ms ease;
    z-index: 5;
}

.team-arrow.left {
    left: 8px;
}

.team-arrow.right {
    right: 8px;
}

/* No desktop, mostrar setas ao passar o mouse no contêiner */
.team-containers-img:hover .team-arrow {
    opacity: 0.9;
    pointer-events: auto;
}

@media (max-width: 768px) {

    .team-geral {
        width: 100%;
        padding: 32px 0px;
        gap: 2rem;
    }

    .team-carousel {
        overflow-x: auto;
        /* ativa rolagem */
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        padding: 1rem 0;
    }

    .team-card {
        width: 340px;
    }

    .team-card img {
        width: 140px;
        height: 140px;
    }

    .p-D {
        display: none;
    }

    .p-M {
        display: block;
    }

    .team-arrow {
        opacity: 1;
        pointer-events: auto;
    }

    .team-track,
    .team-track-reverse {
        animation: none;
        gap: 1rem;
    }


}
</style>