<template>
  <div
    class="el-progress"
    :class="[
      'el-progress--' + type,
      status ? 'is-' + status : '',
      {
        'el-progress--without-text': !showText,
        'el-progress--text-inside': textInside,
      }
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="el-progress-bar" v-if="type === 'line'">
      <div class="el-progress-bar__outer" :style="{height: strokeWidth + 'px'}">
        <div class="el-progress-bar__inner" :style="barStyle" style ="background:#FE6F3D">
          <div class="el-progress-bar__innerText" v-if="showText && textInside">{{percentage}}%</div>
        </div>
      </div>
    </div>
    <div class="el-progress-circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
      <svg viewBox="0 0 100 100">
        <path class="el-progress-circle__track" :d="trackPath" stroke="#e5e9f2" 
        :stroke-width="relativeStrokeWidth" fill="none"></path>
        <path class="el-progress-circle__path" :d="trackPath" stroke-linecap="round" :stroke="stroke"
         :stroke-width="relativeStrokeWidth" fill="none" :style="circlePathStyle"></path>
      </svg>
    </div>
    <div
      class="el-progress__text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template v-if="!status">{{percentage}}%</template>
      <i v-else :class="iconClass"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'nyc-progress',
    props: {
      type: {
        type: String,
        default: 'line',
        validator: val => ['line', 'circle'].indexOf(val) > -1
      },
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      },
      status: {
        type: String
      },
      strokeWidth: {
        type: Number,
        default: 6
      },
      textInside: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 126
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      barStyle() {
        var style = {};
        style.width = this.percentage + '%';
        return style;
      },
      relativeStrokeWidth() {
        return (this.strokeWidth / this.width * 100).toFixed(1);
      },
      trackPath() {
        var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
        return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
      },
      perimeter() {
        var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
        return 2 * Math.PI * radius;
      },
      circlePathStyle() {
        var perimeter = this.perimeter;
        return {
          strokeDasharray: `${perimeter}px,${perimeter}px`,
          strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
          transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        };
      },
      stroke() {
        var ret;
        switch (this.status) {
          case 'success':
            ret = '#13ce66';
            break;
          case 'exception':
            ret = '#ff4949';
            break;
          default:
            ret = '#20a0ff';
        }
        return ret;
      },
      iconClass() {
        if (this.type === 'line') {
          return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-cross';
        } else {
          return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
        }
      },
      progressTextSize() {
        return this.type === 'line'
          ? 12 + this.strokeWidth * 0.4
          : this.width * 0.111111 + 2 ;
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  @import '../basic/maxin.scss';
@import "../basic/utils";
@import "../basic/var";
@include b(progress) {
  position: relative;
  line-height: 1;

  @include e(text) {
    font-size:14px;
    color: $--color-text-regular;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1;

    i {
      vertical-align: middle;
      display: block;
    }
  }

  @include m(circle) {
    display: inline-block;

    .el-progress__text {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      transform: translate(0, -50%);

      i {
        vertical-align: middle;
        display: inline-block;
      }
    }
  }

  @include m(without-text) {
    .el-progress__text {
      display: none;
    }

    .el-progress-bar {
      padding-right: 0;
      margin-right: 0;
      display: block;
    }
  }

  @include m(text-inside) {
    .el-progress-bar {
      padding-right: 0;
      margin-right: 0;
    }
  }

  @include when(success) {
    .el-progress-bar__inner {
      background-color: $--color-success;
    }

    .el-progress__text {
      color: $--color-success;
    }
  }

  @include when(exception) {
    .el-progress-bar__inner {
      background-color: $--color-danger;
    }

    .el-progress__text {
      color: $--color-danger;
    }
  }
}

@include b(progress-bar) {
  padding-right: 50px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-right: -55px;
  box-sizing: border-box;

  @include e(outer) {
    height: 6px;
    border-radius: 100px;
    background-color: $--border-color-lighter;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }
  @include e(inner) {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: $--color-primary;
    text-align: right;
    border-radius: 100px;
    line-height: 1;
    white-space: nowrap;

    @include utils-vertical-center;
  }

  @include e(innerText) {
    display: inline-block;
    vertical-align: middle;
    color: $--color-white;
    font-size: 12px;
    margin: 0 5px;
  }
}

@keyframes progress {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 32px 0;
  }
}
  </style>
  