class Box<T> {
    public result: Array<T>;
    constructor() {
        this.result = [];
    }

    public add(thing): void {
        this.result.push(thing);
    }

    public remove(): T[] {
        let newResult = this.result.slice();
        newResult.pop();
        this.result = newResult;
        return this.result;
    }

    get count(): number {
        return this.result.length;
    }
}

export default Box;