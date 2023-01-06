<template>
  <van-field v-model="id" placeholder="请输入id" />
  <van-button @click="handleClick" type="primary">主要按钮</van-button>

  <hr />
  <div v-for="(item, index) in getChecked()" :key="index">
    <p>姓名:{{ item.name }}</p>
    <p>id:{{ item.id }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { showNotify } from "vant";

// 输入的id
let id = ref("");
// 愿数据
let data = reactive([
  {
    name: "张三",
    id: 1,
    active: false,
  },
  {
    name: "李四",
    id: 2,
    active: false,
  },
  {
    name: "王五",
    id: 3,
    active: false,
  },
]);

let isSigninArray = ref([]);

let handleClick = () => {
  let { value } = id;
  let result = data.filter((item) => item.id == value);
  if (result.length) {
    result[0].active = true;
  } else {
    showNotify({ message: "不存在!" });
  }
  id.value = "";
};

let getChecked = () => {
  return data.filter((item) => item.active);
};
</script>

<style lang="scss" scoped></style>
