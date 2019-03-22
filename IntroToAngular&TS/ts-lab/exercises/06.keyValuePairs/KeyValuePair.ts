class KeyValuePair<T, U> {
    private result: Array<{}>;
    constructor() {
        this.result = [];
    }

    public setKeyValue(k: T, v: U): void {
        let obj = {
            key: k,
            value: v
        }
        this.result.push(obj);
    }

    public display(): void {
        this.result.forEach(r => console.log(`key = ${r['key']}, value = ${r['value']}`));
    }
}

export default KeyValuePair;