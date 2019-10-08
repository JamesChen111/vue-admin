<template>
  <div
    class="dropdown"
    :class="{ open: isOpen }"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
  <!-- 将slot元素作为承载分发内容的出口 -->
    <slot name="title">
      <a
        class="dropdown-toggle"
        data-toggle="dropdown"
        href="javascript:void(0)"
      >
        <i :class="icon"></i>
        <p class="notification">
          {{ title }}
          <b class="caret"></b>
        </p>
      </a>
    </slot>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "drop-down",
  props: {
    title: String,
    icon: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    }
  }
};

</script>
