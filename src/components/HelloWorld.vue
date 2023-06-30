<script setup lang="ts">
import ATable from './ATable.vue';
import {UserEntity, UserFormEntity} from '../useHooks/usePermission.ts';
import AForm from './AForm.vue';
defineProps<{msg: string}>();
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <ATable type="ADD" text="新增用户" :userEntity="UserEntity"></ATable>
        <ATable type="Edit" text="编辑用户" :userEntity="UserEntity"></ATable>
        <ATable type="Delete" text="删除用户" :userEntity="UserEntity"></ATable>
        <div class="splitter"></div>
        <AForm :userEntity="UserFormEntity"></AForm>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}

.splitter {
    margin-bottom: 20px;
}
</style>
