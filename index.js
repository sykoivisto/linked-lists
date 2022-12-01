import LinkedList from "./linked-list.js";

let newlist = LinkedList();
newlist.append('hello world!')
newlist.prepend('hi!')
newlist.append('yoooo')
newlist.pop()
console.log(newlist.at(0))
console.log(newlist.tail())
console.log(newlist.head())
console.log(newlist.size())
console.log(newlist.contains('hello world!'))
console.log(newlist.find('hello world!'))
console.log(newlist.toString())