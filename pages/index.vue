<script lang="ts" setup>
import { Form } from 'ant-design-vue'
import useCreateUser from '~/features/dashboard/composables/useCreateUser'
import useEditUser from '~/features/dashboard/composables/useEditUser'
import Dashboard from '~/features/dashboard/ui/index.vue'

const useForm = Form.useForm

const dataTable = ref<any>()

interface FormState {
  name: string
  job: string
}

const formState = ref<FormState>({
  name: '',
  job: '',
})

const modalUser = ref<boolean>(false)

const showModal = (data?: any) => {
  modalUser.value = true

  if (data) {
    dataTable.value = data

    formState.value = {
      name: data.first_name,
      job: 'Edited job',
    }
  }
}

const handleCancelModal = () => {
  dataTable.value = undefined
  formState.value = {
    name: '',
    job: '',
  }
  modalUser.value = false
}

/**
 * FORM
 */

// Query
const {
  handleCreate,
  // mutationQuery: { isLoading: isLoadingCreate },
} = useCreateUser()

// Query Edit
const {
  handleEdit,
  // mutationQuery: { isLoading: isLoadingEdit }
} = useEditUser()

const { resetFields, validate } = useForm(formState)

const handleOnSubmit = (e: MouseEvent) => {
  validate()
    .then(() => {
      if (dataTable.value) {
        handleEdit({
          data: {
            name: formState.value.name,
            job: formState.value.job,
          },
          id: dataTable.value.id,
        })
      }
      else {
        handleCreate(formState.value.name, formState.value.job)
      }
      dataTable.value = undefined
      formState.value = {
        name: '',
        job: '',
      }
    })
    .catch((err: any) => {
      // eslint-disable-next-line no-console
      console.log('error', err)
    })

  modalUser.value = false
}

const onFinish = (values: any) => {
  // eslint-disable-next-line no-console
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  // eslint-disable-next-line no-console
  console.log('Failed:', errorInfo)
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
          @click="() => showModal(undefined)"
        >
          New
        </CustomButton>
      </a-space>
    </a-space>

    <CustomCard>
      <Dashboard :handle-open-modal="showModal" />
    </CustomCard>

    <a-modal
      v-model:open="modalUser"
      :title="`${dataTable ? 'Edit' : 'Create New'} User`"
      :width="700"
      @ok="handleOnSubmit"
      @cancel="handleCancelModal"
    >
      <a-space
        direction="vertical"
        :size="0"
        style="display: flex;"
      />
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Name"
          name="name"
          :rules="[{ required: true, message: 'Please input your Name!' }]"
        >
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item
          label="Job"
          name="job"
          :rules="[{ required: true, message: 'Please input your Job!' }]"
        >
          <a-input v-model:value="formState.job" />
        </a-form-item>

        <!-- <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item> -->
      </a-form>
    </a-modal>
  </a-space>
</template>
