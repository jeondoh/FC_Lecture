<template>
  <li>{{name}}?!</li>
</template>

<script>
export default{
  props:{
    name:{
      type: String,
      default:''
    }
  }
}
</script>
<!-- scoped: 현재 컴포넌트만 지정(유효범위) -->
<style scoped lang="scss">
  h1{
    color:red !important;
  }
</style>