<template>
  <van-field v-model="id" placeholder="请输入id" />
  <van-button @click="handleClick" type="primary">主要按钮</van-button>

  <hr />

  <template v-for="(item, index) in data" :key="index">
    <div v-if="item.active">
      <p>姓名:{{ item.name }}</p>
      <p>id:{{ item.id }}</p>
    </div>
  </template>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
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
  if (!value) {
    showNotify({ message: "未输入!" });
    return;
  }
  if (isSigninArray.value.some((item) => item.id == value)) {
    showNotify({ message: `已签到!` });
    return;
  }
  let result = data.filter((item) => item.id == value);
  if (result.length) {
    result[0].active = true;
    isSigninArray.value.push(result[0]);
  } else {
    showNotify({ message: "不存在!" });
  }
  id.value = "";
};

watch(isSigninArray.value, (newVal, oldVal) => {
  console.log("newVal", newVal);
  console.log("oldVal", oldVal);
  if (newVal.length >= data.length) {
    showNotify({ message: "全部签到完成!!" });
  }
});
</script>

<style lang="scss" scoped></style>
