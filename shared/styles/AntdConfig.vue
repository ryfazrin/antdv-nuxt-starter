<script lang="ts" setup>
import componentsTheme from '~/shared/styles/component'
const PFDinTextPro = '"PFDinTextPro", sans-serif'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        fontFamily: PFDinTextPro,
        fontSize: 16,
        lineHeight: 1.5,
        colorText: '#212121',
        colorTextSecondary: '#6E6E6E',
      },
      components: componentsTheme,
    }"
  >
    <slot />
  </a-config-provider>
</template>

<style lang="scss">
html,
body {
  font-size: 8px;

  scrollbar-color: #bebfcf #f8f8f8;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.8vw;
    height: 0.8vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bebfcf;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f8f8f8;
  }
}

* {
  padding: 0;
  margin: 0;
}

/* dummy logo */
/* .demo-logo-vertical {
  height: 25px;
  margin-inline: 16px;
  background: #f8f0ff;
  width: 100%;
  border-radius: 6px;
} */

/* side collapse popup style */
.ant-menu.ant-menu-sub.ant-menu-vertical {
  max-height: 300px !important;

  & .ant-menu-item,
  .ant-menu-submenu-title {
    display: flex;

    & img {
      display: none !important;
    }

    & span,
    p {
      margin-inline-start: 0 !important;
    }
  }
}

/* dropdown notif */
.notif-bropdown {
  min-width: 300px !important;
}

/* scroll select dropdown */
.rc-virtual-list-holder {
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
/* html {
  --bg-color: #f1f1f1;
}
html.dark{
  --bg-color: rgb(42, 44, 44);
  --bg-header-color: rgb(36, 37, 37);
} */

body {
  /* background-color: var(--bg-color); */
  font-family: 'PFDinTextPro', sans-serif;
}

.logo {
  height: 32px;
  margin: 16px;
  /* background: rgba(255,255,255,.3); */
  background: rgb(0 21 41);
}

#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
