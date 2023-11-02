<script lang="ts" setup>
import { Button } from 'ant-design-vue'
import type { ColumnsType, TableProps } from 'ant-design-vue/es/table'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import useGetList from '../composables/useGetList'
import useDeleteUser from '../composables/useDeleteUser'

const props = defineProps<{ handleOpenModal: (data: any) => void }>()

// Query
const {
  fetchQuery,
  dataModified,
  handlePageChange,
  handleChangePageSize,
  total,
} = useGetList()

const { isLoading, data } = fetchQuery

const { handleOnDelete } = useDeleteUser()

// Func
const onChangeTable: TableProps<any>['onChange'] = (
  pagination,
) => {
  handlePageChange(pagination.current || 1)
}

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
  <CustomTable
    :loading="isLoading"
    :columns="columns"
    :data-source="dataModified"
    :default-page-size="[6, 10, 12]"
    :total="total"
    @change="onChangeTable"
    @change-page-size="handleChangePageSize"
  />
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
</template>
