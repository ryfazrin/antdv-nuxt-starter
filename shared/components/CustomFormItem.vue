<script lang="ts" setup>
interface CustomFormItemProps {
  topLabel: number
  marginBottom: number
  isLabelFloat: boolean
  isDisabled: boolean
}

const props = withDefaults(
  defineProps<CustomFormItemProps>(),
  {
    topLabel: -12,
    marginBottom: 20,
    isLabelFloat: true,
    isDisabled: false,
  },
)
</script>

<template>
  <a-form-item
    v-bind="props"
  >
    <slot />
  </a-form-item>
</template>

<style lang="scss" scoped>
.ant-form-item {
  padding-top: v-bind('props.isLabelFloat ? "5px" : "30px"');
  position: relative;
  margin-bottom: v-bind('props.marginBottom ? `${props.marginBottom}px` : ""');
  font-weight: 400;

  & :deep(.ant-form-item-label) {
    backdrop-filter: v-bind('props.isDisabled ? "blur(2px)" : "none"');
    bottom: v-bind('props.isLabelFloat ? `${props.topLabel}px` : "-10px"');
    left: v-bind('props.isLabelFloat ? "15px" : "0px"');
    z-index: 2;
    padding: 0px 8px;
    overflow: hidden;

    & label {
      background: v-bind('props.isDisabled ? "none" : "#ffffff"');
      font-size: 14px;
      line-height: 22px;
      color: #6e6e6e;

      &::after {
        display: none;
      }
    }

    & .ant-form-item-required {
      display: flex;
      flex-direction: row-reverse;
      gap: 2px;

      &::before {
        color: #e53935 !important;
        font-size: 14px !important;
        line-height: 12px !important;
        margin-bottom: 10px;
        font-weight: 700;
      }
    }
  }

  & :deep(.ant-form-item-explain) {
    font-size: 12px;
    line-height: 12px;
    z-index: 10;
    margin-bottom: 8px;
    padding: 8px 16px;
  }

  & :deep(.ant-form-item-explain-error) {
    color: #dc3545 !important;
  }

  &.ant-form-item-has-error {
    & .ant-input-affix-wrapper-status-error {
      border-color: #dc3545 !important;
    }

    & .ant-form-item-label label {
      color: #dc3545 !important;
    }
  }

  & :deep(.ant-form-item-control) {
    flex: none;
  }
}
</style>
