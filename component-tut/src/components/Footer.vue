<template>
  <div class="footer"> {{ title }}
  </div>
</template>

<script>
export default {
  name: 'comp-footer',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.footer {
  width: 100%;
  height: 100px;
  background-color: green;
  color: white;
  line-height: 100px;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 50px;
}
</style>
