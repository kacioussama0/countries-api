<template>

  <div class="card border-0 shadow-sm">
    <div class="card-header bg-transparent border-0 p-0" v-if="this.$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" v-if="this.$slots.body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer bg-transparent" v-if="this.$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>

</template>


<script>


</script>


<style scoped>

</style>