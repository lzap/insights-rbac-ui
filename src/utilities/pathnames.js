const pathnames = {
  rbac: {
    path: '/',
    title: 'User Access',
  },
  groups: {
    link: '/groups',
    path: '/groups/*',
    title: 'Groups',
  },
  'add-group': {
    link: '/groups/add-group',
    path: 'add-group',
    title: 'Create group',
  },
  'remove-group': {
    link: '/groups/remove-group/:groupId',
    path: 'remove-group/:groupId',
    title: 'Delete group',
  },
  'edit-group': {
    link: '/groups/edit/:groupId',
    path: 'edit/:groupId',
    title: 'Edit group',
  },
  'group-detail': {
    link: '/groups/detail/:groupId',
    path: '/groups/detail/:groupId/*',
    title: 'Group',
  },
  'group-detail-roles': {
    link: '/groups/detail/:groupId/roles',
    path: 'roles/*',
    title: 'Group roles',
  },
  'group-roles-edit-group': {
    link: '/groups/detail/:groupId/roles/edit-group',
    path: 'edit-group',
    title: 'Group roles - edit group',
  },
  'group-roles-remove-group': {
    link: '/groups/detail/:groupId/roles/remove-group',
    path: 'remove-group',
    title: 'Group roles - remove group',
  },
  'group-add-roles': {
    link: '/groups/detail/:groupId/roles/add-roles',
    path: 'add-roles',
    title: 'Add group roles',
  },
  'group-detail-role-detail': {
    link: '/groups/detail/:groupId/roles/detail/:roleId',
    path: '/groups/detail/:groupId/roles/detail/:roleId',
    title: 'Group role',
  },
  'group-detail-members': {
    link: '/groups/detail/:groupId/members',
    path: 'members/*',
    title: 'Group members',
  },
  'group-add-members': {
    link: '/groups/detail/:groupId/members/add-members',
    path: 'add-members',
    title: 'Add group members',
  },
  'group-members-edit-group': {
    link: '/groups/detail/:groupId/members/edit-group',
    path: 'edit-group',
    title: 'Group members - edit group',
  },
  'group-members-remove-group': {
    link: '/groups/detail/:groupId/members/remove-group',
    path: 'remove-group',
    title: 'Group members - remove group',
  },
  roles: {
    link: '/roles',
    path: '/roles/*',
    title: 'Roles',
  },
  'add-role': {
    link: '/roles/add-role',
    path: 'add-role',
    title: 'Add role',
  },
  'remove-role': {
    link: '/roles/remove/:roleId',
    path: 'remove/:roleId',
    title: 'Remove role',
  },
  'edit-role': {
    link: '/roles/edit/:roleId',
    path: 'edit/:roleId',
    title: 'Edit role',
  },
  'role-detail': {
    link: '/roles/detail/:roleId',
    path: '/roles/detail/:roleId/*',
    title: 'Role',
  },
  'role-add-permission': {
    link: '/roles/detail/:roleId/role-add-permission',
    path: 'role-add-permission',
    title: 'Add permissions',
  },
  'role-detail-remove': {
    link: '/roles/detail/:roleId/remove',
    path: 'remove',
    title: 'Remove role',
  },
  'role-detail-edit': {
    link: '/roles/detail/:roleId/edit',
    path: 'edit',
    title: 'Edit role',
  },
  'role-detail-permission': {
    link: '/roles/detail/:roleId/permission/:permissionId',
    path: '/roles/detail/:roleId/permission/:permissionId/*',
    title: 'Role permission',
  },
  'role-detail-permission-edit': {
    link: '/roles/detail/:roleId/permission/:permissionId/edit',
    path: 'edit',
    title: 'Edit permissions',
  },
  users: {
    link: '/users',
    path: '/users',
    title: 'Users',
  },
  'user-detail': {
    link: '/users/detail/:username',
    path: '/users/detail/:username/*',
    title: 'User',
  },
  'add-user-to-group': {
    link: '/users/detail/:username/add-to-group',
    path: 'add-to-group',
    title: 'Add user to a group',
  },
  'user-add-group-roles': {
    link: '/users/detail/:username/add-group-roles/:groupId',
    path: 'add-group-roles/:groupId',
    title: 'Add group roles',
  },
  'my-user-access': {
    link: '/my-user-access',
    path: '/*',
    title: 'My User Access',
  },
  'quickstarts-test': {
    link: '/quickstarts-test',
    path: 'quickstarts-test',
    title: 'Quickstarts',
  },
};

export default pathnames;
