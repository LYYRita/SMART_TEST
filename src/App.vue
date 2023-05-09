<template>
  <!-- 默认根组件 在哪显示就放哪 -->
<router-view></router-view>
</template>

<script>
export default {
  name:'app',
  mounted() {
    this.$storage.setItem('age', '30')
  },
}
</script>

<style scoped>

</style>
