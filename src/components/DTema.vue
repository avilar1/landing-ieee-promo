<template>
    <div class="tema" id="themes">
        <div class="tema-container" v-observe="{ once: false }">
            <h2 class="tema-h2">Shaping Tomorrow's Industry: <br /> Key Themes for IES SYP Congress 2026</h2>

            <div class="tema-imgs">
                <div class="tema-imgs-card">
                    <img src="../../public/images/G1.png"
                        alt="um braço robótico e uma mão humana de encontro a se cumprimentar" class="tema-img">
                </div>
                <div class="tema-imgs-card">
                    <img src="../../public/images/G2.png" alt=" uma impressão digital em alto relevo" class="tema-img">
                </div>
                <div class="tema-imgs-card">
                    <img src="../../public/images/G3.png"
                        alt="uma mulher símbolo da justiça cega, com o olhos vendados e segurando uma balança"
                        class="tema-img  ">
                </div>
            </div>

        </div>
    </div>
</template>

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

.tema-imgs {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

.tema-imgs-card {
    max-width: 268px;
    max-height: 400px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tema-img {
    width: 100%;
    height: 400px;
    transition: transform 0.3s ease;
    object-fit: cover;
    object-position: center;
    display: block;
}
</style>