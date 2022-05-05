<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="flex gap-8 items-center h-24">
          <div class="arrow" @click="goBefore">
            <el-icon class="arrow-elIcon">
              <ArrowLeftBold />
            </el-icon>
          </div>
          <div class="arrow" @click="goNext">
            <el-icon class="arrow-elIcon">
              <ArrowRightBold />
            </el-icon>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="flex justify-center items-center gap-8 h-24">
          <div
            :class="activeNav === '/contain/frontPage' ? 'active' : ''"
            class="nacIndex"
            v-change="{ index: '/contain/frontPage' }"
          >
            首页
          </div>
          <div
            :class="activeNav === '/contain/searchPage' ? 'active' : ''"
            class="nacIndex"
            v-change="{ index: '/contain/searchPage' }"
          >
            发现
          </div>
          <div
            :class="activeNav === '/contain/musicLibraryPage' ? 'active' : ''"
            class="nacIndex"
            v-change="{
              index:'/contain/musicLibraryPage'
            }"
          >
            音乐库
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="flex gap-5 items-center justify-center h-24">
          <el-input
            v-model="input2"
            class="w-35"
            placeholder="搜索"
            :prefix-icon="Search"
          />
          <div class="flex justify-center items-center">
            <el-avatar
              class="avatar"
              :size="50"
              ref="buttonRef"
              v-click-outside="onClickOutside"
              :src="circleUrl"
            />
            <el-popover
              ref="popoverRef"
              :virtual-ref="buttonRef"
              trigger="click"
              virtual-triggering
            >
              <div>
                <div class="loginBox" v-if="!circleUrl" @click="handleLogin">登录</div>
                <div class="loginBox" v-else @click="logout">退出登录</div>
                <div class="loginBox" @click="goToGitHub">github</div>
              </div>
            </el-popover>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold, Search } from '@element-plus/icons-vue';
import { ClickOutside as vClickOutside } from 'element-plus';
import { Directive, DirectiveBinding, onMounted, ref, unref, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../router';
import { useUserStore } from '../../store/user';

const userStore = useUserStore()

watch(
  () => userStore.userInfo,
  (val) => {
    if (val) {
      circleUrl.value = val.avatarUrl
    }
  }
)

onMounted(() => {
  if(userStore.getUserInfo()?.avatarUrl){
     circleUrl.value = userStore.getUserInfo().avatarUrl
  }
})

const route = useRoute()

let input2 = ref<string>('')
let circleUrl = ref<string>('')

function goBefore() {
  router.back()
}

function goNext() {
  router.go(1)
}

let activeNav = ref<string>('')
watch(
  route,
  (value) => {
    activeNav.value = value.path
  },
  {
    immediate: true,
  }
)

const vChange: Directive<any, void> = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener('click', () => {
      router.push({ path: binding.value.index })
    })
  },
}

const buttonRef = ref()
const popoverRef = ref()
function onClickOutside() {
  unref(popoverRef).popperRef?.delayHide?.()
}

function handleLogin() {
  router.push({ path: '/contain/login' })
}

function logout(){
  userStore.logout()
  router.go(0)
}

function goToGitHub(){
  window.open('https://github.com/Luqianyou/wangyi','_blank')
}
</script>

<style lang="sass" scoped>
.arrow
  @apply block relative w-10 h-10 rounded-full
  &-elIcon
    @apply absolute top-1/2 left-1/2
    transform: translate( -50%,-50%)
.arrow:hover
  @apply bg-gray-200
.arrow:active
  transform: scale(0.9, 0.9)

.nacIndex
  @apply mx-8 text-xl font-bold p-2 rounded
  user-select: none
.nacIndex:hover
  @apply bg-gray-200
.nacIndex:active
  transform: scale(0.9, 0.9)
.active
  @apply text-blue-600

.avatar:active
  transform: scale(0.9, 0.9)

.loginBox
  @apply font-bold text-center
  user-select: none
.loginBox:hover
  @apply text-blue-200
</style>
