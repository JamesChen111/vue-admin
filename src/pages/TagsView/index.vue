<template>
  <div class="tags-view-wrapper">
    <router-link
      v-for="tag in visitedViews"
      ref="tag"
      :key="tag.path"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
      tag="span"
      class="tags-view-item"
      @click.middle.native="closeSelectedTag(tag)"
    >
      {{ tag.title }}
      <span
        v-if="!tag.meta.affix"
        class="iconfont icon-cross"
        @click.prevent.stop="closeSelectedTag(tag)"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tagsView",
  data() {
    return {
      // visitedViews: {}
    };
  },
  computed: {
    visitedViews() {
      console.log(this.$store.state.tagsView);
      return this.$store.state.tagsView.visitedViews;
    }
  },
  mounted() {
    this.addTags();
  },
  watch: {
    $route() {
      this.addTags();
    }
  },

  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route);
      }
      return false;
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === "Dashboard") { 
          // to reload home page
          this.$router.replace({ path: "/redirect" + view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tags-view-wrapper {
//   border-top: solid #ddd 1px;
  border-bottom: solid #ddd 1px;
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 14px;
    margin-left: 5px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background-color: #ccc;
      color: #333;
      border-color: #c2c2c2;
      &::before {
        content: "";
        background: #00d3ee;
        display: inline-block;
        width: 100%;
        height: 2px;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  .icon-cross{
      height: 16px;
      width: 16px;
      padding: 3px;
      font-size: 10px;
      &:hover{
          border-radius: 50% 50%;
          background: #f55a4e;
          color: #fff;
      }
  }
}
</style>
