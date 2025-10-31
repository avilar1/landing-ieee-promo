<script setup lang="ts">
import BCapa from './components/BCapa.vue';
import ANav from './components/ANav.vue';
import CSobre from './components/CSobre.vue';
import DTema from './components/DTema.vue';
import EVisitRio from './components/EVisitRio.vue';
import FIEEE from './components/FIEEE.vue';
import GSponsors from './components/GSponsors.vue';
import HFooter from './components/HFooter.vue';
</script>

<template>
  <nav>
    <ANav />
  </nav>
  <header>
    <BCapa />
  </header>
  <main>
    <CSobre />
    <DTema />
    <EVisitRio />
    <FIEEE />
    <GSponsors />
    <HFooter />
  </main>
</template>

<style scoped></style>
