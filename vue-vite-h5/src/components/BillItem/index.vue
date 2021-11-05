<template>
    <div class="item">
        <div class="header-date">
            <div class="date">
                2021-06-11

            </div>
            <div class="money">
                <span>
                    <img src="//s.yezgea02.com/1615953405599/zhi%402x.png" alt='支'/>
                    <span>¥100.00</span>
                </span>
                <span>
                    <img src="//s.yezgea02.com/1615953405599/shou%402x.png" alt="收"/>
                    <span>¥100.00</span>
                </span>
            </div>
        </div>
        <van-cell center   title="购物" icon="shopping-cart">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
                <span>+25.00</span>
            </template>
        </van-cell>
        <van-cell center   title="购物" icon="shopping-cart">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
                <span>+25.00</span>
            </template>
        </van-cell>


    </div>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="less" scoped>
    .item {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;

        .header-date {
            height: 40px;
            display: flex;
            background-color: #f9f9f9;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px 4px 10px;

            div {
                color: rgba(0, 0, 0, 0.9);
            }

            .date {
                font-weight: bold;
                font-size: 16px;
            }

            .money {
                span {
                    margin-left: 5px;
                    font-size: 14px;

                    img {
                        width: 20px;
                        margin-right: 4px;
                        vertical-align: -4px
                    }
                }
            }
        }

        /*:global {*/
        /*    .za-cell {*/
        /*        &::after {*/
        /*            left: 0;*/
        /*        }*/

        /*        &:active {*/
        /*            background-color: #e6e6e6;*/
        /*        }*/

        /*        .za-cell__inner:active {*/
        /*            background-color: unset;*/
        /*        }*/

        /*        .za-cell__title {*/
        /*            display: flex;*/
        /*            align-items: center;*/
        /*            padding: 10px 0;*/
        /*        }*/

        /*    }*/
        /*}*/

        .item-icon {
            font-size: 24px;
            color: #007fff;
            vertical-align: -2px;
            margin-right: 10px;
        }
    }

</style>