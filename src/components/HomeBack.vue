<template>
  <div class="homeback">
    <template v-if="isHome && $route.path != '/home'">
      <div class="header">
        <div />
        <div class="header-title">{{title}}</div>
        <div />
      </div>
    </template>
    <template v-else-if="isHome && $route.path === '/home'">
      <div class="header">
        <div />
        <div class="header-title">{{title}}</div>
        <md-icon name="back" @click="logout" />
      </div>
    </template>
    <template v-else>
      <div class="header">
        <md-icon name="arrow-left" @click="$router.go(-1)" />
        <div class="header-title">{{title}}</div>
        <md-icon name="home" @click="goHome"></md-icon>
      </div>
    </template>
  </div>
</template>

<script>
import { removeToken } from "../utils/auth";
export default {
  props: {
    isHome: { type: Boolean, default: false },
    title: String
  },
  components: {},
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    logout() {
      removeToken();
      this.$router.push("/login");
    }
  }
};
</script>

<style  lang="stylus"  scoped>
.homeback {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    -webkit-box-shadow: 0 0.267vw 1.6vw 0 rgba(44, 48, 54, 0.1);
    box-shadow: 0 0.267vw 1.6vw 0 rgba(44, 48, 54, 0.1);
    background: #fff;

    .header-title {
      font-size: 30px;
      font-weight: bolder;
    }
  }
}
</style>