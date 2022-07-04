
import { Numbers } from "./Numbers";
import { Characters } from "./Characters";
import { LinkedList } from "./LinkedList";

const numbers = new Numbers([2, 4, -12, 0, 3, 3, 55])
numbers.sort()
console.log(numbers.data)

const chars = new Characters('HelloWorld')
chars.sort()
console.log(chars.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(0)
linkedList.add(4)

linkedList.sort()
linkedList.print()