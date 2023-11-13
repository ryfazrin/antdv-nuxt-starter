<script lang="ts" setup>
import { COLORS } from '~/shared/styles/color'

const route = useRoute()

const breadcrumbs = computed(() => {
  const currentPath = route.path
  const breadcrumbs = []

  const pathSegments = currentPath.split('/').filter((segment: any) => segment !== '')

  for (const route of pathSegments) {
    const segmentDesc = route.split('-').join(' ')
    const segmentWithCapitalize = segmentDesc.at(0)?.toUpperCase() + segmentDesc.slice(1)

    breadcrumbs.push({ name: segmentWithCapitalize, path: currentPath })
  }

  return breadcrumbs
})
</script>

<template>
  <a-breadcrumb separator="/">
    <a-breadcrumb-item>
      <NuxtLink href="/">
        <HomeFilled
          :style="{
            color: COLORS.PRIMARY,
            fontSize: 21,
          }"
        />
      </NuxtLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-if="route.path === '/'">
      <NuxtLink href="/">
        Dashboard
      </NuxtLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <NuxtLink :href="breadcrumb.path">
        {{ breadcrumb.name }}
      </NuxtLink>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
