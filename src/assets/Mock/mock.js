const Mock = require("mockjs");
const Random = Mock.Random;
//设置请求延时
Mock.setup({
    timeout:500
});

//使用Mockjs模拟数据
Mock.mock('/api/data', "get", () => {
        return Mock.mock({
            'sim-data|30':[{
            'ID|1-30': 1,
            'process|1': ['测试结果', 'H-E2LB', '新建测试', '项目审核', '二期审核'],
            'type|1': ['auto', '开发测试', '模具'],
            'customer|1': ['深圳市燕麦股份有限公司', '深圳腾讯股份有限公司', '臻鼎科技有限公司'],
            'name': '@cname',
            'prop|1': ['公开项目', '私有项目'],
            Time: Random.date('yyyy-MM-dd'),
            'check|1': ['待审核', '已审核', '无']
            }]
        })
        });
