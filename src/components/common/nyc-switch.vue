<template>
  <div
    class="el-switch"
    :class="{ 'is-disabled': disabled, 'is-checked': checked }"
    role="switch"
    :checked="checked"
    :disabled="disabled"
    @click="switchValue"
  >
    <input
      class="el-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      @keydown.enter="switchValue"
    >
    <span
      :class="['el-switch__label', 'el-switch__label--left', !checked ? 'is-active' : '']"
      v-if="inactiveIconClass || inactiveText">
      <i :class="[inactiveIconClass]" v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText" :hidden="checked">{{ inactiveText }}</span>
    </span>
    <span class="el-switch__core" ref="core" :style="{ 'width': coreWidth + 'px' }">
      <span class="el-switch__button" :style="{ transform }"></span>
    </span>
    <span
      :class="['el-switch__label', 'el-switch__label--right', checked ? 'is-active' : '']"
      v-if="activeIconClass || activeText">
      <i :class="[activeIconClass]" v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText" :hidden="!checked">{{ activeText }}</span>
    </span>
  </div>
</template>
<script>

//   import Migrating from 'element-ui/src/mixins/migrating';
  export default {
    name: 'nycSwitch',
    // mixins: [Focus('input'), Migrating],
    props: {
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 0
      },
      activeIconClass: {
        type: String,
        default: ''
      },
      inactiveIconClass: {
        type: String,
        default: ''
      },
      activeText: String,
      inactiveText: String,
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        coreWidth: this.width
      };
    },
    created() {
      if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
        this.$emit('input', this.inactiveValue);
      }
    },
    computed: {
      checked() {
        //   console.log(this.value)
        return this.value === this.activeValue;
      },
      transform() {
        return this.checked ? `translate3d(${ this.coreWidth - 20 }px, 0, 0)` : '';
      }
    },
    watch: {
      checked() {
        this.$refs.input.checked = this.checked;
        if (this.activeColor || this.inactiveColor) {
          this.setBackgroundColor();
        }
      }
    },
    methods: {
      focus() {
        this.$refs[ref].focus();
      },
      handleChange(event) {
        this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
        this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
        this.$nextTick(() => {
          // set input's checked property
          // in case parent refuses to change component's value
          this.$refs.input.checked = this.checked;
        });
      },
      setBackgroundColor() {        //用的style=，通过this.$refs.获取到元素的节点
        let newColor = this.checked ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      },
      switchValue() {
        this.$refs.input.click();
      },
      getMigratingConfig() {
        return {
          props: {
            'on-color': 'on-color is renamed to active-color.',
            'off-color': 'off-color is renamed to inactive-color.',
            'on-text': 'on-text is renamed to active-text.',
            'off-text': 'off-text is renamed to inactive-text.',
            'on-value': 'on-value is renamed to active-value.',
            'off-value': 'off-value is renamed to inactive-value.',
            'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
            'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
          }
        };
      }
    },
    mounted() {
      /* istanbul ignore if */
      this.coreWidth = this.width || 40;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
      this.$refs.input.checked = this.checked;
    }
  };
</script>
<style lang="scss" scoped>
@import "../basic/maxin.scss";
// @import "../basic/var.scss";
@include b(switch) {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: $--switch-font-size;
  line-height: $--switch-height;
  height: $--switch-height;
  vertical-align: middle;
  @include when(disabled) {
    & .el-switch__core,
    & .el-switch__label {
      cursor: not-allowed;
    }
  }

  @include e(label) {
    transition: .2s;
    height: $--switch-height;
    display: inline-block;
    font-size: $--switch-font-size;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: $--color-text-primary;

    @include when(active) {
      color: $--color-primary;
    }

    @include m(left) {
      margin-right: 10px;
    }
    @include m(right) {
      margin-left: 10px;
    }
    & * {
      line-height: 1;
      font-size: $--switch-font-size;
      display: inline-block;
    }
  }

  @include e(input) {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    &:focus ~ .el-switch__core {
      outline: 1px solid $--color-primary;
    }
  }

  @include e(core) {
    margin: 0;
    display: inline-block;
    position: relative;
    width: $--switch-width;
    height: $--switch-height;
    border: 1px solid $--switch-off-color;
    outline: none;
    border-radius: $--switch-core-border-radius;
    box-sizing: border-box;
    background: $--switch-off-color;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;

    & .el-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: $--border-radius-circle;
      transition: transform .3s;
      width: $--switch-button-size;
      height: $--switch-button-size;
      background-color: $--color-white;
    }
  }

  @include when(checked) {
    .el-switch__core {
      border-color: $--switch-on-color;
      background-color: $--switch-on-color;
    }
  }

  @include when(disabled) {
    opacity: 0.6;
  }

  @include m(wide) {
    .el-switch__label {
      &.el-switch__label--left {
        span {
          left: 10px;
        }
      }
      &.el-switch__label--right {
        span {
          right: 10px;
        }
      }
    }
  }

  & .label-fade-enter,
  & .label-fade-leave-active {
    opacity: 0;
  }
}
</style>
