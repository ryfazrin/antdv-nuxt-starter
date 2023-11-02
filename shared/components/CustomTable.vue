<script lang="ts" setup>
import { CaretDownOutlined } from '@ant-design/icons-vue'
import { Select, Table } from 'ant-design-vue'
// import type { TableProps } from 'ant-design-vue'

interface CustomTableProps {
  defaultPageSize: number[]
  total?: number
  onChangePageSize?: (e: number) => void
  // xScroll?: number
  pageSizes?: number
  pages?: number
}

const props = withDefaults(defineProps<CustomTableProps>(), {
  defaultPageSize: () => [10, 20, 50, 100],
})

const pageSize = ref(props.defaultPageSize[0])

const handleChangePageSize = (pageSize_: number) => {
  // console.log(pageSize_)
  pageSize.value = pageSize_

  props.onChangePageSize && props.onChangePageSize(pageSize_)
}

watch(props.pageSizes, (newValue: any) => {
  if (newValue && newValue !== pageSize.value)
    pageSize.value = newValue
})
</script>

<template>
  <Table
    v-bind="props"
    :scroll="{
      y: 300,
      scrollToFirstRowOnChange: true,
    }"
    :pagination="{
      showTotal(total, range) {
        return h(
          'div',
          {
            style: {
              display: 'flex',
              gap: '35px',
            },
          },
          [
            h('p', `${range[0]}-${range[1]} of ${total} items`),
            h('div', [
              'Rows per page: ',
              h(Select, {
                showSearch: true,
                defaultValue: props.defaultPageSize[0],
                value: pageSize,
                onChange(value, option) {
                  handleChangePageSize(Number(value));
                },
                options: props.defaultPageSize.map((x) => ({
                  value: x,
                  label: x,
                })),
                suffixIcon: h(CaretDownOutlined),
              }),
            ]),
          ],
        );
      },
      pageSize,
      ...(total ? { total } : {}),
      ...(pages ? { current: pages } : {}),
    }"
  />
  <!-- <a-pagination v-model:current="current" :total="50" show-less-items /> -->
</template>

<style lang="scss" scoped>
.ant-table-wrapper {
  & :deep(.ant-table) {
    & .ant-table-content {
      scrollbar-color: #bebfcf #f8f8f8;
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #6e6e6e;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: #d9d9d9;
      }
    }

    & .ant-table-thead {
      & tr {
        & td {
          display: none;
        }

        & th {
          background: #f7f5f8;
          border-bottom: none;
          padding: 16px 16px 16px 20px;
          color: #6e6e6e;

          &:first-of-type {
            border-radius: 30px 0px 0px 30px !important;
          }

          &:last-of-type {
            border-radius: 0px 30px 30px 0px !important;

            &:before {
              width: 0px !important;
            }
          }

          &:before {
            width: 2px !important;
          }
        }
      }

      & .ant-table-cell.ant-table-cell-scrollbar {
        border-radius: 0px 30px 30px 0px !important;
        background: #f7f5f8;
        box-sizing: none;
      }
    }

    & .ant-table-tbody {
      scrollbar-color: #bebfcf #f8f8f8;
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #6e6e6e;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: #d9d9d9;
      }

      & tr td {
        padding: 16px 16px 16px 20px;
      }
    }
  }

  & :deep(.ant-pagination) {
    & .ant-pagination-item-active {
      border: none;
      background: #f7f5f8;
      border-radius: 50%;
      font-weight: 400;

      & a {
        color: #212121 !important;
      }
    }

    & .ant-table-pagination {
      position: relative;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 0px !important;

      & .ant-pagination-total-text {
        position: absolute;
        left: 0;
        top: 0;

        & .ant-select-selector {
          border: none;
          box-shadow: none;
          font-size: 14px;
          line-height: 22px;

          &:focus,
          &:hover,
          &:active {
            border: none !important;
            box-shadow: none !important;
          }
        }
      }

      & .ant-pagination-options {
        display: none;
      }
    }
  }
}
</style>
