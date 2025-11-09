<template>
    <div class="team-container-geral">
        <div class="team-geral">
            <h2>Meet the Team: IEEE IES SYP Congress 2026 Organizing Committee</h2>

            <!-- Carrossel 1 -->
            <div class="team-containers-img team-container-1">
                <button class="team-arrow left" @click="scrollLeft(carousel1)" aria-label="Anterior">‹</button>
                <div class="team-carousel" ref="carousel1" @mouseenter="pp1.pause" @mouseleave="pp1.resume"
                    @touchstart="pp1.pause" @touchend="pp1.resume">
                    <div ref="track1" class="team-track">
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
                                <h4>Carlos Eduardo Pantoja</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM3.webp" alt="">
                            <div class="team-card-text">
                                <h3>Treasurer</h3>
                                <h4>Thomas Moreira Campello</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM4.webp" alt="">
                            <div class="team-card-text">
                                <h3>Secretary</h3>
                                <h4>Diego Cardoso Borda Castro</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM5.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Young Professionals</h3>
                                <h4>Janislley Oliveira de Sousa</h4>
                                <p class="p-D">Universidade Federal do Amazonas (UFAM)</p>
                                <p class="p-M">UFAM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="team-arrow right" @click="scrollRight(carousel1)" aria-label="Próximo">›</button>
            </div>

            <!-- Carrossel 2 -->
            <div class="team-containers-img team-container-2">
                <button class="team-arrow left" @click="scrollLeft(carousel2)" aria-label="Anterior">‹</button>
                <div class="team-carousel" ref="carousel2" @mouseenter="pp2.pause" @mouseleave="pp2.resume"
                    @touchstart="pp2.pause" @touchend="pp2.resume">
                    <div ref="track2" class="team-track">
                        <div class="team-card">
                            <img src="../../public/images/MEM6.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Technical Activities</h3>
                                <h4>João Teixeira de Carvalho Neto</h4>
                                <p class="p-D">Instituto Federal do Rio Grande do Norte (IFRN)</p>
                                <p class="p-M">IFRN</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM7.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Sponsorship</h3>
                                <h4>Marco Aurélio Wehrmeister</h4>
                                <p class="p-D">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
                                <p class="p-M">UTFPR</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM8.webp" alt="">
                            <div class="team-card-text">
                                <h3>Webmaster</h3>
                                <h4>Vladimir Marques Erthal</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM0.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Meals and Accommodation</h3>
                                <h4>Fernanda Rosa dos Santos</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="../../public/images/MEM9.webp" alt="">
                            <div class="team-card-text">
                                <h3>Head of Social Activities</h3>
                                <h4>Fernando Santos Berçot</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
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
// filepath: d:\arquivosDeEstudo\oficial-ladding\ladding-oficial\src\components\JTeam.vue
import { ref, onMounted, onBeforeUnmount } from 'vue'

const carousel1 = ref<HTMLElement | null>(null)
const carousel2 = ref<HTMLElement | null>(null)

function getStep(el: HTMLElement) {
    const card = el.querySelector('.team-card') as HTMLElement | null
    const track = el.querySelector('.team-track') as HTMLElement | null
    if (!card) return 360
    const gap = track ? parseInt(getComputedStyle(track).gap || '0', 10) : 0
    return card.offsetWidth + gap
}

type Ping = { pause: () => void; resume: () => void }
function usePingPong(elRef: typeof carousel1, opts?: { speed?: number; startAtEnd?: boolean }): Ping {
    let raf: number | null = null
    let dir: 1 | -1 = 1
    const speed = opts?.speed ?? 0.6
    const startAtEnd = opts?.startAtEnd ?? false

    const tick = () => {
        const el = elRef.value
        if (!el) { raf = requestAnimationFrame(tick); return }
        const max = el.scrollWidth - el.clientWidth
        if (max <= 0) { raf = requestAnimationFrame(tick); return }

        el.scrollLeft += dir * speed
        if (el.scrollLeft <= 0) dir = 1
        else if (el.scrollLeft >= max) dir = -1

        raf = requestAnimationFrame(tick)
    }

    const pause = () => { if (raf !== null) { cancelAnimationFrame(raf); raf = null } }
    const resume = () => { if (raf === null) raf = requestAnimationFrame(tick) }

    const onResize = () => {
        const el = elRef.value
        if (!el) return
        const max = el.scrollWidth - el.clientWidth
        if (startAtEnd && el.scrollLeft === 0 && dir === -1) el.scrollLeft = max
        if (el.scrollLeft > max) el.scrollLeft = max
    }

    onMounted(() => {
        const el = elRef.value
        if (el) {
            const max = el.scrollWidth - el.clientWidth
            if (startAtEnd && max > 0) { el.scrollLeft = max; dir = -1 }
        }
        resume()
        window.addEventListener('resize', onResize)
    })
    onBeforeUnmount(() => {
        pause()
        window.removeEventListener('resize', onResize)
    })

    return { pause, resume }
}

const pp1 = usePingPong(carousel1, { speed: 0.6, startAtEnd: false })
const pp2 = usePingPong(carousel2, { speed: 0.6, startAtEnd: true })

function scrollLeft(elRef: typeof carousel1) {
    const el = elRef.value
    if (!el) return
    const step = getStep(el)
    const pp = elRef === carousel1 ? pp1 : pp2
    pp.pause()
    el.scrollBy({ left: -step, behavior: 'smooth' })
    window.setTimeout(pp.resume, 600)
}

function scrollRight(elRef: typeof carousel1) {
    const el = elRef.value
    if (!el) return
    const step = getStep(el)
    const pp = elRef === carousel1 ? pp1 : pp2
    pp.pause()
    el.scrollBy({ left: step, behavior: 'smooth' })
    window.setTimeout(pp.resume, 600)
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
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
}

.team-carousel::-webkit-scrollbar {
    display: none;
}

/* trilho SEM animação CSS */
.team-track {
    display: flex;
    gap: 2rem;
    flex-wrap: nowrap;
}

/* remova .team-track-reverse, @keyframes ping/pingRev e qualquer animation */
.team-track-reverse {
    animation: pingRev 30s linear infinite alternate;
}

/* Pausa ao hover permanece */
.team-track:hover,
.team-track-reverse:hover {
    animation-play-state: paused;
}

@keyframes ping {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(var(--dist));
    }
}

@keyframes pingRev {
    from {
        transform: translateX(var(--dist));
    }

    to {
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 200ms ease;
    z-index: 5;
}

.team-arrow.left {
    left: 8px;
}

.team-arrow.right {
    right: 8px;
}

.team-containers-img:hover .team-arrow {
    opacity: 0.9;
    pointer-events: auto;
}

@media (max-width: 768px) {
    .team-geral {
        width: 100%;
        padding: 32px 0;
        gap: 2rem;
    }

    .team-carousel {
        scroll-snap-type: x proximity;
        padding: 1rem 0;
    }

    .team-card {
        scroll-snap-align: start;
        width: 340px;
    }

    .team-track {
        gap: 1rem;
    }
}
</style>