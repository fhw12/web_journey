'use strict';

class User {
    #password = null;
    subscriptionType = 'free';

    constructor(username, password) {
        this.username = username;
        this.#password = password;

        this.#logPassword();
    }

    logUsername(){
        console.log(this.username);
    }

    #logPassword(){
        console.log(this.#password);
    }

    set password(value){
        if(typeof(value) !== 'string'){
            return;
        }

        if (value.length < 8) {
            return;
        }

        this.#password = value;
    }

    get password(){
        return this.#password;
    }
}

const user = new User('user', '12345678');

console.log(user);

user.logUsername();

user.password = 'qwerty123';

console.log(user);



class Graphics {
    static name = "Graphics class";

    static drawRectangle(width, height){
        document.write(
            `
<div style="width: ${width}px; height: ${height}px; background-color: lightcoral; margin-bottom: 10px"></div>
            `
        );
    }
}

// console.log(Graphics.name);
Graphics.drawRectangle(100, 50);
Graphics.drawRectangle(100, 100);
Graphics.drawRectangle(100, 50);
Graphics.drawRectangle(100, 100);
Graphics.drawRectangle(100, 200);



class Animal {
    constructor(name){
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`)
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Cat extends Animal {
    doNothing() {
        console.log(`${this.name} is doing nothing`);
    }

    think() {
        console.log(`${this.name} is thinking`)
    }
}

class SmartCat extends Cat {
    constructor(name, favoriteProgrammingLanguage){
        super(name);
        this.favoriteProgrammingLanguage = favoriteProgrammingLanguage;
    }

    writeCode() {
        super.think();
        console.log(`${this.name} is writting a code in ${this.favoriteProgrammingLanguage} *_*`);
    }
}

const cat = new SmartCat('Kitty', 'Javascript');
console.log();
console.log(cat);
cat.eat();
cat.doNothing();
cat.sleep();
cat.eat();
cat.writeCode();
