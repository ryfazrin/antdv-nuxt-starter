<script lang="ts" setup>
import type { ColumnsType } from 'ant-design-vue/es/table'
import { Button, Popconfirm } from 'ant-design-vue'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons-vue'
import useGetList from '../composables/useGetList'

// Query
const {
  fetchQuery,
  dataModified,
  handlePageChange,
} = useGetList()

const { isLoading, data } = fetchQuery

// Func
const confirm = (e: MouseEvent) => {
  // eslint-disable-next-line no-console
  console.log(e)
  message.success('Click on Yes')
}

const cancel = (e: MouseEvent) => {
  // eslint-disable-next-line no-console
  console.log(e)
  message.error('Click on No')
}

// Columns
const columns: ColumnsType<any> = [
  {
    title: 'Action',
    key: 'action',
    width: '128px',
    customRender({ record }) {
      return h(
        'div',
        [
          h(
            Popconfirm,
            {
              title: `Are you sure delete this task ${record.first_name}?`,
              okText: 'Yes',
              cancelText: 'No',
              onConfirm: confirm,
              onCancel: cancel,
            },
            h(Button, h(DeleteOutlined)),
          ),
          h(Button, h(EditOutlined)),
        ],
      )
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
