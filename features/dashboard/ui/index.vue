<script lang="ts" setup>
import type { ColumnsType, TableProps } from 'ant-design-vue/es/table'
import useGetList from '../composables/useGetList'
import useDeleteUser from '../composables/useDeleteUser'
import ButtonAction from '~/shared/components/ButtonAction.vue'

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

// Columns
const columns: ColumnsType<any> = [
  {
    title: 'Action',
    key: 'action',
    width: '128px',
    customRender({ record }) {
      return h('div', {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5em',
        },
      }, [
        h(ButtonAction,
          {
            typeAction: 'remove',
            onDelete: () => handleOnDelete(record.id),
          },
        ),
        h(
          ButtonAction,
          {
            typeAction: 'edit',
            onClick: () => props.handleOpenModal(record),
          },
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
