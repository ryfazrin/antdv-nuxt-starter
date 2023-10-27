<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue'
import type { SelectValue } from 'ant-design-vue/es/select'

const value1 = ref('lucy')
const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
])
const focus = () => {
  console.log('focus')
}

const handleChange = (value: SelectValue) => {
  console.log(`selected ${value}`)
}
</script>

<template>
  <div>
    <SelectComponent
      ref="select"
      v-model:value="value1"
      style="width: 120px"
      :options="options1"
      @focus="focus"
      @change="handleChange"
    />
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 120px"
      :options="options1"
      @focus="focus"
      @change="handleChange"
    />
    <CustomCard body-padding="10px" class="m-5" style="width: 500px;">
      <template #cover>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the description">
        <template #avatar>
          <a-avatar src="https://joeschmoe.io/api/v1/random" />
        </template>
      </a-card-meta>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores at rem culpa quaerat possimus dolorum nihil quisquam quia inventore enim autem aut, non debitis facere ipsa expedita quam delectus.</p>
    </CustomCard>
    <CustomChip>test</CustomChip>
    <CustomButton>Hai</CustomButton>
  </div>
</template>
