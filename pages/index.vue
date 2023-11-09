<script lang="ts" setup>
import { Form } from 'ant-design-vue'
import useCreateUser from '~/features/dashboard/composables/useCreateUser'
import useEditUser from '~/features/dashboard/composables/useEditUser'
import Dashboard from '~/features/dashboard/ui/index.vue'
import CustomContainerActionChange from '~/shared/components/organisms/CustomContainerActionChange.vue'
import MainTitlePage from '~/shared/components/organisms/MainTitlePage.vue'

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
  mutationQuery: { isLoading: isLoadingCreate },
} = useCreateUser()

// Query Edit
const {
  handleEdit,
  mutationQuery: { isLoading: isLoadingEdit },
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

const handleOnReset = () => {
  dataTable.value = undefined
  formState.value = {
    name: '',
    job: '',
  }
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
    <MainTitlePage
      :type-title="1"
      :title1="{
        title: 'Users',
        description: 'Kamu bisa menambahkan data user dengan cara klik tambah',
      }"
      :search="{
        onSearch: (e) => console.log(e),
        placeholder: 'Search User name',
      }"
      :filter-status="() => console.log('setStatus state')"
      :add="() => showModal(undefined)"
      add-title="New User"
    />

    <CustomCard>
      <Dashboard :handle-open-modal="showModal" />
    </CustomCard>

    <a-modal
      v-model:open="modalUser"
      :title="`${dataTable ? 'Edit' : 'Create New'} User`"
      :width="700"
      :footer="null"
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
        autocomplete="off"
        layout="vertical"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <!-- layout="vertical" -->
        <CustomFormItem
          label="Name"
          name="name"
          :rules="[{ required: true, message: 'Please input your Name!' }]"
        >
          <a-input v-model:value="formState.name" />
        </CustomFormItem>
        <CustomFormItem
          label="Job"
          name="job"
          :rules="[{ required: true, message: 'Please input your Job!' }]"
        >
          <a-input v-model:value="formState.job" />
        </CustomFormItem>

        <CustomContainerActionChange
          text="Kamu bisa menambahkan data disini dengan mengklik save."
          add-text="save"
          :add-icon="false"
          :add-loading="isLoadingCreate || isLoadingEdit"
          reset-text="Reset"
          @add="handleOnSubmit"
          @reset="handleOnReset"
        />
      </a-form>
    </a-modal>
  </a-space>
</template>
