<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-29 19:40:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-30 10:46:54
 * @Description: 
 -->
<template>
  <div class="home">
    <div class="roll">
      <List v-for="(item,index) in data" :key="index" :data="item" :class="item.title"></List>
    </div>
    <div class="floor">
      <p>#</p>
      <p v-for="(item,index) in data" :key="index" @click="to(item.title)">{{item.title}}</p>
    </div>
  </div>
</template>
<script>
import List from "../components/list";
import Axios from "axios";
import BScroll from "better-scroll";
export default {
  props: {},
  components: {
    List
  },
  data() {
    return {
      data: []
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
      let wrapper = document.querySelector(".roll");
      let title = document.querySelector(`.${i}`).offsetTop;
      console.log(wrapper,title)
        wrapper.scrollTop=title;
        console.log(wrapper.scrollTop)
     
    }
  },
  created() {
    this.get();

  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
.roll {
  width: 100%;
  height:100% ;overflow-y: scroll;
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
</style>