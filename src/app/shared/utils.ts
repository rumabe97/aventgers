export function _clean(value : any): any {
    const cleaned = {};
    const keys = Object.keys(value);

    keys.forEach(key => {
        if (value[key]) {
            // @ts-ignore
            cleaned[key] = value[key];
        }
    })
    return cleaned;
}