<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ANav from './components/ANav.vue'
import HFooter from './components/HFooter.vue'

const route = useRoute()
const forceDark = computed(() => route.meta.navForceDark === true)
const hideMenu = computed(() => route.meta.navHideMenu === true)
</script>

<template>
  <nav>
    <ANav :force-dark="forceDark" :hide-menu="hideMenu" />
  </nav>

  <RouterView />

  <HFooter />
</template>

<style scoped></style>
