<script lang="ts" setup>
import { Button } from 'ant-design-vue'
import type { ColumnsType } from 'ant-design-vue/es/table'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import useGetList from '../composables/useGetList'
import useDeleteUser from '../composables/useDeleteUser'

const props = defineProps<{ handleOpenModal: (data: any) => void }>()

// Query
const {
  fetchQuery,
  dataModified,
  handlePageChange,
} = useGetList()

const { isLoading, data } = fetchQuery

const { handleOnDelete } = useDeleteUser()

// Func
const showDeleteConfirm = (id: number) => {
  Modal.confirm({
    title: 'Are you sure delete this task?',
    icon: h(ExclamationCircleOutlined),
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      handleOnDelete(id)
    },
    onCancel() {
      // eslint-disable-next-line no-console
      console.log('Cancel')
    },
  })
}

// Columns
const columns: ColumnsType<any> = [
  {
    title: 'Action',
    key: 'action',
    width: '128px',
    customRender({ record }) {
      return h('div', [
        h(Button,
          {
            onClick: () => showDeleteConfirm(record.id),
          },
          h(DeleteOutlined),
        ),
        h(
          Button, {
            onClick: () => props.handleOpenModal(record),
          },
          h(EditOutlined),
        ),
      ])
    },
  },
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
]
</script>

<template>
  <a-table
    :loading="isLoading"
    :columns="columns"
    :data-source="dataModified"
    :pagination="{
      total: data?.total,
      pageSize: data?.per_page,
      onChange(page, pageSize) {
        handlePageChange(page)
      },
    }"
  >
    <!-- <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <a-popconfirm
          title="Are you sure delete this task?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a-button>
            <DeleteOutlined />
          </a-button>
        </a-popconfirm>
        <a-button>
          <EditOutlined />
        </a-button>
      </template>
    </template> -->
  </a-table>
</template>
