<template>
    <div class="date-pickers">
        <input type="text" placeholder="选择日期" @click.stop="trueDateBox" :value="date" readonly 
        :style = "{borderColor: dateBoxFlag? '#FE6F3D': '#5E5E5E'}"/>
        <transition name="fade">
            <div class="date-box" v-if="dateBoxFlag">
                <div class="day-select">
                    <div>
                        <button @click="reduceYear">&laquo;</button>
                        <button @click="reduceMonth">&lt;</button>
                    </div>
                    <div>
                        <input type="text" @click="selected" v-model="year" />年
                        <input type="text" @click="selected" v-model="month" />月
                    </div>
                    <div>
                        <button @click="addMonth">&gt;</button>
                        <button @click="addYear">&raquo;</button>
                    </div>
                </div>
                <div class="day-screen">
                    <div>
                        <span v-for="week in week">{{ week }}</span>
                    </div>
                    <div @click="selectDay">    
                        <!-- 在这里注册点击事件可以进行源对象 -->
                        <span v-for="day in previousMonth" class="previousMonth">{{ day }}</span>
                        <span v-for="day in monthDay[month - 1]" :class="isActive(day)" class="currentMonth">{{ day }}</span>
                        <span  v-for="day in nextMonth" class="nextMonth">{{ day }}</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name:'nyc-timepicker',
    props:{"maxyear":{
        type: Number,
        require : false,
        default : Infinity
    }},
 data() {
        return {
            dateBoxFlag: false,
            year: 0,
            month: 0,
            day: 0,
            previousMonth: [],
            nextMonth: [],
            week: ['日', '一', '二', '三', '四', '五', '六'],
            monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        }
    },
    computed: {
        date () {
            if (this.year == 0 || this.month == 0 || this.day == 0) {
                return '';
            }
            return this.year + '-' + this.month + '-' + this.day;
        },
    },
    watch: {
        year: function (val) {               //val直接能获取到v-model参数
            // console.log(val)
            let reg = /^[1-9]\d*$/g;
            if (!reg.test(val)) {
                let date = new Date();
                this.year = date.getFullYear();
            }
            if (val < 0) {
                this.year = 1;
            }
            if (val > this.maxyear) {
                this.year = this.maxyear;
            }
            this.dayScreen();
        },
        month: function (val) {                  
            let reg = /^[1-9]\d*$/g;
            if (!reg.test(val)) {
                let date = new Date();
                this.month = date.getMonth() + 1;
            }
            if (val < 1) {
                this.month = 1;
            }
            if (val > 12) {
                this.month = 12;
            }
            this.dayScreen();
        },
    },
    methods: {
        // 突出显示当前日期
        isActive (index) {
            if (index == this.day) {
                return {
                    active: true,
                }
            }
        },
        hidedatebox(){
            this.dateBoxFlag  =false;
        },
        // 显示日期盒子并初始化
        trueDateBox() {
            if (this.date == '') {
                let date = new Date();
                this.year = date.getFullYear();    //获取到当前年份
                if (this.isLeapYear(this.year)) {
                    this.monthDay[1] = 29;
                } else {
                    this.monthDay[1] = 28;
                }
                this.month = date.getMonth() + 1;
                this.day = date.getDate();
                // console.log(this.day)
            }
            this.dayScreen();
            this.dateBoxFlag = !this.dateBoxFlag;
            // console.log(this.dateBoxFlag);
        },
        // 增减年份
        addYear() {
            this.year++;
            if (this.isLeapYear(this.year)) {
                this.monthDay[1] = 29;
            } else {
                this.monthDay[1] = 28;
            }
        },
        reduceYear() {
            this.year--;
            if (this.isLeapYear(this.year)) {
                this.monthDay[1] = 29;
            } else {
                this.monthDay[1] = 28;
            }
        },
        // 增减月份
        addMonth() {
            this.month++;
            if (this.month > 12) {
            if(this.year< this.maxyear){

                this.month = 1;
                this.year++;
            }                
            }
        },
        reduceMonth() {
            this.month--;
            if (this.month < 1) {
                this.month = 12;
                this.year--;
            }
        },
        // 获取input里的文字
        selected(e) {
            // e.target.select();                           //选中和focus是有区别的
            e.target.focus();                                  //选中和focus是有区别的   select会导致文字选中效果
        },
        // 选择日期
        selectDay(e) {
            let targetClass = e.target.className;
            if (targetClass == 'previousMonth') {
                if (this.month == 1) {
                    this.month = 12;
                    this.year--;
                } else {
                    this.month = this.month - 1;
                }
                this.day = parseInt(e.target.innerText);
            } else if (targetClass == 'nextMonth') {
                if (this.month == 12) {
                    this.month = 1;
                    this.year++;
                } else {
                    this.month = this.month + 1;
                }
                this.day = parseInt(e.target.innerText);
            } else {
                // var x = e.target;
                // for(var prop in x){
                //     if(x.hasOwnProperty){
                //         console.log(x[prop]);
                //     }
                // }
                // console.log(e.target)
                this.day = parseInt(e.target.innerText);
            }
            this.dateBoxFlag = false;
        },
        // 日期显示
        dayScreen() {
            // 上一个月
            let firstDate = new Date(this.year, this.month - 1, 1);                 //得到当月一号的日期
            let firstWeek = firstDate.getDay();                 //first意思是本月头一天比之前缺几天
            // console.log(firstDate)
            let preMonthDay = null;
            if (this.month == 1) {
                preMonthDay = this.monthDay[11];
            } else {
                preMonthDay = this.monthDay[this.month - 2];          //premonthday获取到上个月的天数
            }
            for (let i = 0; i < preMonthDay; i++) {
                this.previousMonth[i] = i + 1;
            }
            if (firstWeek == 0) {       
                this.previousMonth = this.previousMonth.slice(-7);
                // console.log(this.previousMonth)               //获取上个月日期最后7天的数组
            } else {
                this.previousMonth = this.previousMonth.slice(-firstWeek);               
            }
            // 下一个月
            let endDate = new Date(this.year, this.month - 1, this.monthDay[this.month - 1]);
            let endWeek = endDate.getDay();
            let nextMonthDay = null;
            if (this.month == 12) {
                nextMonthDay = this.monthDay[0];
            } else {
                nextMonthDay = this.monthDay[this.month];
            }
            for (let i = 0; i < nextMonthDay; i++) {
                this.nextMonth[i] = i + 1;
            }
            if (endWeek == 6) {
                this.nextMonth = this.nextMonth.slice(0, 7);
            } else {
                this.nextMonth = this.nextMonth.slice(0, 6 - endWeek);
            }
        },
        // 判断是否是闰年
        isLeapYear(year) {
            return (year % 100 == 0 ? (year % 400 == 0 ? true : false) : (year % 4 == 0 ? true : false));
        },
    },
    mounted(){
        // document.onclick = (e)=>{
        //     this.dateBoxFlag = false;
        // }
    }
}
</script>
<style lang="scss" scoped>
.date-pickers {
  width: 280px;
  padding: 5px;
  position: relative; }
  .date-pickers > input {
    width: 50%;
    height: 20px;
    padding: 5px; 
    border: 1px solid #5E5E5E;
    text-align: center;
    padding-left: 0px;
    }
  .date-pickers .fade-enter-active, .date-pickers .fade-leave-active {
    transition: all 0.5s; }
  .date-pickers .fade-enter, .date-pickers .fade-leave-active {
    opacity: 0;
    transform: translateY(-10px); }
  .date-pickers > div {
    width: 100%;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #eee;
    background: white;
    position: absolute;
    top: 50px;
    left: 0px;
    z-index: 99; }
    .date-pickers > div div.day-select {
      display: flex;
      padding: 5px 0;
      height: 30px;
      line-height: 30px;
      color: #888888;
      border-bottom: 1px solid #ccc; }
      .date-pickers > div div.day-select input,
      .date-pickers > div div.day-select button {
        border: none;
        outline: unset;
        background: white;
        text-align: center;
        color: #888888;
        cursor: pointer; 
        }
      .date-pickers > div div.day-select > div:nth-child(1),
      .date-pickers > div div.day-select > div:nth-child(3) {
        width: 20%; }
      .date-pickers > div div.day-select > div:nth-child(2) {
        width: 60%;
        display: flex;
        justify-content: center; }
        .date-pickers > div div.day-select > div:nth-child(2) input:hover {
          background: #eee; }
        .date-pickers > div div.day-select > div:nth-child(2) input:nth-child(1) {
          width: 50px; }
        .date-pickers > div div.day-select > div:nth-child(2) input:nth-child(2) {
          width: 30px; }
    .date-pickers > div div.day-screen > div {
      width: 280px;
      padding: 0 5px;
      display: flex;
      font-size: 14px;
      justify-content: flex-start;
      flex-wrap: wrap; }
      .date-pickers > div div.day-screen > div span {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid #ccc; }
    .date-pickers > div div.day-screen > div:nth-child(1) {
      font-weight: bold;
      background: #F8F8F8; }
    .date-pickers > div div.day-screen > div:nth-child(2) span {
      cursor: pointer;
      color: black; }
      .date-pickers > div div.day-screen > div:nth-child(2) span:hover, .date-pickers > div div.day-screen > div:nth-child(2) span.active {
        background: #FE6F3D;
        color: white; }
    .date-pickers > div div.day-screen > div:nth-child(2) span.previousMonth,
    .date-pickers > div div.day-screen > div:nth-child(2) span.nextMonth {
      color: #888888; }

/*# sourceMappingURL=style.css.map */
</style>

