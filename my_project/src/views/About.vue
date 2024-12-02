<template>
  <div>
    <h1>
      我是关于我页面。。。。。。正在开发中
      在前端vue2中 
      const test = {
      ...this.model,
      test1: this.model.id,
      };

      // 删除 test 的 id 属性
      delete test.id
    </h1><br>
    <h1>
      这样可以删除test的id属性且赋值上this.model的值的所有其他属性
    </h1><br>
    <h1>
      前端处理数组数据的常用方法:<br>
      pop就是删除数组中的最后一个元素<br>
      shift就是删除数组中的第一个元素<br>
      push就是让某个对象或者数据添加到数组中(这种方法是添加到数组的最后)<br>
      unshift就是让某个对象或者数据添加到数组中(这种方法是添加到数组的第一个位置)<br>
      splice就是删除数组中的某个元素<br>
      slice就是截取数组中的某个元素<br>
      sort就是排序数组中的元素<br>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',  // 组件名称
};
</script>