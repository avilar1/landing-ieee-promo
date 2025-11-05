<template>
    <div class="sobre" id="about">
        <div class="in-sobre" v-observe="{ once: false }">
            <img src="../../public/images/E1.webp" alt="imagem futurista do Rio de Janeiro" class="sobre-img" />
            <div class="sobre-texto">
                <h2 class="sobre-h2">IEEE IES SYP Congress 2026: The Future of Industrial Technology</h2>
                <p class="sobre-p">Join the IEEE IES SYP Congress 2026 in vibrant Rio de Janeiro, a premier
                    international gathering uniting students, young professionals, academics, and industry leaders for
                    an immersive three-day experience. </p>
                <p class="sobre-p"> Through a dynamic lineup of keynote speeches, hands-on workshops, and expert-led
                    panels, the Congress provides an invaluable platform for knowledge exchange, skill-building, and
                    career growth. Designed to foster collaboration, the event specifically aims to strengthen the vital
                    connection between IEEE, emerging talent, and global industry partners, shaping the future of
                    industrial electronics with responsibility and innovation.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sobre {


    background-color: var(--neutral-color-dark);
    padding: 32px 0;
}

.in-sobre {
    max-height: 346px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 40px;
}

@media (max-width: 768px) {
    .in-sobre {
        flex-direction: column-reverse;
        max-height: none;
    }
}

.sobre-img {
    max-width: 346px;
    height: auto;
    border-radius: 16px;
}

@media (max-width: 768px) {
    .sobre-img {
        max-width: 100%;
    }
}

.sobre-texto {
    color: var(--neutral-color-light);
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
}

.sobre-h2 {
    font-size: 22px;
    margin-bottom: 16px;
    font-weight: 700;
    line-height: 1.2;
    line-clamp: 0;
}

.sobre-p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
}
</style>