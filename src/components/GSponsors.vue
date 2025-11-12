<template>

    <div class="supporters-geral" id="Supporters">
        <div class="supporters-container">
            <h2 class="supporters-h2">Organization & Sponsorship</h2>

            <div class="supporters-box" v-observe>
                <h4>Organizers:</h4>
                <div class="supporters-logos">
                    <div class="supporters-track-M">
                        <img src="../../images/NewIEEE.webp" alt="sponsor 1" class="ieee-img">
                        <img src="../../images/NewIES.webp" alt="sponsor 2" class="ieee-img">
                        <img src="../../images/NewCEFET.webp" alt="sponsor 3" class="ieee-img">
                    </div>
                </div>
            </div>

            <div class="supporters-box" v-observe>
                <h4>Supporters:</h4>
                <div class="supporters-logos">
                    <div class="supporters-track-M">
                        <img src="../../images/I1.webp" alt="sponsor 1" class="ieee-img">
                        <img src="../../images/I2.webp" alt="sponsor 2" class="ieee-img">
                    </div>
                </div>
            </div>

            <div class="supporters-box" v-observe>
                <h4>University Supporters:</h4>

                <div class="supporters-logos">

                    <div class="supporters-track supporter-track-1">

                        <img src="../../images/I3.webp" alt="sponsor 1" class="ieee-img">
                        <img src="../../images/I4.webp" alt="sponsor 2" class="ieee-img">
                        <img src="../../images/I5.webp" alt="sponsor 3" class="ieee-img">
                        <img src="../../images/I6.webp" alt="sponsor 4" class="ieee-img">
                        <img src="../../images/I7.webp" alt="sponsor 5" class="ieee-img">
                        <img src="../../images/I8.webp" alt="sponsor 6" class="ieee-img">
                        <img src="../../images/I9.webp" alt="sponsor 7" class="ieee-img">
                        <img src="../../images/I10.webp" alt="sponsor 8" class="ieee-img">
                        <img src="../../images/I11.webp" alt="sponsor 9" class="ieee-img">
                        <img src="../../images/I12.webp" alt="sponsor 10" class="ieee-img">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.supporters-geral {
    background-color: var(--neutral-color-light);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 96px 0;
}

.supporters-h2 {
    font-family: "Archivo";
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
    max-width: 1120px;
    width: 100%;
}

@media (max-width: 1120px) {
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
    margin: 2rem 0;
    width: 100%;
    min-width: 0;

}

.supporters-box h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
}


.supporters-logos {
    width: 100%;
    max-width: 100%;

    overflow: hidden;
    box-sizing: border-box;
}

.ieee-img {
    height: 75px;
    width: auto;
    flex: 0 0 auto;
    object-fit: contain;
    margin-right: 2rem;
}



.img-extra-mobile {
    display: none;
}


.supporters-track,
.supporters-track-M {

    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

}



@media (max-width: 768px) {
    .img-extra-mobile {
        display: inline;
    }
}
</style>