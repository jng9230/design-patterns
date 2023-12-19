abstract class FilterStrategy {
    abstract removeValue(val: any): boolean;
}

class RemoveNegativeStrategy extends FilterStrategy {
    removeValue(val: number) {
        return val < 0
    }
}

class RemoveOddStrategy extends FilterStrategy {
    removeValue(val: number): boolean {
        return Math.abs(val) % 2 === 1
    }
}

class Values {
    vals: any[];
    constructor(vals: any[]) {
        this.vals = vals;
    }

    filter(strat: FilterStrategy) {
        let res: any[] = []
        for (const n of this.vals) {
            if (!strat.removeValue(n)) {
                res.push(n)
            }
        }
        return res
    }
}

const values = new Values([-1, 3, 4, 5, 6, -4, -5]);
console.log(values.filter(new RemoveOddStrategy()))
console.log(values.filter(new RemoveNegativeStrategy()))