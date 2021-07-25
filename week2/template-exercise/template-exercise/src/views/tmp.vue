<!-- 我的页面 -->
<template>
  <div class='my_page'>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import {V1} from "../components/fTemplate";
export default {
  // import引入的组件需要注入到对象中才能使用
  name: "fishTemplate",
  components: {},
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    console.log(this.$el)
    const v1 = new V1().mounted(this.$el)

    v1.render(
        `<div>
    {{hello}} zhende
    {{dd}}
    </div>`,
        {'hello': "hello, world", dd: 'dddd'}
    )
  },
  // 方法集合
  methods: {

  }
}
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类

</style>
