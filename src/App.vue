<template>
  <div class="mand">
    <div class="md-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="stylus" scoped>
html {
  background: #F3F4F5;
}

.mand {
  position: relative;
  min-height: 100%;
  max-width: 750px;
  font-size: 28px;
  font-size-adjust: none;
  -webkit-text-size-adjust: 100%;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: color-primary-background;

  .md-nav {
    display: flex;
    justify-content: space-between;
    padding: 32px 40px;
    background: #fff;
    border-bottom: 1px solid #f1efef;

    p {
      position: relative;
      display: inline-block;
      line-height: 1;

      &.home {
        top: 0;

        .md-icon {
          color: color-text-base;
        }
      }

      &.name {
        margin-left: h-gap-sm;
        font-size: font-body-large;
        font-weight: font-weight-normal;
        color: color-text-base;
      }

      &.name-zh {
        top: 9px;
        margin-left: h-gap-sm;
        font-size: font-body-large;
        font-weight: font-weight-normal;
        color: color-text-minor;
      }
    }
  }

  .md-wrapper {
    position: relative;
    z-index: 3;
    padding: 20px;
    padding-top: 130px;
    clearfix();
  }
}
</style>
