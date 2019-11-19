<template>
  <div>
    <homeback title="登录" :isHome="true"></homeback>
    <md-result-page
      class="customized"
      :img-url="require('../assets/logo.png')"
      text="主标题"
      subtext="副标题"
    ></md-result-page>
    <form>
      <md-field>
        <md-input-item
          title="账号"
          placeholder="账号"
          v-model="account.username"
          @blur="checkUserName"
          clearable
        >
          <p v-if="usernameError" class="error" slot="error">用户名格式不正确</p>
        </md-input-item>
        <md-input-item
          type="password"
          title="密码"
          placeholder="密码"
          v-model="account.password"
          @blur="checkPassword"
          clearable
        >
          <p v-if="passwordError" class="error" slot="error">
            密码格式不正确
            <span class="error-action" @click="passwordTip">密码强度要求</span>
          </p>
        </md-input-item>
        <md-input-item
          type="verifycode"
          title="验证码"
          placeholder="验证码"
          v-model="account.verifycode"
          @blur="checkVerifycode"
          clearable
        >
          <p v-if="verifycodeError" class="error" slot="error">验证码不正确</p>
          <div @click="refreshCode" slot="right">
            <identify :identifyCode="identifyCode"></identify>
          </div>
        </md-input-item>
      </md-field>
    </form>
    <md-button type="primary" @click="handleClick">进入</md-button>
  </div>
</template>

<script>
import { Dialog } from "mand-mobile";
import homeback from "../components/HomeBack";
import identify from "../components/VerifyCode";
export default {
  components: {
    homeback,
    identify
  },
  data() {
    return {
      account: { username: "admin", password: "1234567890", verifycode: "" },
      usernameError: false,
      passwordError: false,
      verifycodeError: false,
      identifyCodes: "123456890",
      identifyCode: ""
    };
  },
  created() {
    // todo check token
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      // console.log(this.identifyCode);
    },
    checkUserName() {
      if (this.account.username.length == 0) {
        this.usernameError = true;
      } else {
        this.usernameError = false;
      }
    },
    checkPassword() {
      if (this.account.password.length == 0) {
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }
    },
    checkVerifycode() {
      if (this.account.verifycode != this.identifyCode)
        // if (this.account.verifycode != "0808")
        this.verifycodeError = true;
      else this.verifycodeError = false;
    },
    passwordTip() {
      Dialog.alert({
        content: "密码强度要求：不能少于八位数"
      });
    },
    handleClick() {
      // let _self = this;
      this.checkUserName();
      this.checkPassword();
      this.checkVerifycode();
      if (this.usernameError || this.passwordError || this.verifycodeError) {
        return;
      } else {
        window.localStorage.setItem("username", this.account.username); // save account name
        // login
      }
    }
  }
};
</script>

<style>
</style>