<script setup lang="ts">
defineProps<{
    light?: boolean
}>()
</script>

<template>
    <div class="logo">
        <span class="logo-ttp logo-top" :class="{ light }">3rd IEEE IES</span>
        <span class="logo-ttp logo-middle" :class="{ light }">SYP CONGRESS</span>
        <span class="logo-ttp logo-bottom" :class="{ light }">BRAZIL 2026</span>
    </div>
</template>

<style scoped>
.logo {
    font-family: "Righteous", cursive;
    height: 60px;
    width: 206px;
    display: flex;
    flex-direction: column;
}

.logo-ttp {
    display: block;
    line-height: 1;
    color: var(--neutral-color-dark);
}

.logo-ttp.light {
    color: var(--neutral-color-light);
}

.logo-top {
    font-size: 12px;
    font-weight: 400;
    align-self: start;
}

.logo-middle {
    font-size: 28px;
    font-weight: 400;
    align-self: center;

}

.logo-bottom {
    font-size: 12px;
    font-weight: 400;
    align-self: end;
}
</style>