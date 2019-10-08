<template>
  <div id="basic-form">
    <div class="basic-form-content">
      <div style="width: 100%; background: #fff; border-bottom:1px #ccc solid;padding:20px 0;">
        <div class="title" style="font-size:18px;font-weight:500;padding-bottom:30px">退款详情</div>
        <mu-flex class="flex-wrapper" align-items="center">
          <mu-flex class="flex-demo" justify-content="start" fill>
            <span>取货单号：</span>
            <span>12345678</span>
          </mu-flex>
          <mu-flex class="flex-demo" justify-content="start" fill>
            <span>状态：</span>
            <span>已取货</span>
          </mu-flex>
          <mu-flex class="flex-demo" justify-content="start" fill>
            <span>销售单号：</span>
            <span>987456123</span>
          </mu-flex>
        </mu-flex>
      </div>

      <div style="width: 100%; background: #fff; border-bottom:1px #ccc solid;padding:20px 0;">
        <div class="title" style="font-size:18px;font-weight:500;padding-bottom:30px">用户信息</div>
        <mu-flex class="flex-wrapper" align-items="center">
          <mu-flex class="flex-demo" justify-content="start" fill>
            <span>用户姓名：</span>
            <span>李白</span>
          </mu-flex>
          <mu-flex class="flex-demo" justify-content="start" fill>
            <span>电话：</span>
            <span>18575568297</span>
          </mu-flex>
          <mu-flex class="flex-demo" justify-content="start" fill>
            <span>常用快递：</span>
            <span>菜鸟驿站</span>
          </mu-flex>
        </mu-flex>
        <mu-flex class="flex-demo" justify-content="start" fill>
          <span>取货地址：</span>
          <span>广东省深圳市福田区</span>
        </mu-flex>
      </div>

      <div style="width: 100%; background: #fff;padding:30px 0;">
        <div class="title" style="font-size:18px;font-weight:500;padding-bottom:20px">退款详情</div>
        <mu-container>
          <mu-paper :z-depth="1">
            <mu-data-table :columns="columns" :data="list">
              <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td class="is-right">{{scope.row.calories}}</td>
                <td class="is-right">{{scope.row.fat}}</td>
                <td class="is-right">{{scope.row.carbs}}</td>
                <td class="is-right">{{scope.row.protein}}</td>
                <td class="is-right">{{scope.row.iron}}%</td>
              </template>
            </mu-data-table>
          </mu-paper>
        </mu-container>
      </div>

      <div style="width: 100%; background: #fff;padding:30px 0;">
        <div class="title" style="font-size:18px;font-weight:500;padding-bottom:20px">退货进度</div>
        <mu-container>
          <mu-paper :z-depth="1">
            <mu-data-table :columns="columns" :data="list">
              <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td class="is-right">{{scope.row.calories}}</td>
                <td class="is-right">{{scope.row.fat}}</td>
                <td class="is-right">{{scope.row.carbs}}</td>
                <td class="is-right">{{scope.row.protein}}</td>
                <td class="is-right">{{scope.row.iron}}%</td>
              </template>
            </mu-data-table>
          </mu-paper>
        </mu-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        // { title: "Dessert (100g serving)", width: 200, name: "name" },
        {
          title: "商品编号",
          name: "calories",
          width: 126,
          align: "left",
         
        },
        {
          title: "商品名称",
          name: "fat",
          width: 126,
          align: "left"
        },
        {
          title: "商品条码",
          name: "carbs",
          width: 126,
          align: "left"
        },
        {
          title: "单价",
          name: "protein",
          width: 126,
          align: "left"
        },
        {
          title: "数量",
          name: "iron",
          width: 126,
          align: "left"
        },
        {
          title: "金额",
          name: "iron",
          width: 126,
          align: "left"
        }
      ],
      list: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0
        }
      ]
    };
  }
};
</script>

