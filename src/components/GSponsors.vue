<template>
    <div class="supporters-geral" id="sponsors">
        <div class="supporters-container">
            <h2 class="supporters-h2">Organization & Sponsorship</h2>
            <div class="supporters-box">
                <h4>Organized by:</h4>
                <div class="supporters-logos">
                    <img src="../../public/images/S11.png" alt="sponsor 1">
                    <img src="../../public/images/S12.png" alt="sponsor 2">
                </div>
            </div>
            <div class="supporters-box">
                <h4>Supported by:</h4>
                <div class="supporters-logos">
                    <img src="../../public/images/S11.png" alt="sponsor 1">
                    <img src="../../public/images/S22.png" alt="sponsor 2">
                    <img src="../../public/images/S12.png" alt="sponsor 3">
                    <img src="../../public/images/S11.png" alt="sponsor 4">
                </div>
            </div>
            <div class="supporters-box">
                <h4>Other partnerships:</h4>
                <div class="supporters-logos">
                    <img src="../../public/images/S11.png" alt="sponsor 1">
                    <img src="../../public/images/S12.png" alt="sponsor 2">
                    <img src="../../public/images/S22.png" alt="sponsor 3">
                    <img src="../../public/images/S12.png" alt="sponsor 4">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.supporters-geral {
    background-color: var(--neutral-color-light);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 96px 0;
}

.supporters-h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.2;
    align-self: center;
    margin-top: 24px;
}

.supporters-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    padding: 2rem 0;
    min-width: 1120px;
}

@media (max-width: 768px) {
    .supporters-container {
        min-width: auto;
        width: 90%;
        align-items: center;
    }
}

.supporters-box {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 2rem;
}

.supporters-box h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
}

.supporters-logos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.supporters-logos img {
    width: 200px;
    height: auto;
}


@media (max-width: 768px) {
    .supporters-logos {
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;


    }

    .supporters-logos img {
        flex: 0 0 auto;
        scroll-snap-align: center;
    }
}
</style>