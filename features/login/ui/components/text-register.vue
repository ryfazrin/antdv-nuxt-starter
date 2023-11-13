<script lang="ts" setup></script>

<template>
  <a-typography
    style="
      color: #6418C3;
      text-align: right;
    "
  >
    Don&apos;t have an account yet?
    {{ ' ' }}
    <nuxt-link
      href="/auth/register"
      style="
        color: #6418C3;
        font-weight: bold;
      "
    >
      Register
    </nuxt-link>
  </a-typography>
</template>

<style lang="scss" scoped></style>
