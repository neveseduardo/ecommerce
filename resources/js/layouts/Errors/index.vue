<template>
    <div class="wrapper">
        <el-container>
            <el-main>
                <error-content />
            </el-main>
        </el-container>
    </div>
</template>
<script>
import ErrorContent from './components/Content.vue';

export default {
    components: {
        ErrorContent,
    },
};
</script>
