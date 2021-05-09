// import validator from '@/utils/validator'

export default {
    methods: {
        redirect(routerName) {
            let path = routerName.includes('/') ? routerName : {
                name: routerName
            }
            return this.$router.push(path).catch(() => {})
        },
        capitalize(string) {
            string = string.toLowerCase()
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        scrollToElement(selector) {
            $('html,body').animate({
                scrollTop: $(selector).offset().top - 60
            }, 800);
        },
        treatNullFor(obj) {
            Object.entries(obj).map(([k, v], i) => obj[k] = v ?? '')
        },
        isDate(date) {
            return moment(date).isValid()
        },
        isEmpty(value) {
            if (value === undefined) return true
            if (value === null) return true
            if (value === '') return true
            if (value.length <= 0) return true

            return false
        },
        dateBRtoISO(date) {
            if (this.isEmpty(date) || !this.isDate(date)) return ''
            return date.splice(0, 10).split('/').reverse().join('-')
        },
        dateISOtoBR(date) {
            if (this.isEmpty(date) || !this.isDate(date)) return ''
            return date.splice(0, 10).split('-').reverse().join('/')
        },
        formatPrice(value) {
            if (value === '') return ''
            value = String(value).replace(/\D/g, '')
            value = (value / 100).toFixed(2).toString()
            value = value.replace(".", ",")
            value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            return `R$ ${value.replace('R$ ', '')}`
        }
    }
}
