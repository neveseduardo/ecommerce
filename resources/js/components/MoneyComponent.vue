<template>
    <el-input
        :placeholder="placeholder"
        type="text"
        v-model="money"
        @input="formatMoney"
        @focus="onFocus"
        @blur="onBlur"
        :autocomplete="autocomplete"
        :class="className"
        :maxlength="maxLength"
    ></el-input>
</template>

<script>
export default {
    name: 'MoneyComponent',
    props: {
        value: {
            type: [String, Number],
            default: () => '',
        },
        maxLength: {
            type: [String, Number],
            default: () => 10,
        },
        placeholder: {
            type: [String, Number],
            default: () => 'R$',
        },
        className: {
            type: String,
            default: () => '',
        },
        autocomplete: {
            type: String,
            default: () => 'off',
        },
    },
    data() {
        return {
            money: String(this.formatPrice(this.value === '' ? 0 : this.value)),
        };
    },
    methods: {
        formatMoney() {
            this.money = String(this.formatPrice(this.money));
            this.$emit('input', this.formatOutput(this.money));
        },
        formatOutput(money) {
            let [n, x] = money.split(','),
                v;
            n = n.replace(/[^0-9]/g, '');
            return Number([n, x].join('.'));
        },
        onFocus() {
            this.$emit('focus');
        },
        onBlur() {
            this.$emit('blur');
        },
    },
};
</script>

<style>
</style>