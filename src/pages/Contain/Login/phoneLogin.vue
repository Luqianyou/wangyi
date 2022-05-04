<template>
  <div class="mx-auto mt-10">
    <el-form
    ref="formRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    >
      <el-form-item>
        <el-input
          class="w-64"
          v-model="phoneForm.phone"
          placeholder="+86 请输入手机号"
        >
          <template #prefix>
            <g-icon className="icon-shouji"></g-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="w-64" v-model="phoneForm.password" placeholder="请输入密码">
          <template #prefix>
            <g-icon className="icon-mima"></g-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" plain class="w-64">登录</el-button>
    <div class="text-center mt-8">
      <router-link class="routerlink" to="/contain/login/emailLogin"
        >邮箱登录</router-link
      >
      |
      <router-link class="routerlink" to="/contain/login/qrlogin"
        >二维码登录</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

interface RuleForm {
  phone: number
  password: string | number
}
const phoneForm = reactive<RuleForm>({
  phone: '',
  password: ''
})
</script>

<style lang="sass" scoped>
.routerlink:hover
  @apply text-blue-500 border-b-blue-500 border-b-2
</style>
