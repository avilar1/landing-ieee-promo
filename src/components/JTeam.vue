<template>
    <div class="team-container-geral">
        <div class="team-geral">
            <h2>Meet the Team: IEEE IES SYP Congress 2026 Organizing Committee</h2>

            <div class="team-containers-img team-container-1" v-observe>
                <div class="team-carousel" ref="carousel1">
                    <div class="team-track">
                        <div class="team-card">
                            <img src="/images/MEM1.webp" alt="imagem do membro Leandro Buss Becker">
                            <div class="team-card-text">
                                <h3>Chairperson</h3>
                                <h4>Leandro Buss Becker</h4>
                                <p class="p-D">Universidade Federal de Santa Catarina (UFSC)</p>
                                <p class="p-M">UFSC</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM2.webp" alt="imagem do membro Carlos Eduardo Pantoja">
                            <div class="team-card-text">
                                <h3>Head of Program</h3>
                                <h4>Carlos Eduardo Pantoja</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM3.webp" alt="imagem do membro Thomas Moreira Campello">
                            <div class="team-card-text">
                                <h3>Treasurer</h3>
                                <h4>Thomas Moreira Campello</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM4.webp" alt="imagem do membro Diego Cardoso Borda Castro">
                            <div class="team-card-text">
                                <h3>Secretary</h3>
                                <h4>Diego Cardoso Borda Castro</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM5.webp" alt="imagem do membro Janislley Oliveira de Sousa">
                            <div class="team-card-text">
                                <h3>Head of Young Professionals</h3>
                                <h4>Janislley Oliveira de Sousa</h4>
                                <p class="p-D">Universidade Federal do Amazonas (UFAM)</p>
                                <p class="p-M">UFAM</p>
                            </div>
                        </div>



                        <div class="team-card">
                            <img src="/images/MEM6.webp" alt="imagem do membro João Teixeira de Carvalho Neto">
                            <div class="team-card-text">
                                <h3>Head of Technical Activities</h3>
                                <h4>João Teixeira de Carvalho Neto</h4>
                                <p class="p-D">Instituto Federal do Rio Grande do Norte (IFRN)</p>
                                <p class="p-M">IFRN</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM7.webp" alt="imagem do membro Marco Aurélio Wehrmeister">
                            <div class="team-card-text">
                                <h3>Head of Sponsorship</h3>
                                <h4>Marco Aurélio Wehrmeister</h4>
                                <p class="p-D">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
                                <p class="p-M">UTFPR</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM8.webp" alt="imagem do membro Vladimir Marques Erthal">
                            <div class="team-card-text">
                                <h3>Webmaster</h3>
                                <h4>Vladimir Marques Erthal</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM0.webp"
                                alt="imagem vazia apenas com fundo cinza pois não há foto do membro disponível">
                            <div class="team-card-text">
                                <h3>Head of Meals and Accommodation</h3>
                                <h4>Fernanda Rosa dos Santos</h4>
                                <p class="p-D">Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)
                                </p>
                                <p class="p-M">CEFET/RJ</p>
                            </div>
                        </div>
                        <div class="team-card">
                            <img src="/images/MEM9.webp" alt="imagem do membro Fernando Santos Berçot">
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
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
// script vazio removível se não houver lógica futura
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

.team-containers-img {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.team-carousel {
    width: 100%;


}

.team-carousel::-webkit-scrollbar {
    display: none;
}

.team-track {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    justify-items: center;
    gap: 2rem;
}

.team-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;

    justify-self: center;

}

.team-card {
    background-color: var(--primary-color-light);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    width: auto;
    padding: 20px 16px;
    flex: 0 0 auto;
}

.team-card img {
    width: 160px;
    height: 160px;
    object-fit: cover;
}

.team-card-text {
    font-family: "Archivo";
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    line-height: 1.2;
    text-align: left;
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
    display: inline;
}

.p-M {
    display: none;
}

@media (max-width: 768px) {
    .team-geral {
        padding: 32px 0;
        gap: 2rem;
    }

    .team-track {
        gap: 1rem;
    }

    .team-card {
        min-width: 220px;
        width: 80%;
    }

    .team-card img {
        width: 100px;
        height: 100px;
    }

    .p-D {
        display: none;
    }

    .p-M {
        display: block;
    }

    .team-track {
        grid-template-columns: 1fr;
    }


    .team-card-text {
        overflow-wrap: anywhere;
    }

    .team-card-text h3 {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.2;
    }

    .team-card-text h4 {
        font-size: 16px;
        font-weight: 700;
    }

    .team-card-text p {
        font-size: 16px;
        font-weight: 400;
    }
}
</style>