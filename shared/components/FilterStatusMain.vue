<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue/es/select'
import SelectComponent from './SelectComponent.vue'

interface FilterStatusMainProps {
  onChangeStatus: (e: any) => void
}

const props = defineProps<FilterStatusMainProps>()

const valueStatus = ref(2)
const options = ref<SelectProps['options']>([
  {
    label: 'All',
    value: 2,
  },
  {
    label: 'Active',
    value: 1,
  },
  {
    label: 'Inactive',
    value: 0,
  },
])

const handleChange = (value: any) => {
  valueStatus.value = value
  props.onChangeStatus(value === 2 ? undefined : Boolean(value))
}
</script>

<template>
  <SelectComponent
    v-model:value="valueStatus"
    placeholder="-- Choose Status --"
    option-filter-prop="children"
    :options="options"
    title="Choose Status"
    show-search
    style="height: 44px"
    class="filter-main"
    @change="handleChange"
  />
</template>

<style lang="scss" scoped></style>
