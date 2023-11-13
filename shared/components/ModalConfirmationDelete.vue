<script lang="ts" setup>
import { h } from 'vue'
import { Space } from 'ant-design-vue'
import ModalComponent from './ModalComponent.vue'
import CustomButton from './CustomButton.vue'

interface ModalConfirmationProps {
  isOpen: boolean
  onClose: (is_confirm: boolean) => void
  title: any
  typeModal?: 'error' | 'refresh'
}

const props = withDefaults(
  defineProps<ModalConfirmationProps>(),
  // Props Default value
  {
    // ModalConfirmationProps
    typeModal: 'error',
  },
)
</script>

<template>
  <ModalComponent
    :open="props.isOpen"
    :title="props.title"
    :width="520"
    :is-border-bottom="false"
    :footer="
      h(
        Space,
        {
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '76px',
            background: '#F8F8F8',
            borderRadius: '0 0 8px 8px',
            rowGap: '12px',
          },
        },
        [
          h(
            CustomButton,
            {
              typeButton: 'outline',
              outlineType: props.typeModal === 'error' ? 'ERROR' : 'PRIMARY',
              isInverted: true,
              onClick: () => props.onClose(false),
              style: { color: '#000' },
            },
            ['Cancel'],
          ),
          h(
            CustomButton,
            {
              typeButton: 'outline',
              outlineType: props.typeModal === 'error' ? 'ERROR' : 'PRIMARY',
              onClick: () => props.onClose(true),
              style: { marginRight: '16px', color: '#fff' },
            },
            [props.typeModal === 'error' ? 'DELETE' : 'Yes'],
          ),
        ],
      )
    "
    @cancel="() => props.onClose(false)"
  >
    <a-space direction="vertical" :size="0" style="display: flex">
      <a-typography-text>Are you sure you want to continue?</a-typography-text>
    </a-space>
  </ModalComponent>
</template>

<style lang="scss" scoped></style>
