//Create an object animal with a property species. Then, create an object dog that inherits from animal. Add a property breed to dog. Log both species and breed from the dog object.
var animal={
    species: 'Canine'
};

const dog=Object.create(animal)
dog.breed= 'Golden Retriever'

console.log('Species', dog.species);
console.log('Breed', dog.breed);

//Given a constructor function Car, add a method honk to its prototype that logs "Beep!". Then, create two instances of Car and make both of them call the honk method.
function Car(name){
    this.name= name;
}
Car.prototype.honk= function(){
    console.log("Beep! by", this.name);
}

const car1= new Car('BMW')
const car2= new Car('Audi')

car1.honk()
car2.honk()


// Using ES6 classes, create a base class Shape with a method draw(). Then, create a subclass Circle that overrides the draw() method. Ensure that Circle instances can call both the Circle version of draw() and the Shape version using super.
class Shape{
    draw(){
        console.log("Hi, I am generic shape.");
    }
}
class Circle extends Shape{
    draw(){
        super.draw()
        console.log("Hi, I am a circle.");
    }
}
const obj= new Circle();
obj.draw()