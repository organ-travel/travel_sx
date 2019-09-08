<template>
  <div>
    <a v-for="(item, index) in typeArr" :key="index" :href="item.parent.type + '?name=' + item.type" :class="item.class_name" @click="changeShow(item.type)">
      <com-column :icon-class="item.icon_class" :content="item.name" :text-class="text_class"></com-column>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    typeArr: {
      type: Array,
      default () {
        return []
      }
    },
    text_class: {
      type: String,
      default: ''
    },
    actIndex: {
      type: Number,
      default: 0
    }
  },
  mounted () {
  },
  methods: {
    changeShow (type) {
      this.$emit('changeShow', type)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
