<script lang="ts" setup></script>

<template>
  <div
    style="
      min-height: 100vh;
      display: flex;
      background: #ffffff;
      justify-content: center;
      align-items: center;
      width: 768px;
    "
  >
    <div
      style="
        width: 412px;
        display: flex;
        flex-direction: column;
      "
    >
      <nuxt-img
        src="https://dummyimage.com/259x65/67348D/fff&text=Dummy-Logo"
        alt="logo-cms"
        :width="259"
        :height="65"
        :quality="100"
        style="margin-bottom: 30px;"
      />

      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
