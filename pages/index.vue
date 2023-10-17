<script lang="ts" setup>
import CustomButton from '~/shared/components/CustomButton.vue'
import CustomCard from '~/shared/components/CustomCard.vue'
import CustomChip from '~/shared/components/CustomChip.vue'
</script>

<template>
  <div>
    <CustomCard body-padding="10px">
      <template #cover>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the description">
        <template #avatar>
          <a-avatar src="https://joeschmoe.io/api/v1/random" />
        </template>
      </a-card-meta>
    </CustomCard>
    <CustomChip>test</CustomChip>
    <CustomButton>Hai</CustomButton>
  </div>
</template>
