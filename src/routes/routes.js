import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import BasicDetails from "@/pages/BasicDetails";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Orders from "@/pages/Orders";
import Login from "@/pages/login";
import PM from "@/components/PM";
import Stepper from "@/pages/Stepper";
import StandardTable from "@/components/Tables/StandardTable";
import WaterFall from "@/pages/WaterFall";
import ImageText from "@/pages/ImageText";
import VideoAudio from "@/pages/VideoAudio";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { title: "仪表盘" }
      },
      {
        path: "user",
        name: "UserProfile",
        component: UserProfile,
        meta: { title: "我的资料" }
      },
      {
        path: "table",
        name: "TableList",
        component: TableList,
        meta: { title: "列表" }
      },
      {
        path: "stepper",
        name: "Stepper",
        component: Stepper,
        meta: { title: "分步列表" }
      },
      {
        path: "basicDetails",
        name: "basicDetails",
        component: BasicDetails,
        meta: { title: "基础详情" }
      },
      {
        path: "imageText",
        name: "imageText",
        component: ImageText,
        meta: { title: "图文详情" }
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          title: "基础设置",
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
        meta: { title: "提示" }
      },
      {
        path: "orders",
        name: "orders",
        component: Orders,
        meta: { title: "仪表盘2" }
      },
      {
        path: "pm",
        name: "pm",
        component: PM,
        meta: { title: "简单列表" }
      },
      {
        path: "standard",
        name: "StandardTable",
        component: StandardTable,
        meta: { title: "标准列表" }
      },
      {
        path: "video",
        name: "video",
        component: VideoAudio,
        meta: { title: "音视频" }
      },
      {
        path: "waterfall",
        name: "WaterFall",
        component: WaterFall,
        meta: { title: "瀑布流" }
      }
    ]
  },
  {
    path: "/login",
    component: Login
  }
];

export default routes;
