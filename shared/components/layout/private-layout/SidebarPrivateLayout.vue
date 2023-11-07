<script lang="ts" setup>
import { theme } from 'ant-design-vue'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import MenuSideMenuPrivateLayout from './MenuSideMenuPrivateLayout.vue'
import { COLORS } from '~/shared/styles/color'

const props = defineProps<{
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}>()

const {
  token: { value },
} = theme.useToken()
const { colorBgContainer } = value
</script>

<template>
  <a-layout-sider
    :width="260"
    class="text-xs"
    :style="{
      background: colorBgContainer,
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 10,
      padding: '20px 0px 10px 25px',
      userSelect: 'none',
    }"
    theme="light"
    collapsible
    :collapsed="collapsed"
    :collapsed-width="100"
    :trigger="null"
  >
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-block-end: 16px;
        margin-inline-end: 16px;
      "
    >
      <NuxtImg
        v-if="collapsed"
        src="https://dummyimage.com/35x35/67348D/fff&text=Dummy-Logo"
        alt="logo-cms"
        :width="35"
        :height="35"
        :quality="100"
      />
      <NuxtImg
        v-else
        src="https://dummyimage.com/160x40/67348D/fff&text=Dummy-Logo"
        alt="logo-cms"
        :width="160"
        :height="40"
        :quality="100"
      />
      <!-- BUTTON COLLAPSE -->
      <span>
        <a-button
          type="text"
          size="small"
          :icon="
            collapsed
              ? h(DoubleRightOutlined, {
                style: { color: COLORS.PRIMARY },
              })
              : h(DoubleLeftOutlined, {
                style: { color: COLORS.PRIMARY },
              })
          "
          style="font-size: 16px;"
          @click="() => setCollapsed(!collapsed)"
        />
      </span>
    </div>
    <MenuSideMenuPrivateLayout />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.ant-layout-sider {
  scrollbar-color: #bebfcf #f8f8f8;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.5vw;
    height: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bebfcf;
    border-radius: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f8f8f8;
  }
}
</style>
