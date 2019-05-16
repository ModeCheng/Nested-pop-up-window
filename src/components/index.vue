<template>
	<div>
		
		{{ promptIn }}
		
		<el-button type="text" @click="outerVisible = true">点击打开</el-button>

		<el-dialog title="外层" :visible.sync="outerVisible">

			<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					下拉<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<!-- <el-dropdown-item>ss</el-dropdown-item> -->
					<el-dropdown-item v-for='dataList in dataLists'>{{dataList}}</el-dropdown-item>

					<el-button type="text" @click="openList" class='text'>添加</el-button>

				</el-dropdown-menu>
			</el-dropdown>

			<div slot="footer" class="dialog-footer">
				<el-button ref='btn' @click="outerVisible = false">取 消</el-button>
				<el-button type="primary" @click="openIn">打开内层 Dialog</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				outerVisible: false,
				innerVisible: false,
				dropPopover: true,
				dataLists: [],
				promptIn: '',
			};
		},
		methods: {
			openList() {
				this.$prompt('请输入', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					this.dataLists.push(value);
				})
			},
			openIn() {
				this.$prompt('请输入', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					this.promptIn = value;
					this.outerVisible = false;
				})
			}
		}
	}
</script>
<style scoped="scoped">
	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.text {
		text-align: center;
		width: 100%;
	}
</style>
