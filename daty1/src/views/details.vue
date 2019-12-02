<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-01 19:42:16
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-02 10:20:18
 * @Description: 
 -->
<template>
  <div class="list">
    <div class="header">
      <div class="img">
        <img :src="data.CoverPhoto" alt />
      </div>
      <div class="price">
        <div>
          <p>{{data.market_attribute.dealer_price}}</p>
          <p>
            <span>指导价</span>
            <span>{{data.market_attribute.official_refer_price}}</span>
          </p>
        </div>
        <div>
          <p>{{data.BottomEntranceTitle}}</p>
        </div>
      </div>
      <div class="details_list">
        <div class="title">
          <p>全部</p>
          <p>2019</p>
        </div>
        <div class="content">
          <Delet v-for="(item,index) in list" :key="index" :item=item></Delet>
        </div>
      </div>
    </div>
    <div class="bootm">
      <p>询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import Delet from "../components/delet_list";
export default {
  props: {},
  components: {
    Delet
  },
  data() {
    return {
      data: [],
      list:[]
    };
  },
  computed: {},
  methods: {},
  created() {
    Axios.get(
      `https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.$route.query.SerialID}`
    ).then(res => {
      if (res.data.code === 1) {
        this.data = res.data.data;
        this.list=res.data.data.list
      }
      console.log(this.data);
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.list {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #eee;
}
.header {
  width: 100%;
  height: 92%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  .img {
    width: 100%;
    height: 28%;
    background: #ccc;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .price {
    width: 100%;
    height: 10%;
    background: #fff;
    display: flex;
    margin-bottom: 10px;
    z-index: 99;
    flex-shrink: 0;
    div:first-child {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: 100%;
        margin-left: 20px;
      }
      p:first-child {
        font-size: 20px;
        color: red;
      }
      p:last-child {
        color: #eee;
      }
    }
    div:last-child {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 90%;
        height: 35px;
        background: #00afff;
        text-align: center;
        line-height: 35px;
        color: #fff;
        border-radius: 10px;
      }
    }
  }
  .details_list {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      height: 45px;
      display: flex;
      background: #fff;
      p {
        width: 60px;
        text-align: center;
        line-height: 45px;
      }
    }
    .content{
        width: 100%;
        // flex: 1;
        height: auto;
    }
  }
}
.bootm {
  width: 100%;
  height: 8%;
  background: #3aacff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
  }
  p:first-child {
    font-size: 20px;
  }
  p:last-child {
    font-size: 14px;
  }
}
</style>