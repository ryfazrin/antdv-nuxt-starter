<script lang="ts" setup>
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import CustomButton from './CustomButton.vue'
import ModalConfirmationDelete from './ModalConfirmationDelete.vue'
import { COLORS } from '~/shared/styles/color'

interface ButtonActionProps {
  typeAction: 'display' | 'edit' | 'remove' | 'manage' | 'refresh'
  iconOnly?: boolean
  onDelete?: () => void
  onRefresh?: () => void
}

const props = withDefaults(
  defineProps<ButtonActionProps>(),
  // Props Default value
  {
    // ButtonActionProps
    iconOnly: false,
  },
)

const TYPE_BUTTON_ACTION = {
  display: {
    0: h(EyeOutlined, { style: { color: COLORS.SECONDARY } }),
    1: h(EyeOutlined, { style: { color: COLORS.PRIMARY } }),
    title: 'display',
  },
  edit: {
    0: h(EditOutlined, { style: { color: COLORS.SECONDARY } }),
    1: h(EditOutlined, { style: { color: COLORS.WARNING } }),
    title: 'edit',
  },
  remove: {
    0: h(DeleteOutlined, { style: { color: COLORS.SECONDARY } }),
    1: h(DeleteOutlined, { style: { color: COLORS.ERROR } }),
    title: 'delete',
  },
  manage: {
    0: h(SettingOutlined, { style: { color: COLORS.SECONDARY } }),
    1: h(SettingOutlined, { style: { color: COLORS.PRIMARY } }),
    title: 'manage',
  },
  refresh: {
    0: h(ReloadOutlined, { style: { color: COLORS.SECONDARY } }),
    1: h(ReloadOutlined, { style: { color: COLORS.PRIMARY } }),
    title: 'change status',
  },
}

const hover = ref<0 | 1>(0)
const openConfirmationDelete = ref<boolean>(false)
const openConfirmationRefresh = ref<boolean>(false)

const onHover = () => {
  hover.value = 1
}

const onBlur = () => {
  hover.value = 0
}

const onOpenConfirmationDelete = () => {
  // console.log('open delete')
  openConfirmationDelete.value = true
}

const onConfirmationDelete = (isConfirm: boolean) => {
  openConfirmationDelete.value = false
  if (isConfirm)
    props.onDelete && props.onDelete()
}

const onOpenConfirmationRefresh = () => {
  // console.log('refresh')
  openConfirmationRefresh.value = true
}

const onConfirmationRefresh = (isConfirm: boolean) => {
  openConfirmationRefresh.value = false
  if (isConfirm)
    props.onRefresh && props.onRefresh()
}

const handleButtonClick = () => {
  if (props.typeAction === 'remove' && props.onDelete)
    onOpenConfirmationDelete()

  else if (props.typeAction === 'refresh' && props.onRefresh)
    onOpenConfirmationRefresh()
}
</script>

<template>
  <div>
    <CustomButton
      v-bind="props"
      type-button="outline"
      :title="TYPE_BUTTON_ACTION[props.typeAction].title"
      :icon="TYPE_BUTTON_ACTION[props.typeAction][hover]"
      @click="handleButtonClick"
      @pointerenter="onHover"
      @pointerleave="onBlur"
    >
      <template v-if="props.typeAction === 'manage' && !$slots.default">
        Manage Permission
      </template>
      <template v-else>
        <slot />
      </template>
    </CustomButton>

    <!-- TODO Modal delete -->
    <ModalConfirmationDelete
      v-model:is-open="openConfirmationDelete"
      :title="TYPE_BUTTON_ACTION.remove['1']"
      @close="onConfirmationDelete"
    />

    <!-- TODO Modal refresh -->
    <ModalConfirmationDelete
      v-model:is-open="openConfirmationRefresh"
      type-modal="refresh"
      :title="TYPE_BUTTON_ACTION.refresh['1']"
      @close="onConfirmationRefresh"
    />
    <!-- :title="
        h(
          Space,
          {
            size: 16
          },
          [TYPE_BUTTON_ACTION['remove']['1'], 'Delete / Change Status']
        )
      " -->
  </div>
</template>

<style lang="scss" scoped></style>
