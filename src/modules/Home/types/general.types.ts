export type Account = {
    user?: string
    username: string
    password: string

    email: string
    phone?: string

    securityKeys?: string[]
    recoveryCodes?: string[]
    extra?: string
}