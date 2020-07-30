<template>
  <div>
    <div class="header"> {{ title }}
    </div>
    <button
      class="btn-change-title"
      v-on:click="handleChangeTilte()"
    >Change title</button>
  </div>
</template>

<script>
export default {
  name: 'comp-header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    handleChangeTilte () {
      this.$emit('change:title', {
        title: 'Title is Changed'
      })
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 100px;
  background-color: blue;
  line-height: 100px;
  text-align: center;
  color: white;
  font-size: 50px;
}

.btn-change-title {
  margin-top: 20px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
