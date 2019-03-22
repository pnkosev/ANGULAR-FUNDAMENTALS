abstract class Melon {
    public name: string;
    constructor(public weight: number, public sort: string) { 
        this.name = this.constructor.name;
    }

    public toString(): string {
        let endIndex = this.name.length - 5;
        let element = this.name.slice(0, endIndex);
        return `Element ${element}\nSort: ${this.sort}\n`;
    }
}

class WaterMelon extends Melon {
    constructor(weight: number, sort: string) { 
        super(weight, sort);
    }

    public getIndex(): number {
        return this.weight * this.sort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.getIndex()}.`;
    }
}

class EarthMelon extends Melon {
    constructor(weight: number, sort: string) { 
        super(weight, sort);
    }

    public getIndex(): number {
        return this.weight * this.sort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.getIndex()}.`;
    }
}

class FireMelon extends Melon {
    constructor(weight: number, sort: string) { 
        super(weight, sort);
    }

    public getIndex(): number {
        return this.weight * this.sort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.getIndex()}.`;
    }
}

class AirMelon extends Melon {
    constructor(weight: number, sort: string) { 
        super(weight, sort);
    }

    public getIndex(): number {
        return this.weight * this.sort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.getIndex()}.`;
    }
}

export {
    WaterMelon,
    FireMelon,
    EarthMelon,
    AirMelon,
}