<script setup>
import useScale from './hooks/useScale'

const option = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9
}

// useScale(option)
</script>

<template>
  <RouterView />
</template>
