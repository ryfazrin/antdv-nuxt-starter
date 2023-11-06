<script lang="ts" setup>
import AntdConfig from '~/shared/styles/AntdConfig.vue'

const selectedKeys1 = ref<string[]>(['dashboard'])
const openKeys = ref<string[]>(['sub1'])
const PFDinTextPro = '"PFDinTextPro", sans-serif'
</script>

<template>
  <AntdConfig>
    <a-layout has-sider>
      <a-layout-sider
        class="text-xs"
        :style="{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }"
        theme="light"
      >
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys1"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="dashboard">
            <nuxt-link href="/">
              <user-outlined /> Dashboard
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="basicQuery">
            <nuxt-link href="/basic-query">
              <user-outlined /> Basic Query
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="about">
            <nuxt-link href="/about">
              <user-outlined /> About
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="customAntd">
            <nuxt-link href="/custom-antd">
              <user-outlined /> Custom Antd
            </nuxt-link>
          </a-menu-item>
          <a-sub-menu key="sub1">
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
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">
              option5
            </a-menu-item>
            <a-menu-item key="6">
              option6
            </a-menu-item>
            <a-menu-item key="7">
              option7
            </a-menu-item>
            <a-menu-item key="8">
              option8
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">
              option9
            </a-menu-item>
            <a-menu-item key="10">
              option10
            </a-menu-item>
            <a-menu-item key="11">
              option11
            </a-menu-item>
            <a-menu-item key="12">
              option12
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content
          :style="{ margin: '24px 16px 0', overflow: 'initial' }"
        >
          <slot />
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </AntdConfig>
</template>

<style lang="scss"></style>
