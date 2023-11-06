<script lang="ts" setup></script>

<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      <a-spin :spinning="false">
        <a-avatar
          :size="42"
          alt="avatar-sider-menu"
          style="
              cursor: pointer;
            "
        >
          UR
        </a-avatar>
      </a-spin>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="user">
          <div
            style="
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 5px;
              "
            @click="() => console.log('dummy name')"
          >
            <a-typography-text>{{ storageCheck('user').email }}</a-typography-text>
          </div>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="logout">
          <div
            style="
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 5px;
              "
            @click="() => console.log('test')"
          >
            Logout
          </div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
