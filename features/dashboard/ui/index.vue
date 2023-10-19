<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

const fetcher = (page: Ref<number>) =>
  fetch(
    `https://reqres.in/api/users?page=${page.value}&per_page=2`,
  ).then((response: any) => response.json())

const page = ref(1)

const { isLoading, isError, data, error, isFetching, isPreviousData } = useQuery({
  queryKey: ['users', page],
  queryFn: () => fetcher(page),
  keepPreviousData: true,
})

const prevPage = () => {
  page.value = Math.max(page.value - 1, 1)
}
const nextPage = () => {
  if (!isPreviousData.value) page.value = page.value + 1
}

const totalPages = computed(() => {
  return Math.ceil(data.value.total / data.value.per_page)
})

const handlePageChange = (newPage: any) => {
  page.value = newPage
}
</script>

<template>
  <h1>Posts</h1>
  <p>Current Page: {{ page }} | Previous data: {{ isPreviousData }}</p>
  <!-- <div>{{ (data.total / data.per_page) }}</div> -->
  <ul>
    <li v-for="p in totalPages" :key="p">
      <button @click="handlePageChange(p)">
        {{ p }}
      </button>
    </li>
  </ul>
  <button @click="prevPage">Prev Page</button>
  <button @click="nextPage">Next Page</button>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <ul>
      <li v-for="item in data.data" :key="item.id">
        {{ item.email }}
      </li>
    </ul>
  </div>
</template>
