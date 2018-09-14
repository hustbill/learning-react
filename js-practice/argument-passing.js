function setName(obj) {
    obj.name = "hua";
    obj = new Object();
    obj.name = "bowen";
}

var person = new Object();
setName(person);
console.log(person.name);  // "hua"