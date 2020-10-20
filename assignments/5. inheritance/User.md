# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes

```js
class User{
  constructor(name, score){
    this.name = name;
    this.score = score;
  }
  increaseScore(){
    return  this.score++
  }
  decreaseScore(){
    return this
  }
}
class PaidUser extends User{
  constructor(name, score = 0, balance = 0){
    super(name, score);
    this.balance = balance
  }
  increaseBalance(){
    return this.balance--
  }
}

let newUser = new User('ali', 44);
console.log(newUser);
let newPaidUser = new PaidUser('khan', 55, 20);
console.log(newPaidUser.increaseScore())
console.log(newPaidUser.increaseScore())

```
