import { ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";


export const useUserStore = defineStore('user',()=>{
  const userInfo = ref<any>({})

  function setUserInfo(data:any){
    userInfo.value = data
    window.localStorage.setItem('userInfo',JSON.stringify(data))
  }

  function getUserInfo(){
    return JSON.parse(window.localStorage.getItem('userInfo')!)
  }

  function logout(){
    userInfo.value = {}
    window.localStorage.removeItem('userInfo')
  } 

  return {
    userInfo,

    setUserInfo,
    getUserInfo,
    logout
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))