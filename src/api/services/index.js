import { auths, tenants } from "./data.js";

// 权限列表
const getAuthList = function () {
  return auths;
};

// 编辑权限
const editAuth = function (id, detail) {
  const copiedAuth = [...auths];
  const target = auths.findIndex((c) => c.id === id);
  if (copiedAuth[target]) {
    copiedAuth[target] = detail;
  }
};

// 新增权限
const addAuth = function (newAuth) {
  auths.unshift(newAuth);
};

// 获取租户列表
const getTenants = function () {
  return tenants;
};

// 更新租户
const updateTenants = function (id, detail) {
  const copied = [...tenants];
  const target = tenants.findIndex((c) => c.tenant.id === id);
  if (copied[target]) {
    copied[target] = detail;
  }
};

const addNewTenants = function (tenant) {
  tenants.unshift(tenant);
};

export {
  getAuthList,
  editAuth,
  addAuth,
  getTenants,
  updateTenants,
  addNewTenants
};
