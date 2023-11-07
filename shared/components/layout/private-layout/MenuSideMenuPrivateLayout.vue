<script lang="ts" setup>
const selectedKeys1 = ref<string[]>(['dashboard'])
const openKeys = ref<string[]>(['sub2'])
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
        <HomeOutlined /> Dashboard
      </nuxt-link>
    </a-menu-item>
    <a-menu-item key="basicQuery">
      <nuxt-link href="/basic-query">
        <ThunderboltOutlined /> Basic Query
      </nuxt-link>
    </a-menu-item>
    <a-menu-item key="customAntd">
      <nuxt-link href="/custom-antd">
        <SkinOutlined /> Custom Antd
      </nuxt-link>
    </a-menu-item>
    <a-menu-item key="about">
      <nuxt-link href="/about">
        <ProfileOutlined /> About
      </nuxt-link>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <AlertOutlined />
          Test
        </span>
      </template>
      <a-menu-item key="1">
        <nuxt-link href="/test/hasil">
          Hasil
        </nuxt-link>
      </a-menu-item>
    </a-sub-menu>
    <!-- <a-sub-menu key="sub2">
      <template #title>
        <span>
          <user-outlined />
          subnav 1
        </span>
      </template>
      <a-menu-item key="1">
        option1
      </a-menu-item>
      <a-menu-item key="2">
        option2
      </a-menu-item>
      <a-menu-item key="3">
        option3
      </a-menu-item>
      <a-menu-item key="4">
        option4
      </a-menu-item>
    </a-sub-menu> -->
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

    & .ant-menu-title-content {
      margin-inline-start: 16px !important;
      margin-right: 16px;
    }

    &:not(.ant-menu-item-only-child) {
      padding: 8px 16px !important;
    }
  }

  & :deep(.ant-menu-submenu.ant-menu-submenu-inline .ant-menu-submenu-title) {
    min-height: 48px !important;
  }

  &.ant-menu-root > li.ant-menu-item,
  :deep(.ant-menu-item) {
    padding-block: 4px !important;
  }

  &.ant-menu-inline-collapsed {
    & :deep(li.ant-menu-item),
    :deep(.ant-menu-submenu-title),
    :deep(.ant-menu-item-selected) {
      padding: 4px 16px !important;
    }

    & :deep(.ant-menu-item-group-title) {
      color: #fff;
      position: relative;
      height: 10px;
      margin-top: -5px !important;
      margin-bottom: 5px !important;

      &:before {
        content: " ";
        position: absolute;
        top: 50%;
        left: 10px;
        width: 38px;
        height: 2px;
        background: #e2e1e6;
      }
    }

    & :deep(li.ant-menu-item-selected),
    :deep(.ant-menu-submenu-selected > .ant-menu-submenu-title) {
      &:not(.ant-menu-item-selected.ant-menu-item-only-child) {
        padding: 20px 16px 10px !important;
      }
    }
  }

  /* TODO: banyak kesalahan di selector dan style */
}
</style>
