<template>
  <div class="md-example-child md-example-child-result-page md-example-child-result-page-0">
    <md-result-page type="lost" :buttons="buttons"></md-result-page>
  </div>
</template>

<script>
export default {
  name: "result-page",
  title: "404",
  components: {
  },
  data() {
    return {
      buttons: [
        {
          text: "刷新",
          handler() {
            location.reload();
          }
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.md-example-child-result-page-0 {
  background: #FFF;
}
</style>