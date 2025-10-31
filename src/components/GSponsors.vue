<template>
    <div class="sponsors-geral">
        <div class="sponsors-container">
            <h2 class="sponsors-h2">Organization & Sponsorship</h2>
            <div class="sponsors-box">
                <h4>Organized by:</h4>
                <div class="sponsors-organized">
                    <img src="../../public/images/S11.png" alt="sponsor 1">
                    <img src="../../public/images/S12.png" alt="sponsor 2">
                </div>
            </div>
            <div class="sponsors-box">
                <h4>Supported by:</h4>
                <div class="sponsors-organized">
                    <img src="../../public/images/S11.png" alt="sponsor 1">
                    <img src="../../public/images/S22.png" alt="sponsor 2">
                    <img src="../../public/images/S12.png" alt="sponsor 3">
                    <img src="../../public/images/S11.png" alt="sponsor 4">
                </div>
            </div>
            <div class="sponsors-box">
                <h4>Other partnerships:</h4>
                <div class="sponsors-organized">
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
.sponsors-geral {

    background-color: var(--neutral-color-light);
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 96px 0;
}

.sponsors-h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.2;
    align-self: center;
    margin-top: 24px;
}

.sponsors-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    padding: 2rem 0;
    min-width: 1120px;
}

.sponsors-box {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 2rem;
}

.sponsors-box h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
}

.sponsors-organized {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.sponsors-organized img {
    width: 200px;
    height: auto;
}
</style>