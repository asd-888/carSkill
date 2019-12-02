<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-29 19:40:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-01 20:52:25
 * @Description: 
 -->
<template>
  <div class="home" ref="roll">
    <div class="roll">
      <List v-for="(item,index) in data" :key="index" :data="item" ref="A" :ball="ball"></List>
    </div>
    <div class="floor">
      <p>#</p>
      <p v-for="(item,index) in data" :key="index" @click="to(index)">{{item.title}}</p>
    </div>
    <div :class="[isShow?'show':'shade']" class="box">
      <PopUp v-for="(item,index) in classify " :key="index" :item="item" :backs=backs></PopUp>
    </div>
  </div>
</template>
<script>
import List from "../components/list";
import PopUp from "../components/popUp";
import Axios from "axios";
import BScroll from "better-scroll";
import { Loading } from 'element-ui';
export default {
  props: {},
  components: {
    List,
    PopUp
  },
  data() {
    return {
      data: [],
      isShow: false,
      classify: {}
    };
  },
  computed: {},
  methods: {
    get() {
      Axios.get(
        "https://baojia.chelun.com/v2-car-getMasterBrandList.html"
      ).then(res => {
        if (res.data.code == 1) {
          let arr = [];
          let brr = [];
          res.data.data.map((item, index) => {
            arr.push(item.Spelling[0]);
            arr = [...new Set(arr)];
          });
          arr.map(item1 => {
            brr = [];
            res.data.data.map((item, index) => {
              if (item1 == item.Spelling[0]) {
                brr.push(item);
              }
            });
            this.data.push({ title: item1, children: brr });
          });
        } else {
          alert(res.data.data);
        }
      });
    },
    to(i) {
      let LH = this.$refs.A;
      let el = LH[i].$el;
      this.scroll.scrollToElement(el, 1000, 0, 0);
    },
    ball(id, i) {
      Axios.get(
        `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`
      ).then(res => {
        if (res.data.code === 1) {
          this.classify = res.data.data;
           
        } else {
          alert(res.data.msg);
        }
      });
      this.isShow = true;
    },
    backs(){
      this.isShow=false
    }
  },
  created() {
  this.loading=Loading.service(this.$refs.A);
  this.get()
   
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.roll, {
        scrollbar: true,
        click: true
      }),
      this.loading.close();
    });
   
  }
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
.roll {
  width: 100%;
  height: auto;
}
.floor {
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: auto;
  color: #666666;
  p {
    line-height: 22px;
  }
}
.box {
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
}
.shade {
  transition-delay: 2s;
  transition-duration: 1s;
  transform: translateX(100%);
}
.show {
  transition-delay: 2s;
  transition-duration: 2s;
  transition-timing-function: linear;
  transform: translateX(0%);
}
</style>