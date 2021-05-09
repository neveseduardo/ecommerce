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
import { Money } from 'v-money';

export default {
    name: 'MoneyComponent',
    components: { Money },
    props: {
        value: {
            type: [String, Number],
            default: () => 0,
        },
        maxLength: {
            type: [String, Number],
            default: () => 17,
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
            money: String(this.formatPrice(this.value)),
        };
    },
    watch: {
        value: function (val) {
            this.money = String(this.formatPrice(val));
        },
		money: function (val) {
			this.$emit('input', this.formatOutput(val));
		}
    },
    methods: {
        formatMoney() {
            this.money = String(this.formatPrice(this.money));
            
        },
        formatOutput(money) {
            let [n, x] = String(money).split(','),
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