<template lang="">
    <div class="video-info2">
        <h3>二級組件，互動分析</h3>
    </div>
</template>
<script>
export default {
  name: 'VideoInfo2',
  created () {
    console.log(this.$router.query)
  }
}
</script>
<style lang="">
</style>
