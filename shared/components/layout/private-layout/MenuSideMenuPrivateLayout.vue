<script lang="ts" setup>
const selectedKeys1 = ref<string[]>(['dashboard'])
const openKeys = ref<string[]>(['sub1'])
</script>

<template>
  <a-menu
    v-model:selectedKeys="selectedKeys1"
    v-model:openKeys="openKeys"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <a-menu-item key="dashboard">
      <nuxt-link href="/">
        <HomeOutlined />
        <a-typography-text>Dashboard</a-typography-text>
      </nuxt-link>
    </a-menu-item>
    <a-menu-item key="basicQuery">
      <nuxt-link href="/basic-query">
        <ThunderboltOutlined />
        <a-typography-text>Basic Query</a-typography-text>
      </nuxt-link>
    </a-menu-item>
    <a-menu-item key="customAntd">
      <nuxt-link href="/custom-antd">
        <SkinOutlined />
        <a-typography-text>Custom Antd</a-typography-text>
      </nuxt-link>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <user-outlined />
          <a-typography-text>Parent</a-typography-text>
        </span>
      </template>
      <a-menu-item key="1">
        <nuxt-link href="/parent/child">
          <a-typography-text>Child</a-typography-text>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <a-typography-text>Child2</a-typography-text>
      </a-menu-item>
      <a-menu-item key="3">
        <a-typography-text>Child3</a-typography-text>
      </a-menu-item>
      <a-menu-item key="4">
        <a-typography-text>Child4</a-typography-text>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style lang="scss" scoped>
.ant-menu {
  padding-bottom: 20px;

  & :deep(li),
  :deep(li div) {
    margin: 0 !important;
    outline: none !important;
  }

  & :deep(li.ant-menu-item),
  :deep(.ant-menu-submenu-title),
  :deep(.ant-menu-item-selected),
  :deep(.ant-menu-submenu-selected .ant-menu-submenu-title) {
    height: fit-content;
    width: calc(100% + 1px);

    & .ant-menu-title-content .ant-typography {
      margin-inline-start: 16px !important;
      margin-right: 16px;
    }

    &:not(.ant-menu-item-only-child) {
      padding: 8px 16px !important;
    }
  }

  & :deep(.ant-menu-submenu.ant-menu-submenu-inline) {
    & .ant-menu-submenu-title {
      min-height: 48px !important;
    }
  }

  &.ant-menu-root > li.ant-menu-item,
  :deep(.ant-menu-item) {
    padding-block: 4px !important;
  }

  /* TODO: banyak kesalahan di selector dan style */
  & :deep(li.ant-menu-item) {
    padding: 4px 16px !important;
  }

  & :deep(.ant-menu-item-group-title) {
    color: #fff;
    position: relative;
    height: 10px;
    margin-top: -5px !important;
    margin-bottom: 5px !important;
  }

  & :deep(.ant-menu-item-selected),
  & :deep(.ant-menu-submenu-selected .ant-menu-submenu-title),
  & :deep(.ant-menu-item-selected .ant-typography),
  & :deep(.ant-menu-submenu-selected .ant-menu-submenu-title .ant-typography) {
    color: #6418c3;

    /* TODO for child parent menu */
    &.ant-menu-item-only-child {
      background: #f8f8f8;
      border-radius: 35% 0px 0px 35%;
      padding: 20px 16px !important;

      &:hover {
        color: #6418c3;
        background: #666cff0d;
      }

      &:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 1px);
        height: 12px;
        background: #fff;
        z-index: 20;
        border-radius: 0px 0px 20px 0px;
      }

      &:after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        width: calc(100% - 1px);
        height: 12px;
        background: #fff;
        z-index: 20;
        margin-top: 68px;
        border-radius: 0px 20px 0px 0px;
      }
    }

    &.ant-menu-item-only-child .point {
      background: transparent;
    }
  }
}
</style>
