<template>
  <div id="hi-vue-wrapper">
    <p>HI, VUE! </p>
    <p> a + b => {{a+b}}</p>
    <p> obj равен {{obj}}</p>
  </div>
</template>

<script>

export default { 
  data() {
    return {
      a: 1,
      b:2,
      obj: {
        aaa:123,
        bbbbbb:321
      }
    }
  }
}
</script>

<style>





#hi-vue-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
