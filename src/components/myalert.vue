<template>
  <div>
    <!-- <nyc-alert/> -->
    <!-- type   center    closeable  title  -->
      <nyc-alert
    title="成功提示的文案"
    type="success">
  </nyc-alert>
  <nyc-alert
    title="消息提示的文案"
    center
    type="info">
  </nyc-alert>
  <nyc-alert
    title="警告提示的文案"
    :closeable = "false"
    type="warning">
  </nyc-alert>
  <nyc-alert
    title="错误提示的文案"
    type="error">
  </nyc-alert>
  </div>
</template>
<script>
import nycAlert from './common/nyc-alert'
export default {
  name :'myalert',
components:{
  nycAlert
}
}
</script>
