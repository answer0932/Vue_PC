import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store'
changeAnimal($event) {
            // vm.items[vm.yearAnimal - 1].nums = "01.13.25.37.49"; //本年
            for (let i = $event; i <= this.tableDataList.length; i++) {
                var temp = 12 - parseInt(i) + parseInt($event);
                this.tableDataList[i - 1].nums =
                    (temp >= 10 ? temp : "0" + temp) +
                    "." +
                    (temp + 12) +
                    "." +
                    (temp + 24) +
                    "." +
                    (temp + 36);
            }
            for (var i = 0; i < $event - 1; i++) {
                //从本年开始 倒
                //vm.yearAnimal = 9
                var temp = parseInt($event) - parseInt(i);
                this.tableDataList[i].nums =
                    (temp >= 10 ? temp : "0" + (temp - 1)) +
                    "." +
                    (temp - 1 + 12) +
                    "." +
                    (temp - 1 + 24) +
                    "." +
                    (temp - 1 + 36);
            }
            this.tableDataList[$event - 1].nums = "01.13.25.37.49"; //本年
            this.currentAnimal = this.tableDataList[$event - 1];
}
Vue.prototype.$http = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
