<template>
  <div class="flex flex-col justify-center">
    <div>
      <img class="mx-auto w-20 h-20 my-5" src="@/assets/img/logo.png" alt="" />
      <div class="text-center font-bold text-2xl">登录网易云账号</div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="w-48 h-48 relative">
        <div class="absolute w-full h-full -z-10">
          <img class="pl-2" id="qrImg" :src="qrImg" />
        </div>
        <div v-if="qrTimeout" class="absolute w-48 h-48 z-10 flex justify-center items-center">
          <div class="mubu">二维码过期，请点击刷新</div>
        </div>
      </div>
      <div class="text-center">请打开手机网易云APP扫码登录</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus/es'
import MusicApi from '../../../Api/music'
let qrImg = ref<string>('')
let qrTimeout = ref<boolean>(false)
onMounted(async () => {
  await login()
})

async function login() {
  let timer: any
  let res = await MusicApi.getLoginKey({ timerstamp: Date.now() })
  let key = res.data.unikey
  if (key) {
    let res2 = await MusicApi.getLoginQr({
      key: key,
      timerstamp: Date.now(),
      qrimg: true,
    })
    qrImg.value = res2.data.qrimg!

    timer = setInterval(async () => {
      let statusRes = await MusicApi.checkLoginStatus({
        key: key!,
        timerstamp: Date.now(),
      })
      if (statusRes.code == 800) {
        ElMessage.error('二维码已过期,请重新获取')
        qrTimeout.value = true
        clearInterval(timer)
      }
      if (statusRes.code == 803) {
        ElMessage.success('登录成功')
        clearInterval(timer)
        let userInfo = await MusicApi.getLoginStatus({ timerstamp: Date.now() })
        console.log("🚀 ~ file: index.vue ~ line 47 ~ timer=setInterval ~ userInfo", userInfo)
      }
    }, 3000)
  }
}
</script>

<style scoped lang="sass">
.mubu
  @apply text-sm text-blue-600 w-full h-full font-bold text-center
  line-height: 12rem
  background-color: rgba(110, 110, 110, 0.8)
  </style>
