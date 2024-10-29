export const isKeyInObj = (key: string, data: any, errMessage: string): string | void =>{
    if(key in data) {
        return
    } else {
        throw new Error(errMessage)
    }
}