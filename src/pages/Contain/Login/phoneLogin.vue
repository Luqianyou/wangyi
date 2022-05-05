<template>
  <div class="mx-auto mt-10">
    <el-form ref="formRef" :model="phoneForm" :rules="rules" status-icon>
      <el-form-item prop="phone">
        <el-input
          class="w-64"
          v-model="phoneForm.phone"
          clearable
          placeholder="+86 请输入手机号"
        >
          <template #prefix>
            <g-icon className="icon-shouji"></g-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="w-64"
          v-model="phoneForm.password"
          type="password"
          placeholder="请输入密码"
          clearable
        >
          <template #prefix>
            <g-icon className="icon-mima"></g-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="submitForm(formRef)"
          type="primary"
          plain
          class="w-64"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
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
import { ref, reactive } from 'vue'
import type { FormInstance } from 'element-plus/es'
import { LogError } from '../../../utils/LogError'
import { Md5 } from 'ts-md5/dist/md5'
import MusicApi from '../../../Api/music'
import router from '../../../router'
import { useUserStore } from '../../../store/user'

const userStore = useUserStore()

const formRef = ref<FormInstance>()

interface RuleForm {
  phone: number | string
  password: string | number
}
const phoneForm = reactive<RuleForm>({
  phone: '',
  password: '',
})

const validatePhone = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('手机号不能为空'))
  } else {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的手机号'))
    }
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (phoneForm.password !== '') {
      if (!formRef.value) return
      formRef.value.validateField('checkPass')
    }
    callback()
  }
}

const rules = reactive({
  phone: [{ validator: validatePhone, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
})

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      let userInfo = await MusicApi.loginByPhone({
        phone: phoneForm.phone as number,
        md5_password: Md5.hashStr(phoneForm.password as string) as string,
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
