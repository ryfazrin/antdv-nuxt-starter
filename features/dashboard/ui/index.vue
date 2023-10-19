<script lang="ts" setup>
import useGetList from '../composables/useGetList'

const {
  fetchQuery,
  dataModified,
  handlePageChange,
} = useGetList()

const { isLoading, data } = fetchQuery

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
