<template>
  <div></div>
</template>

<script>
// @ is an alias to /src
import { V1 } from "@/components/myfTemplate";

export default {
  name: "fishTemplate",
  data() {
    return {
      page: 1,
      count: 50,
    };
  },
  mounted() {
    // let newslist = [
    //   {
    //     img: "img1",
    //     title: "新闻1",
    //     time: "2021-07-11 10:00:32",
    //   },
    //   {
    //     img: "img2",
    //     title: "新闻2",
    //     time: "2021-07-12 10:00:32",
    //   },
    // ];
    // let newslist = await this.getNewsList();
    // newslist = newslist.result;
    // console.log(newslist);

    //initial FishTemplate
    let tmpl = `<div class="newslist">
    <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
    <div class="date" v-if="info.showDate">{{info.name}}</div>
    <div class="img">{{info.name}}</div>
</div>`
    console.log(tmpl)
    const v1 = new V1().mounted(this.$el); // 根目录元素dom上去
    v1.render(tmpl, {
    image: "some img",
    info: {showImage: true, showDate:false, name: "aaa"}
});
  },
  methods: {
    // getNewsList() {
    //   return fetch("https://api.apiopen.top/getWangYiNews", {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       page: this.page,
    //       count: this.count,
    //     }),
    //   }).then((response) => response.json());
    // },
  },
};
</script>

<style>
.news-item {
  display: flex;
  width: 600px;
  height: 100px;
  justify-content: space-between;
}
</style>
