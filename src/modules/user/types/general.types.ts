export type Account = {
    user?: string
    username: string
    password: string | number

    email: string | number
    phone?: string | number | Array<string | number>

    recoveryCodes?: string[]
    extra?: string

    //Numbers
    cardNumber?: `${string}-${string}-${string}-${string}`
    cardExpiration?: `${string}/${string}`
    cardPassword?: string
    cardtype?: 'debit' | 'credit'
    cardCVV?: number
    cardOnlinePassword?: string

    //booleans
    isCard?: boolean
    isGoogleOAuth?: boolean
    isFacebookOAuth?: boolean
}