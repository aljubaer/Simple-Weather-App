export type QueryParams = {
    id?: string
    data?: any
    params?: any
    force?: boolean
    onSuccess?: (res? : any) => void
    onError?: (err? : any) => void 
    onFinal?: () => void 
}