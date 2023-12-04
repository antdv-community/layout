<script setup lang="ts">
import { ProLayout } from '@antdv-pro/layout'
import { shallowRef } from 'vue'

const mode = shallowRef<'dark' | 'light'>('dark')
</script>

<template>
  <ProLayout :mode="mode">
    <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
      点击
    </button>
  </ProLayout>
</template>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
