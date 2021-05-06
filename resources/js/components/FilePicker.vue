<template>
    <div class="file-picker">
        <div class="file-picker-input">
            <input
                ref="file"
                :multiple="multiple"
                type="file"
                @change="filesChange($event.target.files)"
                :accept="accepted"
                :disabled="disabled"
            />
            <button
                class="btn btn-primary btn-round btn-block"
                @click.prevent="openFileDialog"
                :disabled="disabled"
            >
                <i class="fa fa-upload mr-2"></i>
                Selecionar
            </button>
        </div>

        <div
            v-for="(item, index) in fileList"
            :key="index"
            class="file-item"
            :class="{ hasError: !isTooLarge(item.size) }"
        >
            <span>{{ item.name }} {{ bytesToSize(item.size) }}</span>
            <i
                @click.prevent="confirmRemoveFile(index)"
                class="fa fa-times"
            ></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accept: {
            type: Array,
            default: () => [
                'application/pdf',
                'text/plain',
                'text/html',
                'image/jpeg',
                'image/png',
                'audio/mpeg',
                'audio/ogg',
                'audio/*',
                'video/mp4',
                'application/octet-stream',
            ],
        },
        multiple: {
            type: Boolean,
            default: () => false,
        },
        maxFileSize: {
            type: String,
            default: () => '2MB',
        },
        disabled: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            loading: false,
            description: 'Somente arquivos de até 2MB',
            inputLabel: 'Clique para selecionar um arquivo...',
            fileList: [],
        };
    },
    computed: {
        accepted() {
            return this.accept.join(',');
        },
    },
    methods: {
        isTooLarge(size) {
            let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            let { maxFileSize: max } = this;
            let maxExt = max.replace(/[^a-zA-Z]+/g, '');
            let maxValue = parseInt(max.replace(/[^0-9]+/g, ''));
            let index = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
            let sizeOfFile = Math.round(size / Math.pow(1024, index), 2);
            let indexOf = sizes.indexOf(maxExt);

            if (index > indexOf) return false;
            if (index === indexOf) {
                if (sizeOfFile > maxValue) {
                    return false;
                }
            }
            return true;
        },
        bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },
        filesChange(fileList) {
            this.fileList = this.getFiles(fileList);
            this.inputLabel = this.getFileName(this.fileList);
            this.$emit('input', this.fileList);
        },
        clearFiles() {
            this.$refs.file.value = '';
            this.fileList = [];
            this.inputLabel = 'Clique para selecionar um arquivo...';
        },
        getFiles(fileList) {
            if (fileList.length === 0) return this.clearFiles();
            let files = [];
            Array.from(Array(fileList.length).keys()).map((x) => {
                files.push(fileList[x]);
            });
            return files;
        },
        setFile(files) {
            this.fileList = files;
            this.filesChange(files);
        },
        getFileName(files) {
            if (files === undefined)
                return 'Clique para selecionar um arquivo...';
            if (files.length < 1) return 'Clique para selecionar um arquivo...';
            let names = [];
            files.map((file) => names.push(file.name));
            names = names.join(', ');
            return names.length > 20 ? `${names.slice(0, 20)}...` : names;
        },
        openFileDialog() {
            if (!this.disabled) {
                this.$refs.file.click();
            }
        },
        confirmRemoveFile(index) {
            const options = {
                title: 'Confirma?',
                cancelLabel: 'Cancelar',
                okLabel: 'Remover',
            };
            this.$dialogs
                .confirm('Deseja realmente remover este arquivo?', options)
                .then((res) => (res.ok ? this.removeFile(index) : false));
        },
        removeFile(index) {
            this.fileList = this.getFiles(
                this.fileList.filter((x, i) => index !== i)
            );
            this.inputLabel = this.getFileName(this.fileList);
            this.$emit('input', this.fileList);
        },
    },
    mounted() {
        // console.log(this.multiple, 'mandei aqui');
        // console.log(this.disabled);
    },
};
</script>

<style lang="scss">
.file-picker {
    .file-picker-input {
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        margin-bottom: 0.8rem;
        cursor: pointer;
		overflow: hidden;
		max-width: 100%;

        input[type='file'] {
            display: none;
        }

        .file-picker-label {
            display: block;
            align-items: center;
            padding-left: 1rem;
			overflow-x: hidden;
			flex: 1
        }

        .btn {
            margin-bottom: 0 !important;
            margin-top: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }

    .file-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        background-color: #ddd;
        padding: 5px;
        font-size: 0.8rem;

        span {
            flex: 1;
            font-size: 0.7rem;
            line-height: 1rem;
        }

        i {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #c2c2c2;
            background-color: #fbfbfb;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #c2c2c2;
        }
    }
    .file-item.hasError {
        background-color: crimson;
        color: #fff;
    }
}

.el-form-item.is-error .file-picker .btn {
	color: #ef8157;
    border-color: #ef8157 !important;
	background-color: rgba(239, 129, 87, 0.3) !important;
}
.el-form-item.is-error .file-picker .btn:hover {
	color: #ef8157 !important;
}
</style>