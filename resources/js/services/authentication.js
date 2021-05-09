const USER_KEY = 'USER_KEY'
const ADMIN_KEY = 'ADMIN_KEY'

export async function getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY))
}

export function getAdmin() {
    return JSON.parse(sessionStorage.getItem(ADMIN_KEY))
}

export function outUser() {
    return sessionStorage.removeItem(USER_KEY)
}

export function outAdmin() {
    return sessionStorage.removeItem(ADMIN_KEY)
}

export function logInUser(user) {
    return sessionStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function logInAdmin(admin) {
    return sessionStorage.setItem(ADMIN_KEY, JSON.stringify(admin))
}
