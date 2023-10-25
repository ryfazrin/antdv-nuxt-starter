<script lang="ts" setup>
</script>

<template>
  <div>
    <CustomCard body-padding="10px" class="m-5" style="width: 500px;">
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
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores at rem culpa quaerat possimus dolorum nihil quisquam quia inventore enim autem aut, non debitis facere ipsa expedita quam delectus.</p>
    </CustomCard>
    <CustomChip>test</CustomChip>
    <CustomButton>Hai</CustomButton>
  </div>
</template>
