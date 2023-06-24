const behaviors = (target: Function, _context: any) => {
    console.log(`${target.name}, 在吃饭`);
    console.log(`${target.name}, 在睡觉`);
    console.log(`${target.name}, 在打豆豆`);
};

@behaviors
class Cat {}

@behaviors
class Dog {}

const cat = new Cat();
console.log(cat);

const dog = new Dog();
console.log(dog);

export default {cat, dog};
