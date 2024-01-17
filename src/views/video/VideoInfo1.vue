<template>
  <div class="video-info1">
    <h3>二级组件，点赞分析</h3>
  </div>
</template>

<script>
export default {
  name: 'VideoInfo1',
  created () {
    setTimeout(() => {
      this.$router.push({ name: 'video-info2', query: { someData: '這是info1傳遞的數據' } })
    }, 3000)
  }
}

</script>

<style>
/* 你的样式代码 */
</style>
