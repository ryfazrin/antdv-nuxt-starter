<script lang="ts" setup>
import useLoginForm from '../composables/useLoginForm.ts'

definePageMeta({
  layout: 'auth-layout',
})

interface FormState {
  email: string
  password: string
  remember: boolean
}

const formState = ref<FormState>({
  email: '',
  password: '',
  remember: true,
})

// Query
const { handleLogin } = useLoginForm()

const onFinish = (values: any) => {
  console.log('Success:', values)
  handleLogin(values.email, values.password)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const token = useCookie<number | null>('token')
</script>

<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
    >
      <a-input v-model:value="formState.email" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">
        Remember me
      </a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>
