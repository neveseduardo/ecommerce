import messages from 'src/utils/messages'
import methods from 'src/utils/globalMethods'
import moment from 'moment'

const functions = {
    ...methods.methods,
    isCPF(cpf) {
        let numeros
        let digitos
        let soma
        let resultado
        let digitos_iguais = 1

        cpf = cpf
            .replace('.', '')
            .replace('.', '')
            .replace('-', '')
        cpf = cpf.trim()

        if (cpf.length < 11) {
            return false
        }

        for (let i = 0; i < cpf.length - 1; i++) {
            if (cpf.charAt(i) != cpf.charAt(i + 1)) {
                digitos_iguais = 0
                break
            }
        }

        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9)
            digitos = cpf.substring(9)
            soma = 0

            for (let i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i
            }

            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

            if (resultado != digitos.charAt(0)) {
                return false
            }

            numeros = cpf.substring(0, 10)
            soma = 0

            for (let i = 11; i > 1; i--) {
                soma += numeros.charAt(11 - i) * i
            }

            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

            if (resultado != digitos.charAt(1)) {
                return false
            }

            return true
        } else {
            return false
        }
    },
    isCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '')
        if (cnpj == '') return false
        if (cnpj.length != 14) {
            return false
        }

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false

        // Valida DVs
        var tamanho = cnpj.length - 2
        var numeros = cnpj.substring(0, tamanho)
        var digitos = cnpj.substring(tamanho)
        var soma = 0
        var pos = tamanho - 7

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2) {
                pos = 9
            }
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
        if (resultado != digitos.charAt(0)) {
            return false
        }

        tamanho = tamanho + 1
        numeros = cnpj.substring(0, tamanho)
        soma = 0
        pos = tamanho - 7

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2) {
                pos = 9
            }
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
        if (resultado != digitos.charAt(1)) {
            return false
        }

        return true
    },
    isEmpty(value) {
        if (value === undefined || value === null || value === '') return true
        if (this.isNumber(value) && Number(value) === 0) return true
        return false
    },
    required(value) {
        return !this.isEmpty(value)
    },
    isEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    },
    password(password) {
        return password.length < 6
    },
    somenteNumero(evt) {

        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);

        var regex = /^[0-9.]+$/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();

        }
    },
    isNumber(number) {
        return !isNaN(number) && !isNaN(Number(number))
    },
    minChar(str, min) {
        return String(str).length > Number(min)
    },
    minValue(value, min) {
        if (!this.isNumber(value) || !this.isNumber(min)) return false
        let v = Number(value),
            m = Number(min)
        return v >= m
    },
    maxValue(value, max) {
        if (!this.isNumber(value) || !this.isNumber(max)) return false
        let v = Number(value),
            m = Number(max)
        return v <= m
    },
    minDate(date, minDate) {
        if (!this.isDate(date) || !this.isDate(minDate)) return true
        let gd = this.dateBRtoISO(date),
            md = this.dateBRtoISO(minDate)
        return moment(gd).isBefore(md)
    },
    maxDate(date, maxDate) {
        if (!this.isDate(date) || !this.isDate(maxDate)) return true
        let gd = this.dateBRtoISO(date),
            md = this.dateBRtoISO(maxDate)
        return moment(gd).isBefore(md)
    },
    currentDate(date) {
        if (this.isEmpty(date) || !this.isDate(date)) return true
        return moment(this.dateBRtoISO(date)).isAfter(moment().format('YYYY-MM-DD'))
    },
    maxFileSize(file, max) {
		console.log('chegay no maxFileSize')
        file = Array.isArray(file) ? file[0] : file
        let size = file.size
        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
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
    }
}

export const makeRule = (rules) => {
    let rule = {}

    Object.entries(rules).map(([k, v]) => {
        let rulesArr = []
        v.map(x => {
            rulesArr.push({
                trigger: 'blur',
                required: x.includes('required'),
                validator: (rule, value, callback) => {
                    let [func, param] = x.split(':')
                    if (param === undefined && functions[func] !== undefined && !functions[func](value)) {
                        return callback(new Error(messages[func]));
                    }
                    if (param !== undefined && functions[func] !== undefined && !functions[func](value, param)) {
                        return callback(new Error(messages[func](param)));
                    }
                    return callback()
                }
            })
        })
        rule[k] = rulesArr
    })

    return rule
}
