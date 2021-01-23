<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  mounted () {
    this.$q.dark.set(true);
  },
};
</script>
<style>
body{
  background-color: #222 !important;
  color: #eee !important;
}
</style>