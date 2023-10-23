<script lang="ts" setup>
import Dashboard from '~/features/dashboard/ui/index.vue'

const modalUser = ref<boolean>(false)

const showModal = () => {
  modalUser.value = true
}

const handleOk = (e: MouseEvent) => {
  // eslint-disable-next-line no-console
  console.log(e)
  modalUser.value = false
}
</script>

<template>
  <a-space direction="vertical" :size="20" class="flex">
    <a-space
      direction="horizontal"
      align="center"
      style="
        display: flex;
        justify-content: space-between;
        padding: 15px 0px;
      "
    >
      <a-space
        direction="vertical"
        :size="8"
      >
        <a-typography-title :level="3" style="margin: 0">
          Dashboard
        </a-typography-title>
        <a-typography-text>Kamu bisa menambahkan data user dengan cara klik tambah</a-typography-text>
      </a-space>
      <a-space
        direction="horizontal"
        :size="12"
      >
        <CustomButton
          type-button="add"
          @click="showModal"
        >
          New
        </CustomButton>
      </a-space>
    </a-space>

    <CustomCard>
      <Dashboard />
    </CustomCard>

    <a-modal
      v-model:open="modalUser"
      title="Basic Modal"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </a-space>
</template>
