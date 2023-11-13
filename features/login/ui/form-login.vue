<script lang="ts" setup>
import useLoginForm from '../composables/useLoginForm'
import ForgotPassword from './components/forgot-password.vue'
import TextRegister from './components/text-register.vue'
import TextWelcomeLogin from './components/text-welcome-login.vue'

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
const { handleLogin, mutationQuery } = useLoginForm()
const { isLoading } = mutationQuery

const onFinish = (values: any) => {
  // console.log('Success:', values)
  handleLogin(values.email, values.password)
}

const onFinishFailed = (errorInfo: any) => {
  // console.log('Failed:', errorInfo)
}

const token = useCookie<number | null>('token')
</script>

<template>
  <a-space
    direction="vertical"
    :size="40"
    style="display: flex; margin-top: 20px;"
  >
    <TextWelcomeLogin />
    <a-space
      direction="vertical"
      :size="0"
      style="display: flex;"
    >
      <a-form
        :model="formState"
        name="basic"
        layout="vertical"
        autocomplete="off"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <CustomFormItem
          label="Email"
          name="email"
          :rules="[{ required: true, message: 'Please input your email!' }]"
        >
          <a-input v-model:value="formState.email" />
        </CustomFormItem>

        <CustomFormItem
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </CustomFormItem>

        <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">
        Remember me
      </a-checkbox>
    </a-form-item> -->

        <ForgotPassword />

        <TextRegister />

        <a-form-item>
          <CustomButton
            type-button="primary"
            :loading="isLoading"
            :spellcheck="true"
            block
            html-type="submit"
          >
            Submit
          </CustomButton>
        </a-form-item>
      </a-form>
    </a-space>
  </a-space>
</template>
