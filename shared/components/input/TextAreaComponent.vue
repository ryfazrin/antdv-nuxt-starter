<script lang="ts" setup>
// import type { TextAreaProps } from 'ant-design-vue';

interface TextAreaComponentProps {
  heightTa: number
  isBold: boolean
}

const props = withDefaults(
  defineProps<TextAreaComponentProps>(),
  // Props Default value
  {
    // TextArea Component props
    heightTa: 145,
    isBold: false,
  },
)
</script>

<template>
  <a-textarea v-bind="props" />
</template>

<style lang="scss" scoped>
.ant-input {
  padding-left: 16px;
  font-weight: v-bind('props.isBold ? `500` : `400`');
  min-height: v-bind('`${props.heightTa}px`') !important;

  & textarea {
    font-weight: v-bind('props.isBold ? `500` : `400`');

    &::placeholder {
      font-weight: 400;
    }
  }

  &:focus,
  &:active,
  &:focus-within {
    outline: 1px solid rgba(149, 87, 173, 1) !important;
  }

  & :deep(.ant-form-item-control-input-content) {
    &:focus,
    &:active,
    &:focus-within {
      outline: 1px solid rgba(149, 87, 173, 1) !important;
    }
  }

  & :deep(.ant-input-prefix) {
    margin-right: 12px;
  }

  box-shadow: none;

  &::placeholder {
    font-weight: 400;
  }

  &.ant-input-affix-wrapper-status-error:not(
    .ant-input-affix-wrapper-disabled
  ):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-status-error:not(
    .ant-input-affix-wrapper-disabled
  ):not(
    .ant-input-affix-wrapper-borderless
  ).ant-input-affix-wrapper:focus-within {
    outline: 1px solid #ff4d4f !important;
  }
}
</style>
