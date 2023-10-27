<script lang="ts" setup>
interface InputPasswordComponentProps {
  isBold: boolean
}

const props = withDefaults(
  defineProps<InputPasswordComponentProps>(),
  // Props Default value
  {
    // Input Password Component props
    isBold: false,
  },
)
</script>

<template>
  <a-input-password v-bind="props" />
</template>

<style lang="scss" scoped>
.ant-input-password {
  padding-left: 16px;
  font-weight: v-bind('props.isBold ? `500` : `400`');

  & input {
    font-weight: v-bind('props.isBold ? `500` : `400`');
    position: relative;
    padding-left: 16px;

    &::placeholder {
      font-weight: 400;
    }
  }

  &:focus:not(.ant-input-disabled),
  &:active:not(.ant-input-disabled),
  &:focus-within:not(.ant-input-disabled) {
    outline: 1px solid rgba(149, 87, 173, 1) !important;
  }

  & :deep(.ant-form-item-control-input-content) {
    &:focus:not(.ant-input-disabled),
    &:active:not(.ant-input-disabled),
    &:focus-within:not(.ant-input-disabled) {
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
