<script lang="ts" setup>
import { type Slot } from 'vue'
import { type CardProps } from 'ant-design-vue'

const props = defineProps<{ bodyPadding?: string } & CardProps>()
const slots = defineSlots<{
  extra: Slot
}>()
</script>

<template>
  <a-card v-bind="props">
    <template
      v-for="(slotContent, slotName) in slots"
      #[slotName]
      :key="slotName"
    >
      <slot v-if="!!slotContent" :name="slotName" />
    </template>
  </a-card>
</template>

<style lang="scss" scoped>
.ant-card {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  & :deep(.ant-card-body) {
    padding: v-bind('props.bodyPadding || `24px`');
  }
}
</style>
