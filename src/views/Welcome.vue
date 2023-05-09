<template>
  <h1>这是欢迎页--{{msg}}</h1>
  <!-- <el-button>去登录</el-button> -->
</template>

<script setup>
import {defineProps,reactive} from 'vue'
defineProps({
  msg:String
})

</script>
<style scoped>

</style>