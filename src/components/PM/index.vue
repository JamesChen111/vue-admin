<template>
  <div id="pm">
    <div class="content">
      <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
          <md-card>
            <md-card-header data-background-color="blue">
              <h4 class="title">项目列表</h4>
              <p class="category">项目列表副标题</p>
            </md-card-header>
            <md-card-content>
              <mu-container>
                <mu-text-field v-model="value" placeholder="搜索"></mu-text-field>
                <br />
                <mu-button color="#2196f3" @click="search">搜索</mu-button>
              </mu-container>
              <mu-container class="table-container">
                <mu-paper :z-depth="1">
                  <mu-data-table
                    class="myTable"
                    :columns="columns"
                    :sort.sync="sort"
                    @sort-change="handleSortChange"
                    :data="list.slice((current-1)*10, current*10)"
                  >
                    <template slot-scope="scope">
                      <td class="is-center">{{scope.row.ID}}</td>
                      <td class="is-center">{{scope.row.Time}}</td>
                      <td class="is-center">{{scope.row.check}}</td>
                      <td class="is-center">{{scope.row.customer}}</td>
                      <td class="is-center">{{scope.row.name}}</td>
                      <td class="is-center">{{scope.row.prop}}</td>
                      <td class="is-center">{{scope.row.type}}</td>
                      <td class="is-center">{{scope.row.process}}</td>
                      <td class="is-center">
                        <span style="padding-right:5px;color:#2196f3;cursor:pointer">删除</span>
                        <span>|</span>
                        <span style="padding-left:5px;color:#2196f3;cursor:pointer">编辑</span>
                      </td>
                    </template>
                  </mu-data-table>
                </mu-paper>
              </mu-container>
              <mu-flex justify-content="center" style="margin: 32px 0;">
                <mu-pagination
                  raised
                  :total="pageCount"
                  :current.sync="current"
                  :page-size="10"
                  @change="handleCurrentChange"
                ></mu-pagination>
              </mu-flex>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.scss";
export default {
  name: "pm",
  data() {
    return {
      current: 1,
      pageCount: 1,
      values:[],
      value: "",
      selects: [],
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "编号", width: 65, name: "name" },
        {
          title: "日期",
          name: "calories",
          width: 120,
          align: "center",
          // cellAlign:'center',
          sortable: true
        },
        {
          title: "审核情况",
          name: "fat",
          width: 120,
          align: "center",

          sortable: true
        },
        {
          title: "公司",
          name: "carbs",
          width: 120,
          align: "center",
          // cellAlign:'center',
          sortable: true
        },
        {
          title: "负责人",
          name: "protein",
          width: 120,
          align: "center",
          sortable: true
        },
        {
          title: "项目属性",
          name: "iron",
          width: 120,
          align: "center",
          sortable: true
        },
        {
          title: "项目类型",
          name: "iron",
          width: 120,
          align: "center",
          sortable: true
        },
        {
          title: "进度",
          name: "iron",
          width: 120,
          align: "center",
          sortable: true
        },
        {
          title: "操作",
          name: "iron",
          width: 120,
          align: "center",
          sortable: true
        }
      ],
      list: []
    };
  },
  created() {
    this.handleUserList();
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    },
    //获取数据
    handleUserList() {
      this.$axios
        .get("/api/data")
        .then(res => {
          this.list = res.data["sim-data"];
          this.values = this.list;
          this.pageCount = this.list.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //设置当前页
    handleCurrentChange(currentPage) {
      this.current = currentPage;
    },
    //按搜索词筛选数据
    search() {
      let searchText = this.value;
      if (searchText) {
        this.list = this.values.filter(item => {
          return Object.keys(item).some(key => {
            return String(item[key]).toLowerCase().indexOf(searchText) > -1;
          })
        })
        this.pageCount = this.list.length;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
#pm {
  .md-layout {
    .container {
      justify-content: flex-end;
    }
  }
}
</style>