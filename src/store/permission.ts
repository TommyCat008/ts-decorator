import {defineStore} from 'pinia';

export const usePermissionStore = defineStore('permission', {
    state: () => ({
        userRoles: [],
    }),
    actions: {
        queryUserRoles() {},
    },
});
