<script lang="ts" setup>
import { SearchOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import CustomButton from './CustomButton.vue'
import InputComponent from './InputComponent.vue'
import { debounce } from '~/utils/debounce'

export interface ButtonInputComponentProps {
  onSearch: (e: any) => void
  placeholder: string
}

const props = defineProps<ButtonInputComponentProps>()

// TODO watch route
const route = useRoute()

const isFocusInput = ref(false)
const inputValue = ref('')

const inputRef = ref<any>()

const onFocusInput = () => {
  // console.log('clicked')
  isFocusInput.value = true
}

const onBlurInput = (e: any) => {
  const value_input = e?.target?.value

  if (!value_input)
    isFocusInput.value = false
}

const onChangeInput = debounce((e: any) => {
  if (e?.target?.value?.length >= 3 || !e?.target?.value?.length) {
    // console.log(e?.target?.value)
    props.onSearch(e)
  }
  /* else {
    onSearch(undefined);
  } */
})

watch(isFocusInput, (newValue) => {
  if (newValue && inputRef.value?.current)
    inputRef.value.current.focus()
})

// TODO watch route effects

// onMounted(() => {
//   // if (route.isReady && route.query.search_param) {
//   if (route && route.query) {
//     isFocusInput.value = true;
//     inputValue.value = String(route.query.search_param)
//     props.onSearch({ target: { value: String(route.query.search_param) } })
//   }
// })
// watch(route, (newRoute, oldRoute) => {
//   if (newRoute.query.search_param !== oldRoute.query.search_param) {
//     inputValue.value = String(newRoute.query.search_param)
//     props.onSearch({ target: { value: String(newRoute.query.search_param) } })
//   }
// })
</script>

<template>
  <template v-if="!isFocusInput">
    <CustomButton
      type-button="search"
      @click="onFocusInput"
    />
  </template>

  <!-- TODO onBlur, onChange, onKeyDown -->
  <template v-if="isFocusInput">
    <InputComponent
      id="search-list-component"
      :ref="inputRef"
      :placeholder="placeholder"
      :title="placeholder"
      :prefix="h(SearchOutlined)"
      :default-value="inputValue"
      style="
        background: #fff;
        height: 44px;
        padding: 10px 10px 10px 16px;
        font-size: 16px;
        line-height: 24px;
      "
      @blur="onBlurInput"
      @change="onChangeInput"
      @keydown.enter="(e: any) => props.onSearch(e)"
    />
  </template>
</template>

<style lang="scss" scoped></style>
