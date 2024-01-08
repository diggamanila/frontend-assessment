<template>
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'infotab'
    }
  },
  data() {
    return {
      isActive: true
    }
  },
  created() {
    this.$parent.infotabs.push(this)
  }
}
</script>
