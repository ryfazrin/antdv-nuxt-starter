<script lang="ts" setup>
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import CustomButton from '../CustomButton.vue'
import CustomChip from '../CustomChip.vue'

interface CustomContainerActionChangeProps {
  text?: string
  onAdd?: () => void
  addText?: string
  addIcon?: boolean
  addDisable?: boolean
  addLoading?: boolean
  onReset?: () => void
  resetText?: string
  onCanceled?: () => void
  canceledText?: string
  onSuccess?: () => void
  successText?: string
  onReject?: () => void
  rejectText?: string
  onApprove?: () => void
  approveText?: string
  rejectLoading?: boolean
  approveLoading?: boolean
  isApproved?: boolean
}

const props = withDefaults(
  defineProps<CustomContainerActionChangeProps>(),
  {
    addDisable: false,
    addIcon: true,
    addLoading: false,
    isApproved: undefined,
  },
)
</script>

<template>
  <a-space
    direction="horizontal"
    align="center"
    style="
      display: flex;
      justify-content: space-between;
      padding: 20px 30px;
      background: #F8F8F8;
      border: 1px solid #F3F4F6;
      border-radius: 10px;
    "
  >
    <a-space
      :size="15"
      align="center"
      style="
        display: flex;
      "
    >
      <ExclamationCircleOutlined />
      <a-typography-text
        style="
          vertical-align: middle;
          font-size: 14px;
          line-height: 22px;
        "
      >
        {{ text }}
      </a-typography-text>
    </a-space>

    <a-space :size="15" align="center">
      <template v-if="onReset">
        <CustomButton
          type-button="secondary"
          :disabled="addLoading"
          @click="onReset"
        >
          {{ resetText || 'reset' }}
        </CustomButton>
      </template>

      <template v-if="onAdd">
        <CustomButton
          type-button="primary"
          :loading="addLoading"
          :disabled="addDisable"
          @click="onAdd"
        >
          {{ addText || 'add' }}
          <PlusOutlined v-if="addIcon" />
        </CustomButton>
      </template>

      <template v-if="onCanceled">
        <CustomButton
          type-button="outline"
          outline-type="ERROR"
          @click="onCanceled"
        >
          {{ canceledText || 'cancel' }}
        </CustomButton>
      </template>

      <template v-if="onSuccess">
        <CustomButton
          type-button="outline"
          outline-type="SUCCESS"
          @click="onSuccess"
        >
          {{ successText || 'save' }}
        </CustomButton>
      </template>

      <template v-if="onReject">
        <CustomButton
          class="button-bg-red-primary"
          :loading="rejectLoading"
          @click="onReject"
        >
          {{ rejectText || 'Reject' }}
        </CustomButton>
      </template>

      <template v-if="onApprove">
        <CustomButton
          class="button-bg-green-primary"
          :loading="rejectLoading"
          @click="onApprove"
        >
          {{ approveText || 'Approve' }}
        </CustomButton>
      </template>

      <template v-if="isApproved !== undefined">
        <CustomChip
          :type-chip="isApproved ? 'SUCCESS' : 'ERROR'"
        >
          {{ isApproved ? 'Approved' : 'Rejected' }}
        </CustomChip>
      </template>
    </a-space>
  </a-space>
</template>

<style lang="scss" scoped></style>
