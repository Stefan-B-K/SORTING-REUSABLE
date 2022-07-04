import { Sorter } from "./Sorter";

export class Characters extends  Sorter{
    constructor (public data: string) {
        super()
    }
    get length (): number {
        return this.data.length
    }
    compare (indexLeft: number, indexRight: number): boolean {
        return this.data[indexLeft].toLowerCase() > this.data[indexRight].toLowerCase()
    }
    swap (indexLeft: number, indexRight: number): void {
        const charsArray = this.data.split('')

        const leftElement = charsArray[indexLeft]
        charsArray[indexLeft] = charsArray[indexRight]
        charsArray[indexRight] = leftElement

        this.data = charsArray.join('')
    }
}