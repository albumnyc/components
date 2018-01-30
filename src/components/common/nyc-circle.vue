<template>
    <div>
        <div id="circle"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
  // 引入基本模板
  // let echarts = require('echarts/lib/echarts')
  // // 引入饼图组件
  // require('echarts/lib/chart/pie')
  // // 引入提示框和图例组件
  // require('echarts/lib/component/tooltip')
  // require('echarts/lib/component/legend')

     function resizeCharts (node) {
        node.style.width = '600px'
        node.style.height = '400px'
    }
let options = {
     backgroundColor: '#2c343c',
        textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告',itemStyle:{normal:{color:"yellow"}}},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ],
        label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {          //分割线
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {    //阴影、透明度、颜色、边框颜色、边框宽度
                normal: {
                    shadowBlur: 200,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
};
export default {
  name : 'nyc-circle',
  mounted(){
      let circle=document.getElementById('circle');
      console.log(circle);
      resizeCharts(circle)
 let mainChart = echarts.init(circle)
    mainChart.setOption(options)
  }
}
</script>
