<template>
  <div class="mx-auto mt-10">
    <el-form>
      <el-form-item>
        <el-input class="w-64" v-model="username" placeholder="请输入邮箱">
          <template #prefix>
            <g-icon className="icon-youjian"></g-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="w-64" v-model="username" placeholder="请输入密码">
          <template #prefix>
            <g-icon className="icon-mima"></g-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" plain class="w-64">登录</el-button>
    <div class="text-center mt-8">
      <router-link class="routerlink" to="/contain/login/qrlogin">二维码登录</router-link> |
      <router-link class="routerlink" to="/contain/login/phoneLogin">手机号登录</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
.routerlink:hover
  @apply text-blue-500 border-b-blue-500 border-b-2 
</style>
