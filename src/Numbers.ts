import { Sorter } from "./Sorter";

export class Numbers extends Sorter  {
    constructor (public data: number[]) {
        super()
    }

    get length (): number {                                                                           //  get   -->     call as prop
        return this.data.length
    }

    compare (indexLeft: number, indexRight: number): boolean {
        return this.data[indexLeft] > this.data[indexRight]
    }

    swap (indexLeft: number, indexRight: number): void {
        const leftElement = this.data[indexLeft]
        this.data[indexLeft] = this.data[indexRight]
        this.data[indexRight] = leftElement
    }
}