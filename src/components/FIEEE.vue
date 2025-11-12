<template>
    <div class="geral-ieee" id="ieee">
        <h2 class="ieee-h2">United by Purpose: Who Makes This Possible</h2>
        <div class="ieee-container ieee-container-1" v-observe>
            <img src=" /images/NewIEEE.webp" alt="logo do IEEE">
            <div class="ieee-caixa-texto-1">
                <h3>Get to Know IEEE: Building the Future of Technology, Together</h3>
                <p>The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical
                    professional organization dedicated to advancing technology for the benefit of humanity. The IEEE
                    provides the foundational standards, publications, and community that power innovation worldwide.
                </p>
            </div>
        </div>

        <div class="ieee-container ieee-container-2" v-observe>
            <div class=" ieee-caixa-texto-2">
                <h3>Meet IES: Engineering the Future of Industrial Systems</h3>
                <p>The Industrial Electronics Society (IES) is a professional organization within IEEE that focuses on
                    the application of electronics, controls, communications, instrumentation, and computational
                    intelligence to industrial and manufacturing systems. It supports technological advancements in
                    areas such as intelligent control systems, robotics, automation, factory communications, signal
                    processing, vision systems, and power electronics to enhance industrial and manufacturing processes.
                    The society aims to foster innovation, support career development, and promote knowledge sharing for
                    the benefit of industry and humanity.</p>
            </div>
            <img src="/images/NewIES.webp" alt="logo da IEEE-IES">
        </div>

        <div class="ieee-container ieee-container-1" v-observe>
            <img src="/images/NewCEFET.webp" alt="logo da CEFET/RJ">
            <div class=" ieee-caixa-texto-1">
                <h3>Explore CEFET/RJ: Your Host in Rio</h3>
                <p>The Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ) is a distinguished
                    federal institution in Rio de Janeiro dedicated to the integral training of professionals across
                    scientific, technological, and ethical domains. CEFET/RJ offers the ideal setting for international
                    knowledge exchange and collaboration, reinforcing its commitment to contributing to technological
                    and industrial development.</p>
            </div>
        </div>

        <div class="ieee-final">
            <p class="ieee-final-text">Meet the institutions who share our mission to drive technological innovation for
                humanity</p>

            <div ref="carrossel" class="ieee-carrossel">
                <div ref="track" class="ieee-carrossel-track">
                    <img class="ieee-carrossel-img" src="../../images/I1.webp" alt="logo do VISIT RIO">
                    <img class="ieee-carrossel-img" src="../../images/I2.webp" alt="logo da prefeitura do Rio">
                    <img class="ieee-carrossel-img" src="../../images/I3.webp" alt="logo da UFSC">
                    <img class="ieee-carrossel-img" src="../../images/I4.webp" alt="logo do IFF">
                    <img class="ieee-carrossel-img" src="../../images/I5.webp" alt="logo da ESG">
                    <img class="ieee-carrossel-img" src="../../images/I6.webp" alt="logo da ESG-Segurança">
                    <img class="ieee-carrossel-img" src="../../images/I7.webp" alt="logo da CPGEI">
                    <img class="ieee-carrossel-img" src="../../images/I8.webp" alt="logo do utfpr">
                    <img class="ieee-carrossel-img" src="../../images/I9.webp" alt="logo da usrn">
                    <img class="ieee-carrossel-img" src="../../images/I10.webp" alt="logo da PPGES">
                    <img class="ieee-carrossel-img" src="../../images/I11.webp" alt="logo da profComp">
                    <img class="ieee-carrossel-img" src="../../images/I12.webp" alt="logo da AutomacaoUFSC">
                </div>
            </div>

            <p class="ieee-final-text">Ready to Shape the Future with Us?</p>
            <button class="btn-ieee-final">Explore Partnership Opportunities</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.geral-ieee {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 96px 2rem;
    background-color: var(--neutral-color-light);
    color: var(--neutral-color-dark);
}

.ieee-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 1120px;
    width: 100%;
}

.ieee-container img {
    width: 268px;
    height: auto;
}

.ieee-caixa-texto-1,
.ieee-caixa-texto-2 {
    flex: 1;
}

.ieee-caixa-texto-1 {
    text-align: end;
}

.ieee-caixa-texto-2 {
    text-align: start;
}

.ieee-h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    font-style: bold;
    line-height: 1.2;
}


.ieee-container h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 1rem;
}

.ieee-container p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
}

.ieee-final {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
}

.ieee-final-text {
    font-size: 18px;
    text-align: center;
    max-width: 800px;
    padding: 0 1rem;
}

.ieee-carrossel {
    max-width: 1120px;
    width: 100%;
    display: flex;
}

.ieee-carrossel-track {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

}



.ieee-carrossel-img {
    height: 72px;
    width: auto;
    flex-shrink: 0;
    object-fit: contain;
}

.btn-ieee-final {
    background-color: var(--primary-color);
    color: var(--neutral-color-light);
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25);
}

.btn-ieee-final:hover {
    background-color: var(--primary-color-dark);
    transition: background-color 200ms ease;
}


@media (max-width: 768px) {
    .ieee-container {
        flex-direction: column;
        text-align: center;
    }

    .ieee-container-2 {
        flex-direction: column-reverse;
    }

    .ieee-caixa-texto-1,
    .ieee-caixa-texto-2 {
        text-align: center;
    }


    .ieee-container img {
        width: 200px;
    }

    .ieee-final-text {
        font-size: 14px;
        font-weight: 400;
    }

    .ieee-container p {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
    }
}
</style>