import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mycircle from '@/components/mycircle'
import polyline from '@/components/polyline'
import myselect from '@/components/myselect'
import myselects from '@/components/myselects'
import twoselect from '@/components/twoselect'
import vedux from '@/components/vedux'
import myinput from '@/components/myinput'
import mytreemenu from '@/components/mytreemenu'
import mytag from '@/components/mytag'
import mybutton from '@/components/mybutton'
import myprogress from '@/components/myprogress'
import mytimepicker from '@/components/mytimepicker'
import myalert from '@/components/myalert'
import myswitch from '@/components/myswitch'
import mypost from '@/components/mypost'
import mycollapse from '@/components/mycollapse'
import mychoose from '@/components/mychoose'
import myhselects from '@/components/myhselects'
import myradio from '@/components/myradio'
import myinputnumber from '@/components/myinputnumber'
Vue.use(Router)
const routes = [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/mycircle',
        name: 'mycircle',
        component: mycircle
    }, {
        path: '/polyline',
        name: 'polyline',
        component: polyline
    }, {
        path: '/myselect',
        name: 'myselect',
        component: myselect
    }, {
        path: '/myselects',
        component: myselects,
        name: 'myselects'
    }, {
        path: '/twoselect',
        component: twoselect,
        name: 'twoselect'
    }, {
        path: '/vedux',
        component: vedux,
        name: 'vedux'
    }, {
        path: '/myinput',
        component: myinput,
        name: 'myinput'
    }, {
        path: '/mytreemenu',
        component: mytreemenu,
        name: 'mytreemenu'
    }, {
        path: '/mytag',
        component: mytag,
        name: 'mytag'
    }, {
        path: '/mybutton',
        name: 'mybutton',
        component: mybutton
    }, {
        name: 'myprogress',
        path: '/myprogress',
        component: myprogress
    }, {
        name: 'mytimepicker',
        path: '/mytimepicker',
        component: mytimepicker
    }, {
        name: 'myalert',
        path: '/myalert',
        component: myalert
    }, {
        name: 'myswitch',
        path: '/myswitch',
        component: myswitch
    }, {
        name: 'mypost',
        path: '/mypost',
        component: mypost
    }, {
        name: 'mycollapse',
        path: '/mycollapse',
        component: mycollapse
    },
    {
        name: 'mychoose',
        path: '/mychoose',
        component: mychoose
    }, {
        name: 'myhselects',
        path: '/myhselects',
        component: myhselects
    }, {
        name: 'myradio',
        path: '/myradio',
        component: myradio
    }, {
        name: 'myinputnumber',
        path: '/myinputnumber',
        component: myinputnumber
    }
]
export default new Router({
    routes,
    mode: 'history'
})