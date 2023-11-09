<script lang="ts" setup>
import type { InputProps } from 'ant-design-vue'
import type { VNodeRef } from 'nuxt/dist/app/compat/capi'
import CustomButton from '../CustomButton.vue'

interface InputFileComponentProps {
  preview?: string | File | any
}

const props = defineProps<InputFileComponentProps & InputProps>()
</script>

<template>
  <label
    :for="props.disabled ? '' : `file-input-form${props.id ? `-${props.id}` : ``}`"
    :style="{
      display: 'flex',
      flexDirection: 'column',
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      ...(props.preview ? { width: 'fit-content' } : {}),
    }"
  >
    <input
      :id="`file-input-form${props.id ? `-${props.id}` : ``}`"
      :ref="$attrs.ref as VNodeRef"
      type="file"
      style="display: none;"
      :name="props.name"
      :disabled="props.disabled"
      :accept="$attrs.accept as string"
      @change="props.onChange"
      @blur="props.onBlur"
    >

    <template v-if="!props.disabled">
      <template v-if="preview">
        <span
          style="
            display: flex;
            align-items: center;
            gap: 20px;
            width: fit-content;
          "
        >
          <img
            :src="preview"
            alt="preview-image"
            width="100"
            height="100"
            style="margin-top: 20px;"
            :title="
              props.value && typeof props.value === 'string'
                ? props.value
                : ''
            "
          >
          <CustomButton
            type-button="outline"
            style="pointer-events: none;"
          >
            Browse
          </CustomButton>
        </span>
      </template>
      <template v-else>
        <span>
          <a-input
            :ref="$attrs.ref as VNodeRef"
            :value="props.value"
            :placeholder="props.placeholder"
            :suffix="h(
              CustomButton,
              {
                typeButton: 'outline',
              },
              'Browse',
            )"
            :disabled="props.disabled"
            readonly
          />
        </span>
      </template>
    </template>
  </label>
</template>

<style lang="scss" scoped>
.ant-input {
  & :deep(.ant-input-affix-wrapper) {
    padding: 8px 16px;

    & input {
      color: #2e65f3;
    }
  }
}
</style>
