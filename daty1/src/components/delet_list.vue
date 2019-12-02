<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-02 09:02:38
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-02 10:22:54
 * @Description: 
 -->
<template>
    <div class="list_s">
        <p class="title_s">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
        <div class="content_s">
                <div>
                    <p><span>{{item.market_attribute.year}}款</span>{{item.car_name}}</p>
                    <p><span>{{item.horse_power}}马力</span><span>{{item.gear_num}}档</span><span>{{item.trans_type}}</span></p>
                    <p><span>指导价 {{item.market_attribute.dealer_price_min}}</span><span>{{item.market_attribute.dealer_price_max}}</span></p>
                </div>
                <div>
                    <p>询问低价</p>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["item"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this.item)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .list_s{
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        .title_s{
            width: 100%;
            height: 45px;
            line-height: 45px;
            color: #bdbdbd;
        }
    }
    .content_s{
        width: 100%;
        flex: 1;
        background: #fff;
        display: flex;
        flex-direction: column;
        div:first-child{
            width: 100%;
            height: 60%;
            border-bottom: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
                width: 90%;
            }
            p:first-child{
                
                font-size: 18px;
            }
           
             p:nth-child(2){
                font-size: 14px;
                color: #bdbdbd;
            }
            p:last-child{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                span:first-child{
                    color: #818181;
                    font-size: 14px;
                }
                span:last-child{
                    margin-left: 5px;
                    font-size: 20px;
                    color: red;
                    
                }
            }
        }
        div:last-child{
            width: 100%;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                color: aqua;
                font-size: 18px;
            }
        }
    }
</style>