<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item>
                            <view class="swiper-item red">
														</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item green"></view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item yellow"></view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>

       
    </view>
</template>

<script>
export default {
    data() {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500
        }
    },
    methods: {
    }
}
</script>

<style>
.swiper-item
{
	height:250px;
},
.green{
	background-color: #1CA261;
}
.red{
	background-color: #DB4E42;
},
.yellow{
	background-color: #FFCD40; 
}
</style>
