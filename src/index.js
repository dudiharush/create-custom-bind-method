function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.logFirstName = function () {
  console.log(this.firstName);
}

Person.prototype.logFirstName.specificBind = function (context) {
  return () => this.call(context);
}

Function.prototype.customBind = function (context) {
  let self = this;
  return () => self.call(context);
}


let person = new Person("Jim");

setTimeout(person.logFirstName.bind(person), 1000);
setTimeout(person.logFirstName.specificBind(person), 2000);
setTimeout(person.logFirstName.customBind(person), 3000);
