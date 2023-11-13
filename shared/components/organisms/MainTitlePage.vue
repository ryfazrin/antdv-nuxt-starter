<script lang="ts" setup>
import { theme } from 'ant-design-vue'
import { ArrowLeftOutlined } from '@ant-design/icons-vue'
import { type ButtonInputComponentProps } from '../ButtonInputComponent.vue'
import ButtonInputComponent from '../ButtonInputComponent.vue'
import FilterStatusMain from '../FilterStatusMain.vue'
import CustomButton from '../CustomButton.vue'

interface TypeTitle1 {
  title?: string
  description: string
}

// eslint-disable-next-line vue/no-dupe-keys
interface downloadArr {
  title: string
  func: () => void
  isLoading?: boolean
}

interface hiddenDownloadRefType {
  ref: any
}

interface MainTitlePageProps {
  typeTitle?: 1 | 2
  title1?: TypeTitle1
  title2?: string
  filter?: VNode
  actionComponent?: VNode
  search?: (() => void) | ButtonInputComponentProps
  add?: () => void
  addTitle?: string
  addIcon?: boolean
  addLoading?: boolean
  downloadArr?: downloadArr[]
  hiddenDownloadRef?: hiddenDownloadRefType
  download?: () => void
  downloadTitle?: string
  type2Func?: () => void
  // eslint-disable-next-line no-unused-vars
  filterStatus?: (e: any) => void
}

const props = withDefaults(
  defineProps<MainTitlePageProps>(),
  {
    typeTitle: 1,
    addIcon: true,
    addLoading: false,
  },
)

// TODO: defaultTitle, handleBackType2

const {
  token,
} = theme.useToken()
const { colorTextSecondary } = token.value

// const defaultTitle = computed(() => {
//   const path_ = pathname?.split('/');

//   return path_[path_.length - 1]
//     ?.replace(/-/g, ' ')
//     ?.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
// })

// const handleBackType2 = () => {
//   const pathname_ = pathname.split('/');
//   const regex = new RegExp(`\/${pathname_[pathname_.length - 1]}$`, 'i');

//   push({
//     pathname: pathname.replace(regex, ''),
//   });
// };
</script>

<template>
  <a-space
    direction="horizontal"
    align="center"
    style="
      display: flex;
      justify-content: space-between;
      padding: 15px 0px;
    "
  >
    <a-space
      v-if="typeTitle === 1"
      :size="8"
      direction="vertical"
      style="
        display: flex;
      "
    >
      <a-typography-title
        :level="3"
        style="
          margin: 0;
        "
      >
        <!-- TODO -->
        <!-- {{ title1?.title ? title1?.title : defaultTitle }} -->
        {{ title1?.title ? title1?.title : 'Default Title' }}
      </a-typography-title>

      <a-typography-text
        v-if="title1?.description"
        :style="{
          color: colorTextSecondary,
        }"
      >
        {{ title1?.description }}
      </a-typography-text>
    </a-space>

    <a-space
      v-if="typeTitle === 2"
      direction="horizontal"
      align="center"
      :size="40"
      style="
        display: flex;
        cursor: pointer;
        width: fit-content;
        user-select: none;
        text-transform: capitalize;
      "
      @click="type2Func ? type2Func : () => console.log('handleBackType2')"
    >
      <!-- TODO -->
      <!-- @click="type2Func ? type2Func : handleBackType2" -->
      <ArrowLeftOutlined ref="icon" style="font-size: 18; margin-top: -2px;" />

      <a-typography-title :level="3" style="margin: 0;">
        <!-- TODO -->
        <!-- {{ title2 ? title2 : defaultTitle }} -->
        {{ title2 ? title2 : 'Default Title' }}
      </a-typography-title>
    </a-space>

    <a-space
      direction="horizontal"
      :size="12"
    >
      <template v-if="downloadArr">
        <CustomButton
          v-for="(v, i) in downloadArr"
          :key="i"
          type-button="download"
          :loading="v.isLoading"
          @click="v.func"
        >
          {{ v.title }}
        </CustomButton>
      </template>

      <a
        v-if="hiddenDownloadRef"
        :ref="hiddenDownloadRef?.ref"
        hidden
      />

      <ButtonInputComponent
        v-if="search"
        :placeholder="typeof search === 'function' ? '' : search.placeholder"
        @search="typeof search === 'function' ? () => console.log('tes') : search.onSearch"
      />

      <FilterStatusMain
        v-if="filterStatus"
        @change-status="filterStatus"
      />

      <CustomButton v-if="filter" type-button="filter" />

      <CustomButton
        v-if="add"
        :type-button="addIcon ? 'add' : 'primary'"
        :loading="addLoading"
        @click="add"
      >
        {{ addTitle ? addTitle : `New` }}
      </CustomButton>

      <CustomButton
        v-if="download"
        type-button="download"
        @click="add"
      >
        {{ downloadTitle ? downloadTitle : `Download` }}
      </CustomButton>
    </a-space>
  </a-space>
</template>

<style lang="scss" scoped></style>
