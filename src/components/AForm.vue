<template>
    <el-form :model="form" label-width="120px">
        <el-form-item :label="userEntity.name" :required="nameFormField.required">
            <el-input
                v-model="form.name"
                :type="nameFormField.type"
                :show-word-limit="nameFormField.showLimit"
                :maxlength="nameFormField.maxLength"
                :placeholder="nameFormField.placeholder"
            />
        </el-form-item>
        <el-form-item :label="userEntity.comment">
            <el-input
                v-model="form.desc"
                :show-word-limit="commentFormField.showLimit"
                :type="commentFormField.type"
                :maxlength="commentFormField.maxLength"
                :placeholder="commentFormField.placeholder"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" :disabled="!userEntity.getEditPermission()">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import {PropType, reactive} from 'vue';
const props = defineProps({
    userEntity: {
        type: Function as PropType<any>,
        required: true,
    },
});

// do not use same name with ref
const form = reactive({
    name: '',
    desc: '',
});

function onSubmit() {
    console.log('submit!');
}

const userEntity = new props.userEntity();
const nameFormField = userEntity.getFormField('name');
const commentFormField = userEntity.getFormField('comment');
console.log(commentFormField);
</script>
