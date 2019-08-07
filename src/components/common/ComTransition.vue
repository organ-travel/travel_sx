<template>
  <section class="m-com-transition">
    <!-- <transition v-for="(item, index) in customNav" :key="index" name="fade">
      <slot v-if="actIndex == index" :name="item.name"></slot>
    </transition> -->
    <transition name="fade">
      <slot></slot>
    </transition>
  </section>
</template>
<script>
export default {
  // props: {
  //   customNav: {
  //     type: Array,
  //     default () {
  //       return []
  //     }
  //   },
  //   actIndex: {
  //     type: Number,
  //     default: 0
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
.m-com-transition {
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    display: none;
  }
}
</style>
