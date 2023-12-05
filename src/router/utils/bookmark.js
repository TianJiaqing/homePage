export default [{
        path: 'table',
        component: () => import('@pages/bookmark/tabs/table/table_select.vue'),
        meta: {
            name: "表格查询",
            value: 1
        }
    }, {
        path: 'echarts',
        component: () => import('@pages/bookmark/tabs/echarts/echarts.vue'),
        meta: {
            name: "大屏效果",
            value: 2
        }
    }, {
        path: 'signature',
        component: () => import('@pages/bookmark/tabs/signature/index.vue'),
        meta: {
            name: "电子签名",
            value: 3
        }
    }, {
        path: 'chat',
        component: () => import('@pages/bookmark/tabs/chat/index.vue'),
        meta: {
            name: "IM聊天",
            value: 4
        }
    }, {
        path: 'rich_text',
        component: () => import('@pages/bookmark/tabs/rich_text/index.vue'),
        meta: {
            name: "富文本",
            value: 5
        }
    }, {
        path: 'login',
        component: () => import('@pages/bookmark/tabs/login/index.vue'),
        meta: {
            name: "登录页面",
            value: 6
        }
    },
    {
        path: 'submission',
        component: () => import('@pages/bookmark/tabs/submission/index.vue'),
        meta: {
            name: "表单提交",
            value: 7
        }
    }
]