<script lang="ts" setup>
// antd
// import type { SelectProps } from 'ant-design-vue'

interface SelectComponentProps {
  isBold: boolean
}

const props = withDefaults(
  // defineProps<SelectComponentProps & SelectProps>(), // maybe SelectProps have bug
  defineProps<SelectComponentProps>(),
  // Props Default value
  {
    // Select Component props
    isBold: false,
  },
)
</script>

<template>
  <a-select v-bind="props">
    <slot />
  </a-select>
</template>

<style lang="scss" scoped>
.ant-select {
  box-shadow: none;

  & :deep(.ant-select-selection-item) {
    font-weight: v-bind('props.isBold ? `500` : `400`');
  }

  & :deep(.ant-select-selector) {
    padding-left: 0px !important;

    &:focus,
    &:active,
    &:focus-within {
      outline: 1px solid rgba(149, 87, 173, 1) !important;
    }

    & :deep(span) {
      inset-inline-start: 16px !important;
    }
  }

  & :deep(.ant-input-prefix) {
    margin-right: 12px;
  }

  & :deep(.ant-select-selection-placeholder) {
    font-weight: 400;
    padding-left: 16px !important;
  }
}

.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(
    .ant-input-affix-wrapper-borderless
  ).ant-input-affix-wrapper:focus,
.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(
    .ant-input-affix-wrapper-borderless
  ).ant-input-affix-wrapper:focus-within {
  outline: 1px solid #ff4d4f !important;
}

.filter-main {
  background-color: #fff;
  width: 100px;
  border-radius: 8px;

  & :deep(.ant-select-selector),
  :deep(input) {
    height: 44px !important;
  }

  & :deep(.ant-select-selection-item) {
    line-height: 44px !important;
  }
}
</style>
