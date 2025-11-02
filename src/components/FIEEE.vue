<template>
    <div class="geral-ieee" id="ieee">
        <div class="ieee-container ieee-container-1" v-observe="{ once: false }">
            <img src="../../public/images/IEEE-MB.png" alt="logo do IEEE">
            <div class="ieee-caixa-texto-1">
                <h3>Get to Know IEEE: Building the Future of Technology, Together</h3>
                <p>The Institute of Electrical and Electronics Engineers (IEEE) is the world’s largest technical
                    professional organization dedicated to advancing technology for the benefit of humanity. The IEEE
                    provides the foundational standards, publications, and community that power innovation worldwide.
                </p>
            </div>
        </div>

        <div class="ieee-container ieee-container-2" v-observe="{ once: false }">
            <div class="ieee-caixa-texto-2">
                <h3>Meet IES: Engineering the Future of Industrial Systems</h3>
                <p>The Industrial Electronics Society (IES) is a professional organization within IEEE that focuses on
                    the application of electronics, controls, communications, instrumentation, and computational
                    intelligence to industrial and manufacturing systems. It supports technological advancements in
                    areas such as intelligent control systems, robotics, automation, factory communications, signal
                    processing, vision systems, and power electronics to enhance industrial and manufacturing processes.
                    The society aims to foster innovation, support career development, and promote knowledge sharing for
                    the benefit of industry and humanity.</p>
            </div>
            <img src="../../public/images/IEEE-IES.png" alt="logo da IEEE-IES">
        </div>
    </div>
</template>

<style scoped>
.geral-ieee {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 96px 2rem;

    background-color: var(--neutral-color-dark);

    color: var(--neutral-color-light);
}

.ieee-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    max-width: 1120px;
}


.ieee-container img {
    width: 268px;
    height: auto;
}

@media (max-width: 768px) {
    .ieee-container {
        flex-direction: column;
        text-align: center;
    }

    .ieee-container img {
        width: 200px;
    }
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
</style>