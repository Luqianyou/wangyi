<template>
  <div class="mx-auto mt-10">
    <el-form ref="formRef" :model="emailForm" :rules="rules" status-icon>
      <el-form-item prop="email">
        <el-input
          class="w-64"
          v-model="emailForm.email"
          placeholder="请输入邮箱"
        >
          <template #prefix>
            <g-icon className="icon-youjian"></g-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="w-64"
          type="password"
          v-model="emailForm.password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <g-icon className="icon-mima"></g-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(formRef)"
          @keyup.enter="submitForm(formRef)"
          plain
          class="w-64"
          >登录</el-button
        >
      </el-form-item>
    </el-form>

    <div class="text-center mt-8">
      <router-link class="routerlink" to="/contain/login/qrlogin"
        >二维码登录</router-link
      >
      |
      <router-link class="routerlink" to="/contain/login/phoneLogin"
        >手机号登录</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormInstance } from 'element-plus/es'
import { Md5 } from 'ts-md5'
import {  reactive, ref } from 'vue'
import MusicApi from '../../../Api/music'
import router from '../../../router'
import { LogError } from '../../../utils/LogError'
import { useUserStore } from '../../../store/user'

const userStore = useUserStore()

const formRef = ref<FormInstance>()
interface RuleForm {
  email: number | string
  password: string | number
}
const emailForm = reactive<RuleForm>({
  email: '',
  password: '',
})
const validateEmail = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('邮箱不能为空'))
  } else {
    const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的邮箱'))
    }
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (emailForm.password !== '') {
      if (!formRef.value) return
      formRef.value.validateField('checkPass')
    }
    callback()
  }
}

const rules = reactive({
  email: [{ validator: validateEmail, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
})

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      let userInfo = await MusicApi.loginByEmail({
        email: emailForm.email as string,
        md5_password: Md5.hashStr(emailForm.password as string) as string,
      })
      userStore.setUserInfo(userInfo)
      let res = userStore.getUserInfo()
      if (res) router.push({ path: '/contain/musicLibraryPage' })
    } else {
      LogError(new Error('登录失败'))
      return false
    }
  })
}
</script>

<style lang="sass" scoped>
.routerlink:hover
  @apply text-blue-500 border-b-blue-500 border-b-2
</style>
