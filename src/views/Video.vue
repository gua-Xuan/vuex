<template >
    <h3>一級組件事頻系攳</h3>
    <p>id是 {{id}}</p>
    <router-link :to="{ name: 'video-info1',params:{id:30} }">點讚</router-link> |
    <router-link :to="{ name: 'video-info2',params:{id:30} }">互動</router-link> |
    <router-view/>
</template>
<script>
export default {
  name: 'VideoView',
  props: ['id']
}
</script>
<!-- <style>
</style> -->
