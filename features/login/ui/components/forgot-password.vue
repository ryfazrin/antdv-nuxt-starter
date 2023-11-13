<script lang="ts" setup></script>

<template>
  <a-typography
    style="
      color: #6418C3;
      font-weight: 700;
      text-align: right;
    "
  >
    <span
      style="
        cursor: pointer;
        width: fit-content;
        height: fit-content;
      "
      @click="() => console.log('redirect forgot password')"
    >
      Forgot Password
    </span>
  </a-typography>
</template>

<style lang="scss" scoped></style>
