<template>
  <div class="md-example-child md-example-child-result-page md-example-child-result-page-3">
    <md-result-page
      class="customized"
      img-url="//manhattan.didistatic.com/static/manhattan/do1_JX7bcfXqLpStKRv31xlp"
      text="不太确定自己错在了哪里..."
      subtext="要不然刷新试试？"
      :buttons="buttons"
    ></md-result-page>
  </div>
</template>

<script>
export default {
  name: "result-page",
  /* DELETE */
  title: "401",
  titleEnUS: "Custom pattern",
  /* DELETE */
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
    }
  }
};
</script>
<style lang="stylus" scoped>
.md-example-child-result-page-3 {
  background: #FFF;
}
</style>