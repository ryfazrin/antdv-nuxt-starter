<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

const fetcher = (page: Ref<number>) =>
  fetch(
    `https://reqres.in/api/users?page=${page.value}&per_page=3`,
  ).then((response: any) => response.json())

const page = ref(1)

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['users', page],
  queryFn: () => fetcher(page),
  keepPreviousData: true,
})

const dataModified = computed(() => {
  if (data.value) {
    return data.value.data.map((x: any, i: any) => ({
      ...x,
      key: i,
      no: i + 1 + data.value.per_page * (page.value - 1),
    }))
  }
})

const handlePageChange = (newPage: any) => {
  page.value = newPage
}

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
]
</script>

<template>
  <a-table
    :loading="isLoading"
    :columns="columns"
    :data-source="dataModified"
    :pagination="{
      total: data?.total,
      pageSize: data?.per_page,
      onChange(page, pageSize) {
        handlePageChange(page)
      },
    }"
  />
</template>
