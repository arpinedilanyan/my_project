let user1 = { name: 'Arpi', age21, isAdmin: false };
let  x = "name";
console.log(user1.name);
console.log(user1['name']);
console.log(user1.[x]);

function User(name, age){
    this.name= name;
    this.age = age;
}

let urer1 = new User('Arpi', 21);
let user2 = new User('Monika', 5);
console.log(urer1);

// let  date1 = new Date();


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logInfo() {
        console.log(`Information: ${this.name}, ${this.name}`);
    }
    getSystemErrorName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

let userName = new User('Arpi', 21);

userName.logInfo();
