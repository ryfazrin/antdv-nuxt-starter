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

const totalPages = computed(() => {
  if (data.value) return Math.ceil(data.value.total / data.value.per_page)
})

const handlePageChange = (newPage: any) => {
  page.value = newPage
}

const columns = [
  {
    title: 'no',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'first_name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
]
</script>

<template>
  <h1>Posts</h1>
  <ul>
    <li v-for="p in totalPages" :key="p">
      <button @click="handlePageChange(p)">
        {{ p }}
      </button>
    </li>
  </ul>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else-if="isError">
    An error has occurred: {{ error }}
  </div>
  <div v-else-if="data">
    <ul>
      <li v-for="item in data.data" :key="item.id">
        {{ item.email }}
      </li>
    </ul>
  </div>
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
