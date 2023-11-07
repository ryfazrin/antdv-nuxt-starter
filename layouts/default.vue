<script lang="ts" setup>
import AntdConfig from '~/shared/styles/AntdConfig.vue'
import HeaderContentPrivateLayout from '~/shared/components/layout/private-layout/HeaderContentPrivateLayout.vue'
import FooterContentPrivateLayout from '~/shared/components/layout/private-layout/FooterContentPrivateLayout.vue'
import SidebarPrivateLayout from '~/shared/components/layout/private-layout/SidebarPrivateLayout.vue'

const collapsed = ref(false)

const setCollapsed = (newCollapsed: boolean) => {
  collapsed.value = newCollapsed
}
</script>

<template>
  <AntdConfig>
    <a-layout has-sider>
      <SidebarPrivateLayout
        :collapsed="collapsed"
        :set-collapsed="setCollapsed"
      />

      <a-layout
        :style="{
          background: '#f8f8f8',
          minHeight: '100vh',
          marginLeft: collapsed ? '100px' : '260px',
        }"
      >
        <a-layout-content
          :style="{
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
          }"
        >
          <!-- HEADER -->
          <HeaderContentPrivateLayout />

          <!-- CONTENT -->
          <div
            style="
              padding: 20px 30px;
              min-height: calc(100vh - 132px);
            "
          >
            <slot />
          </div>

          <!-- FOOTER -->
          <FooterContentPrivateLayout />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </AntdConfig>
</template>

<style lang="scss"></style>
