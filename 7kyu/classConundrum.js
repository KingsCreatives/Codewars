/*
Oh no! Timmy's List class has broken! Can you help Timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which Timmy calls Lists).

When Timmy calls the count property of the list it still remains at 0 when adding items.

Also it fails when Timmy tries to chain the adds e.g.

myList.add(0).add(1)
 */

// solution

class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }

  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`;
    }
    this.items.push(item);
    this.count++;
    return this; // Return the instance of the class
  }
}

const myList = new List('string')
// myList.add(2)
// myList.add(1)
// console.log(myList.items)
// console.log(myList.count)
console.log(myList.add(" ").add("World!").count);
