const USER_KEY = 'USER_KEY'
const ADMIN_KEY = 'ADMIN_KEY'

export async function getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY))
}

export function getAdmin() {
    return JSON.parse(localStorage.getItem(ADMIN_KEY))
}

export function outUser() {
    return localStorage.removeItem(USER_KEY)
}

export function outAdmin() {
    return localStorage.removeItem(ADMIN_KEY)
}

export function logInUser(user) {
    return localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function logInAdmin(admin) {
    return localStorage.setItem(ADMIN_KEY, JSON.stringify(admin))
}
