<script lang="ts" setup>
// const props = defineProps(['foo'])

import { useQuery } from '@tanstack/vue-query'

const fetcher = async () =>
  await fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json(),
  )

const { data, suspense, isLoading } = useQuery({ queryKey: ['test'], queryFn: fetcher })
await suspense()

const dataFetch = data.value.map((x: any, i: any) => ({
  ...x,
  key: i,
  // no: i + 1 + pageSize * (page - 1),
}))

const columns = [
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
]
</script>

<template>
  <!-- <div>{{ dataFetch }}</div> -->
  <div>
    <a-table
      :loading="isLoading"
      :data-source="dataFetch"
      :columns="columns"
    />
  </div>
</template>
