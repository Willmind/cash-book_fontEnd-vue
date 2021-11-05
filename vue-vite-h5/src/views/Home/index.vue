<template>
    <div class="home">
        <div class="header">
            <div class="dataWrap">
                <span class="expense">总支出：<b>¥100</b></span>
                <span class="income">总收入：<b>¥100</b></span>
            </div>
            <div class="typeWrap">
                <div class="left">
                    <span class="title" @click="showPopup">类型 : 全部<van-icon name="arrow"/></span>
                </div>
                <div class="right">
                    <span class="time" @click="timeShowPopup">{{currentDate2}}<van-icon name="arrow"/></span>
                </div>
            </div>
        </div>
        <div class="contentWrap">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

                <BillItem></BillItem>
                <BillItem></BillItem>
                <BillItem></BillItem>
                <BillItem></BillItem>
                <BillItem></BillItem>
            </van-pull-refresh>

        </div>
        <van-popup v-model:show="typeShow" position="bottom" :style="{ height: '50%' }">
            <Popuptype></Popuptype>
        </van-popup>

        <van-popup v-model:show="timeShow" position="bottom" :style="{ height: '30%' }">
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    @confirm="timeConfirm"
                    @cancel="timeShow=false"

            />
        </van-popup>
        <div style="display: inline-block;position: fixed;bottom: 20%;right: 15%">
            <div class="add">
                <van-icon name="plus" />
            </div>
        </div>




    </div>
</template>

<script>
    import BillItem from "../../components/BillItem/index.vue"
    import Popuptype from "../../components/Popuptype/index.vue"
    import {Toast} from 'vant';
    import dayjs from 'dayjs'

    export default {
        name: "index",
        components: {
            BillItem,
            Popuptype
        },
        data() {
            return {
                currentDate: new Date(2021, 0, 17),
                currentDate2: null,
                count: 0,
                isLoading: false,
                typeShow: false,
                timeShow: false,

            }
        },
        methods: {
            timeConfirm(value) {
                this.currentDate2 = dayjs(value).format('YYYY-MM-DD')

                this.timeShow = false
            },
            showPopup() {
                this.typeShow = true;
            },
            timeShowPopup() {
                this.timeShow = true;
            },
            onRefresh() {
                setTimeout(() => {
                    this.isLoading = false;
                }, 1000);
            }
        },
        mounted() {
            this.currentDate2 = dayjs(this.currentDate).format('YYYY-MM-DD')
        },
    }
</script>

<style lang="less" scoped>
    .home {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 80px;

        .header {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 20px);
            height: 80px;
            background-color: #007fff;
            color: #fff;
            font-size: 14px;
            z-index: 100;
            padding: 20px 10px;

            .dataWrap {
                font-size: 14px;

                > span {
                    font-size: 12px;

                    > b {
                        font-size: 26px;
                        margin-left: 4px;
                    }
                }

                .income {
                    margin-left: 10px;
                }
            }

            .typeWrap {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;

                > div {
                    align-self: flex-start;
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 30px;
                    padding: 3px 8px;
                    font-size: 12px;
                }

                .left {
                    margin-right: 6px;
                }

                .arrow {
                    font-size: 12px;
                    margin-left: 4px;
                }
            }
        }

        .contentWrap {
            height: calc(100% - 50px);
            overflow: hidden;
            overflow-y: scroll;
            background-color: #f5f5f5;
            padding: 10px;
            margin-top: 40px;
            padding-bottom: 50px;

            /*&:global {*/
            /*    !*.za-pull {*!*/
            /*    !*    overflow: unset;*!*/
            /*    !*}*!*/
            /*}*/
        }

        .add {
            z-index: 1000;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1PX solid #e9e9e9;
            color: #007fff;
            i{
                font-size: 26px;
            }

            &:active {
                background-color: #f9f9f9;
            }
        }
    }


</style>

