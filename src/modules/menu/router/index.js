export default [
  {
    path: "/menu",
    name: "menu",
    component: () =>
      import(/* webpackChunkName:"menu"*/ "@/modules/menu/views/GroupMenu"),
  },
  {
    path: "/chats",
    name: "chats",
    component: () =>
      import(/* webpackChunkName:"chats"*/ "@/modules/menu/views/AllChats"),
  },
  {
    path: "/myprofile",
    name: "myprofile",
    component: () =>
      import(
        /* webpackChunkName:"myprofile" */ "@/modules/menu/views/MyProfile"
      ),
  },
  {
    path: "/groups",
    name: "groups",
    component: () =>
      import(/* webpackChunkName:"groups" */ "@/modules/menu/views/AllGroups"),
  },
  {
    path: "/mygroup/:id",
    name: "mygroup",
    component: () =>
      import(
        /* webpackChunkName:"mygroup" */ "@/modules/menu/views/CourseChat"
      ),
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
  },
];
