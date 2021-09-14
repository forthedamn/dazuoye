export const auths = [
  {
    id: "device-simulator",
    name: "dsad",
    describe: "",
    status: 0,
    actions: [
      {
        action: "stop",
        name: "停止",
        describe: "停止",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "start",
        name: "启动",
        describe: "启动",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "save",
        name: "保存",
        describe: "保存",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "测试",
        describe: "点都德"
      },
      {
        name: "cli",
        describe: "收到收到收到"
      }
    ],
    parents: [
      {
        permission: "device-simulator",
        preActions: ["query", "save", "delete"],
        actions: ["query", "save"]
      }
    ],
    properties: {
      type: ["system", "default"]
    }
  },
  {
    id: "vis-configuration",
    name: "组态管理",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询列表",
        describe: "查询列表"
      },
      {
        action: "get",
        name: "查询明细",
        describe: "查询明细"
      }
    ],
    optionalFields: [],
    parents: [],
    properties: {}
  },
  {
    id: "message-gateway",
    name: "消息网关",
    describe: "",
    status: 1,
    actions: [
      {
        action: "subscribe",
        name: "订阅消息",
        describe: "订阅消息",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ]
  },
  {
    id: "ceshi",
    name: "测试",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询列表",
        describe: "查询列表"
      },
      {
        action: "get",
        name: "查询明细",
        describe: "查询明细"
      },
      {
        action: "add",
        name: "新增",
        describe: "新增"
      },
      {
        action: "update",
        name: "修改",
        describe: "修改"
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除"
      },
      {
        action: "import",
        name: "导入",
        describe: "导入"
      },
      {
        action: "export",
        name: "导出",
        describe: "导出"
      }
    ],
    optionalFields: [],
    parents: [],
    properties: {
      type: ["api"]
    }
  },
  {
    id: "protocol-supports",
    name: "协议管理",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询列表",
        describe: "查询列表"
      }
    ],
    optionalFields: [],
    parents: [],
    properties: {}
  },
  {
    id: "network-simulator",
    name: "网络模拟器",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ]
  },
  {
    id: "certificate",
    name: "证书管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "description",
        describe: "描述"
      },
      {
        name: "name",
        describe: "名称"
      },
      {
        name: "instance",
        describe: "类型"
      },
      {
        name: "configs",
        describe: "证书详情"
      }
    ]
  },
  {
    id: "dueros-product",
    name: "小度产品管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ]
  },
  {
    id: "device-product",
    name: "device-product",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询列表",
        describe: "查询列表"
      }
    ],
    optionalFields: [],
    parents: [],
    properties: {
      type: ["business"]
    }
  },
  {
    id: "device-group",
    name: "设备分组",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    parents: [],
    properties: {}
  },
  {
    id: "onenet-product",
    name: "OneNet产品管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "enable",
        name: "启用",
        describe: "启用",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "disable",
        name: "禁用",
        describe: "禁用",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "save",
        name: "保存",
        describe: "保存",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ]
  },
  {
    id: "rule-model",
    name: "规则引擎-模型",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "description"
      },
      {
        name: "type"
      },
      {
        name: "name"
      },
      {
        name: "modelType"
      },
      {
        name: "version"
      },
      {
        name: "modifyTime"
      },
      {
        name: "modifierId"
      },
      {
        name: "createTime"
      },
      {
        name: "modelMeta"
      },
      {
        name: "creatorId"
      }
    ]
  },
  {
    id: "device-firmware-manager",
    name: "设备固件信息管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "deviceName"
      },
      {
        name: "properties"
      },
      {
        name: "version"
      },
      {
        name: "createTime"
      },
      {
        name: "productId"
      },
      {
        name: "updateTime"
      }
    ],
    parents: [],
    properties: {}
  },
  {
    id: "device-alarm",
    name: "设备告警",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "deviceId",
        describe: "设备ID"
      },
      {
        name: "deviceName",
        describe: "设备名称"
      },
      {
        name: "alarmTime",
        describe: "告警时间"
      },
      {
        name: "productName",
        describe: "产品名称"
      },
      {
        name: "alarmName",
        describe: "告警名称"
      },
      {
        name: "description",
        describe: "说明"
      },
      {
        name: "alarmId",
        describe: "告警ID"
      },
      {
        name: "alarmData",
        describe: "告警数据"
      },
      {
        name: "state",
        describe: "状态"
      },
      {
        name: "productId",
        describe: "产品ID"
      },
      {
        name: "updateTime",
        describe: "修改时间"
      }
    ],
    parents: [],
    properties: {
      type: ["tenant"]
    }
  },
  {
    id: "edge-product",
    name: "边缘网关产品管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "save",
        name: "保存",
        describe: "保存",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "manufacturer",
        describe: "厂家"
      },
      {
        name: "description",
        describe: "说明"
      },
      {
        name: "classifiedId",
        describe: "所属品类ID"
      },
      {
        name: "photoUrl",
        describe: "图标地址"
      },
      {
        name: "name",
        describe: "名称"
      },
      {
        name: "classifiedName",
        describe: "所属品类名称"
      },
      {
        name: "version",
        describe: "版本"
      },
      {
        name: "model",
        describe: "型号"
      },
      {
        name: "createTime",
        describe: "创建时间"
      }
    ]
  },
  {
    id: "menu",
    name: "菜单管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "status",
        describe: "状态"
      },
      {
        name: "path",
        describe: "树路径"
      },
      {
        name: "name",
        describe: "菜单名称"
      },
      {
        name: "icon",
        describe: "图标"
      },
      {
        name: "describe",
        describe: "描述"
      },
      {
        name: "url",
        describe: "菜单对应的url"
      },
      {
        name: "parentId",
        describe: "父级ID"
      },
      {
        name: "sortIndex",
        describe: "排序序号"
      },
      {
        name: "level",
        describe: "树层级"
      },
      {
        name: "permissionExpression",
        describe: "权限表达式"
      }
    ]
  },
  {
    id: "opc-point",
    name: "OPC-UA设备点位",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "save",
        name: "保存",
        describe: "保存",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ]
  },
  {
    id: "firmware-manager",
    name: "固件管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "versionOrder",
        describe: "版本序号"
      },
      {
        name: "productName",
        describe: "产品名称"
      },
      {
        name: "description",
        describe: "说明"
      },
      {
        name: "properties",
        describe: "其他拓展信息"
      },
      {
        name: "name",
        describe: "固件名称"
      },
      {
        name: "version",
        describe: "版本号"
      },
      {
        name: "createTime",
        describe: "创建时间(只读)"
      },
      {
        name: "signMethod",
        describe: "固件文件签名方式,如:MD5,SHA256"
      },
      {
        name: "size",
        describe: "固件文件大小"
      },
      {
        name: "productId",
        describe: "产品ID"
      },
      {
        name: "url",
        describe: "固件文件地址"
      },
      {
        name: "sign",
        describe: "固件文件签名"
      }
    ]
  },
  {
    id: "permission",
    name: "权限管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "save",
        name: "保存",
        describe: "保存",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "grant",
        name: "赋权",
        describe: "赋权",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "status",
        describe: "状态"
      },
      {
        name: "optionalFields",
        describe: "可操作的字段"
      },
      {
        name: "parents",
        describe: "关联权限"
      },
      {
        name: "properties",
        describe: "其他配置"
      },
      {
        name: "name",
        describe: "权限名称"
      },
      {
        name: "describe",
        describe: "说明"
      },
      {
        name: "actions",
        describe: "可选操作"
      }
    ],
    parents: [],
    properties: {
      type: ["tenant", "api"]
    }
  },
  {
    id: "device-opt-api",
    name: "设备操作API",
    describe: "",
    status: 1,
    actions: [
      {
        action: "read-property",
        name: "读取属性",
        describe: "读取属性",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    parents: [],
    properties: {
      type: ["api"]
    }
  },
  {
    id: "device-gateway",
    name: "设备网关",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "configuration",
        describe: "其他配置"
      },
      {
        name: "name",
        describe: "名称"
      },
      {
        name: "state"
      },
      {
        name: "describe",
        describe: "描述"
      },
      {
        name: "networkId",
        describe: "网络组件id"
      },
      {
        name: "provider",
        describe: "类型"
      }
    ]
  },
  {
    id: "big-screen",
    name: "大屏管理",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询"
      }
    ],
    optionalFields: [],
    parents: [
      {
        permission: "visualization",
        preActions: ["query"],
        actions: ["query"]
      },
      {
        permission: "visualization",
        preActions: ["save"],
        actions: ["save"]
      },
      {
        permission: "visualization",
        preActions: ["delete"],
        actions: ["delete"]
      }
    ],
    properties: {
      type: ["api"]
    }
  },
  {
    id: "open-api",
    name: "openApi客户端",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "status"
      },
      {
        name: "clientName"
      },
      {
        name: "description"
      },
      {
        name: "clientId"
      },
      {
        name: "ipWhiteList"
      },
      {
        name: "username"
      },
      {
        name: "createTime"
      },
      {
        name: "secureKey"
      },
      {
        name: "userId"
      },
      {
        name: "creatorId"
      },
      {
        name: "signature"
      }
    ]
  },
  {
    id: "datasource-config",
    name: "数据源配置",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "save",
        name: "保存",
        describe: "保存",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "description",
        describe: "说明"
      },
      {
        name: "name",
        describe: "名称"
      },
      {
        name: "state",
        describe: "配置状态"
      },
      {
        name: "createTime",
        describe: "创建时间(只读)"
      },
      {
        name: "shareCluster",
        describe: "集群是否共用配置"
      },
      {
        name: "shareConfig",
        describe: "集群共用的配置"
      },
      {
        name: "creatorId",
        describe: "创建者ID(只读)"
      },
      {
        name: "creatorName",
        describe: "创建者名称(只读)"
      },
      {
        name: "clusterConfigs",
        describe: "集群独立配置信息"
      },
      {
        name: "typeId",
        describe: "类型ID"
      }
    ]
  },
  {
    id: "system-config",
    name: "系统配置",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ]
  },
  {
    id: "rule-instance",
    name: "规则引擎-实例",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "description"
      },
      {
        name: "modelVersion"
      },
      {
        name: "name"
      },
      {
        name: "modelType"
      },
      {
        name: "state"
      },
      {
        name: "createTime"
      },
      {
        name: "instanceDetailJson"
      },
      {
        name: "modelMeta"
      },
      {
        name: "creatorId"
      },
      {
        name: "modelId"
      }
    ]
  },
  {
    id: "media-channel",
    name: "流媒体通道",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    parents: [],
    properties: {
      type: ["api"]
    }
  },
  {
    id: "dictionary",
    name: "数据字典",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "status"
      },
      {
        name: "name"
      },
      {
        name: "describe"
      },
      {
        name: "classified"
      },
      {
        name: "createTime"
      },
      {
        name: "creatorId"
      }
    ]
  },
  {
    id: "report-config",
    name: "报表开发",
    describe: "",
    status: 1,
    actions: [
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ],
    optionalFields: [
      {
        name: "datasourceConfiguration",
        describe: "数据源配置"
      },
      {
        name: "status",
        describe: "状态"
      },
      {
        name: "description",
        describe: "说明"
      },
      {
        name: "configuration",
        describe: "报表配置"
      },
      {
        name: "datasource",
        describe: "数据源"
      },
      {
        name: "name",
        describe: "名称"
      },
      {
        name: "version",
        describe: "版本"
      },
      {
        name: "createTime",
        describe: "创建时间"
      },
      {
        name: "classify",
        describe: "分类"
      },
      {
        name: "creatorId",
        describe: "创建者ID"
      },
      {
        name: "permission",
        describe: "权限限制"
      }
    ]
  },
  {
    id: "ctwing-product",
    name: "Ctwing产品管理",
    describe: "",
    status: 1,
    actions: [
      {
        action: "enable",
        name: "启用",
        describe: "启用",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "disable",
        name: "禁用",
        describe: "禁用",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "query",
        name: "查询",
        describe: "查询",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "save",
        name: "保存",
        describe: "保存",
        properties: {
          supportDataAccessTypes: []
        }
      },
      {
        action: "delete",
        name: "删除",
        describe: "删除",
        properties: {
          supportDataAccessTypes: []
        }
      }
    ]
  }
];

export const tenants = [
  {
    tenant: {
      id: "9d2fa907a880dbc2dc2f0971c013a214",
      name: "苏州市威富讯电子商务有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379969983040475136.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1594344718108
    },
    members: 0
  },
  {
    tenant: {
      id: "487fd4c6a5fa2fbf268053991b40946d",
      name: "江苏智学堂研学培训有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379970095695286272.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1592793729963
    },
    members: 1
  },
  {
    tenant: {
      id: "b7db89abfbdd055c1744ed929ba406fd",
      name: "上海玥强通信科技有限公司 ",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379970332656685056.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1595215841331
    },
    members: 1
  },
  {
    tenant: {
      id: "978e99f08c4d7ca2ad6f8706a5264f7f",
      name: "舟山纵横导航设备有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379970528492933120.jpg",
      state: {
        text: "已禁用",
        value: "disabled"
      },
      createTime: 1592909278357
    },
    members: 1
  },
  {
    tenant: {
      id: "9a9dd68f01900d43907fa92fef875175",
      name: "温州市华海密封件有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379970668414914560.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1598254041234
    },
    members: 1
  },
  {
    tenant: {
      id: "216e69f82db38d101cdd7aaead49779e",
      name: "山西文旅",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1619666763858
    },
    members: 1
  },
  {
    tenant: {
      id: "57bb3f2b2c35948159dee129e918323e",
      name: "中石化华北石油工程有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379969153889488896.jpg",
      description: "",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1593588046152
    },
    members: 1
  },
  {
    tenant: {
      id: "a2092f4731c6b5c9a01911133cb1e2c6",
      name: "呼和浩特市大正金属焊割气有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379966664821723136.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1600668891355
    },
    members: 0
  },
  {
    tenant: {
      id: "b8a32fba6e78d0ef95ccf4dc26d8e57a",
      name: "靖江市华晟重金属防控有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379966851321450496.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1599026985976
    },
    members: 1
  },
  {
    tenant: {
      id: "d581291c72e00418ba222e0fa8f7f6a1",
      name: "云南靖华液态金属科技有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379966951514984448.jpg",
      state: {
        text: "已禁用",
        value: "disabled"
      },
      createTime: 1595999729613
    },
    members: 1
  },
  {
    tenant: {
      id: "e86cea037cfc50dc86a8056da89a1774",
      name: "重庆涪陵电力实业股份有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379967111607373824.png",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1611713164058
    },
    members: 2
  },
  {
    tenant: {
      id: "8a9b8d17f7ebff7f13da338ff478e7e3",
      name: "重庆千信新能源有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379967216116846592.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1597052679261
    },
    members: 1
  },
  {
    tenant: {
      id: "86796aade1260eb13043014303b8dab1",
      name: "重庆市水利水电发展有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379967350435237888.jpg",
      state: {
        text: "已禁用",
        value: "disabled"
      },
      createTime: 1598273452306
    },
    members: 1
  },
  {
    tenant: {
      id: "78c32a63be492f1f1b0fe2731def0ba1",
      name: "重庆华视鹰监控设备有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379967571240177664.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1617073590475
    },
    members: 2
  },
  {
    tenant: {
      id: "a15e46da5be2cf62be2c8b0aa6662382",
      name: "重庆长航东风船舶工业有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379967894511964160.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1617071369653
    },
    members: 1
  },
  {
    tenant: {
      id: "79b0eeadd40fabfa7deb28187a8f1f3d",
      name: "苏州锦园旅游用品有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379968744965820416.jpg",
      description: "",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1596007134940
    },
    members: 5
  },
  {
    tenant: {
      id: "a2194e109faafa38a2996d7edbea2d9f",
      name: "四川正合数字工程股份有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379970859603873792.jpg",
      description: "",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1594966342002
    },
    members: 1
  },
  {
    tenant: {
      id: "2aff1665c37dda1dbb3f808efef3e1d1",
      name: "重庆市顺达行车监控技术服务有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379967687191711744.jpg",
      description: "",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1591688022520
    },
    members: 8
  },
  {
    tenant: {
      id: "e4f6a57f246c097ce895f345667fdef3",
      name: "重庆川东船舶重工有限责任公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379968141376114688.jpg",
      state: {
        text: "已禁用",
        value: "disabled"
      },
      createTime: 1598258293646
    },
    members: 1
  },
  {
    tenant: {
      id: "2b44050272f58a9cd00017210a1ce70e",
      name: "中央人民广播电台",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1619773114401
    },
    members: 1
  },
  {
    tenant: {
      id: "389290ed136cca6237d31507f13fd5b8",
      name: "成都一路通国际旅行社有限公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379971032912515072.jpg",
      description: "",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1591687550532
    },
    members: 1
  },
  {
    tenant: {
      id: "aa9487cd67e75cab445733f8d5179dc9",
      name: "内蒙古博通达工贸有限责任公司",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379969422706626560.jpg",
      description: "",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1592794290972
    },
    members: 0
  },
  {
    tenant: {
      id: "2ef3b8f0d39d57c230832a402afd3ad6",
      name: "重庆旱獭信息技术有限公司",
      state: {
        text: "已禁用",
        value: "disabled"
      },
      createTime: 1618454895738
    },
    members: 0
  },
  {
    tenant: {
      id: "fbf37c47b28f770b08180ba041927c05",
      name: "贵州省贵定县盛源矿业有限责任公司 ",
      photo:
        "http://demo.jetlinks.cn/jetlinks/upload/20210408/1379969017608163328.jpg",
      state: {
        text: "正常",
        value: "enabled"
      },
      createTime: 1598260802640
    },
    members: 2
  },
  {
    tenant: {
      id: "418ba1fd329849c7b21e4ba6095601b3",
      name: "租户A",
      state: {
        text: "已禁用",
        value: "disabled"
      },
      createTime: 1620377765325
    },
    members: 3
  }
];
