<script setup lang="ts">
import { useSlots } from 'vue'
import type { ProLayoutEmits, ProLayoutProps, ProLayoutSlots } from './typing'
import BasicLayout from './layout.tsx'

defineOptions({
  name: 'ProLayout',
})
defineProps<ProLayoutProps>()
defineEmits<ProLayoutEmits>()
defineSlots<ProLayoutSlots>()
const slots = useSlots()
console.log(slots)
</script>

<template>
  <BasicLayout v-bind="{ ...$props, ...$attrs }">
    <template v-for="(_, key) in slots" #[key]="scope" :key="key">
      <slot :name="key as string" v-bind="scope" />
    </template>
  </BasicLayout>
</template>

<style scoped>

</style>
