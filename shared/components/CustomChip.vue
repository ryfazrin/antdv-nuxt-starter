
<script lang="ts" setup>
// antd
import { type tagProps } from 'ant-design-vue/es/tag'
// styles
import { COLORS, type ColorType } from '~/shared/styles/color'

const props = withDefaults(
  defineProps<{ typeChip?: ColorType } & typeof tagProps>(),
  // Props Default value
  {
    // Custom Tag props
    typeChip: 'PRIMARY',
    // Tag props
    // - Add here -
  },
)

const theme = {
  $color: props.typeChip ? COLORS[props.typeChip] : '',
}
</script>

<template>
  <a-tag v-bind="props">
    <slot />
  </a-tag>
</template>

<style lang="scss" scoped>
.ant-tag {
  padding: 7px 10px;
  border-radius: 16px;
  border: none;
  background: var(
    --status-purple-light,
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.88) 0%,
      rgba(255, 255, 255, 0.88) 100%
    ),
    v-bind("theme.$color")
  );
  color: v-bind("theme.$color");
}
</style>
