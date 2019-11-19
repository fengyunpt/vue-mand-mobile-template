<template>
  <div>
    <md-field>
      <md-cell-item title="动作条目" arrow @click="onClick" />
    </md-field>

    <md-dialog title="承运商选择" v-model="slotDialog.open" :btns="slotDialog.btns">
      <div class="dialog-banner" slot="header"></div>
      <md-input-item placeholder="承运商">
        <div class="input-operator" slot="right" @click="search">查询</div>
      </md-input-item>
      <md-field>
        <md-radio-list
          :options="reasons"
          icon="right"
          icon-inverse
          icon-disabled
          icon-position="right"
        />
      </md-field>
    </md-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      reasons: [
        {
          value: "0",
          text: "我有其他保险"
        },
        {
          value: "1",
          text: "每单都扣，我担心扣太多"
        },
        {
          value: "2",
          text: "我身体好，不需要重疾险"
        },
        {
          value: "3",
          text: "接单少，加入这个没什么用"
        },
        {
          value: "4",
          text: "我不了解这是什么计划"
        }
      ],
      slotDialog: {
        open: false,
        btns: [
          {
            text: "好的"
          }
        ]
      },
      open: false
    };
  },
  methods: {
    onClick() {
      this.slotDialog.open = true;
    },
    search() {
      let _self = this;
      _self.reasons = [];
    }
  }
};
</script>

<style lang="stylus" scoped></style>