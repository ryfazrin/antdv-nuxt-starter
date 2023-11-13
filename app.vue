<script lang="ts" setup>
import AntdConfig from '~/shared/styles/AntdConfig.vue'
// const nuxtApp = useNuxtApp()
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 2000)

// nuxtApp.hook('page:start', () => {
//   isLoading.value = true
//   console.log('page:start')
// })
// nuxtApp.hook('page:finish', () => {
//   isLoading.value = false
//   console.log('page:finish')
// })

// onMounted(() => {
//   isLoading.value = false
//   console.log('onMounted')
// })
</script>

<template>
  <AntdConfig>
    <NuxtLayout>
      <div v-if="isLoading" class="loading-spinner">
        <a-spin size="large" />
      </div>
      <NuxtPage v-else />
    </NuxtLayout>
  </AntdConfig>
</template>

<style lang="scss">
.loading-spinner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(255, 255, 255, 0.7); */
  background: rgba(255, 255, 255, 1);
  z-index: 9999;
}
</style>
