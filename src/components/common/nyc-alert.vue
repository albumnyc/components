<template>
  <transition name="nyc-alert-fade">
    <div
      class="nyc-alert"
      :class="[typeClass, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <i class="nyc-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="nyc-alert__content">
        <span class="nyc-alert__title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <slot>
          <p class="nyc-alert__description" v-if="description">{{ description }}</p>
        </slot>
        <i class="nyc-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'nyc-icon-close': closeText === '' }" 
        v-show="closeable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babnyc">
  const TYPE_CLASSES_MAP = {
    'success': 'nyc-icon-success',
    'warning': 'nyc-icon-warning',
    'error': 'nyc-icon-error'
  };
  export default {
    name: 'nyc-alert',
    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closeable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: 'x'
      },
      showIcon: Boolean,
      center: Boolean
    },
    data() {
      return {
        visible: true,
      };
    },
    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },
    computed: {
      typeClass() {
        return `nyc-alert--${ this.type }`;
      },
      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'nyc-icon-info';
      },
      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },
      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
<style lang="scss" scoped>
*{
  color: #ffffff;
}
.nyc-alert--error,
.nyc-alert--info,
.nyc-alert--success,
.nyc-alert--warning
{
    width: 300px;
    height: 35px;
    border-radius: 5px;
    line-height: 35px;
    text-align: left;
    padding: 1px 5px;
}
    .nyc-alert--success{
        background: #27C24C;
    }
    .nyc-alert--info{
        background: #00ABEF;
    }
     .nyc-alert--error{
        background: rgba(236, 88, 81, 1);
    } 
    .nyc-alert--warning{
        background: rgba(250, 216, 50, 1);
    }
    .nyc-alert__closebtn{
        float: right;
        margin-right: 5px;
        cursor: pointer;
        &:hover{
            font-size: 20px;
        }
    }
    .nyc-alert-fade-enter{
        opacity: 0;
    }
     .nyc-alert-fade-enter-to{
         opacity: 1;
     }
      .nyc-alert-fade-enter-active{
          transition: opacity   5s ease-in
    }
       .nyc-alert-fade-leave{
        opacity: 0;
    }
     .nyc-alert-fade-leave-to{
         opacity: 1;
     }
      .nyc-alert-fade-leave-active{
          transition: opacity 5s ease-out
    }
    .is-center{
        text-align: center;
    }
</style>
