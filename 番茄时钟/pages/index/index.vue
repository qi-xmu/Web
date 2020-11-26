<template>
	<view class="content">
		<view class="time-picker-title">设置时间</view>
		<view class="time-picker">
			<picker mode="selector" :value="index" :range="condition_list" @change="bindModeChange">
				<view class="content">选择模式:{{Mode}}</view>
				<view class="content">{{mins}}:{{secs}}</view>
			</picker>
		</view>
		
		<view>
			<button type="default" @click="bindStartCount">开始计时</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Mode:"",
				index:0,
				mins: "00",
				secs: "00",
				condition_list:["学习","工作","娱乐"],
				time_list:[30, 30, 10],
				interval_id:""
			}
		},
		onLoad() {
			
		},
		methods: {
			setMode:function(e){
				this.Mode = this.condition_list[e]
				this.mins = this.time_list[e]
				this.index = e
			},
			bindModeChange: function(e) {
				// this.Mode = this.condition_list[e.target.value]
				// this.mins = this.time_list[e.target.value]
				this.setMode(e.target.value)
			},
			bindStartCount:function(e){
				if(this.mins==0)
					this.setMode(0)
				var mins= this.time_list[this.index]
				var secs=0;
				console.log(mins)
				console.log(secs)
				this.CountDown(mins ,secs)
			},
			CountDown:function(mins,secs){
				if(mins==0&&secs==0)
					clearInterval()
				if(secs==0){
					mins--
					secs=59
				}
				secs--
				console.log(secs)
				self.setInterval(this.CountDown(),1000)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.time-picker-title {
		margin-top: 40rpx;
		font-size: 60rpx;
		font-weight: 700;
	}
</style>
