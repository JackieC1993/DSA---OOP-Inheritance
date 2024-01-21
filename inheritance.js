class Animal {
    constructor(name, type, color, walkStyle, isFriendly = true) {
      this.name = name;
      this.type = type;
      this.age = 4;
      this.color = color;
      this.isFriendly = isFriendly;
      this.walkStyle = walkStyle || "Walka, walka";
    }
    walk() {
      console.log(this.walkStyle);
    }
    greet(otherBeing) {
      console.log(`Sniff sniff, ${otherBeing.name}`);
    }
    classyGreeting(otherClassyBeing) {
      console.log(`Howdy, there, ${otherClassyBeing.name}`);
    }
    ageUp() {
      this.age++;
    }
    sayName(){
        console.log(this.name)
    }
  }
  const buttons = new Animal("Buttons", "turtle", "green");
  const fluffy = new Animal("Fluffy", "cat", "calico", "Strut, strut", false);
  const marshmallow = new Animal(
    "Marshmallow",
    "miniature horse",
    "white",
    "Clip clop, clip clop"
  );
// buttons.ageUp()
//   console.log(buttons.name)
//   console.log(marshmallow.name)
// buttons.classyGreeting(fluffy)
// fluffy.greet(marshmallow)
// marshmallow.sayName()
// console.log(buttons)

// const spot = new Animal("Spot", "dog", "black and white", "spins")
// console.log(spot)
// spot.classyGreeting(buttons)

// Always calling the method on the object that is performing the action
// carlos.greet()
// carlos.sayHello()
// carlos.walk("kitchen")

const herbert = new Animal("Herbert", "hamster", "brown", "squeaks", false)
// console.log(herbert)

// Herbert greets spot. Herbert gets the greet() method called on him. Spot is who we are greeting so we pass spot in as the argument
// herbert.greet(spot)



// Inheritance: classes that inherit from a parent class
// MythicalCreature is a subclass of the Animal, which gets all of the properties and methods available to the Animals
// We can also add new methods that are specific to a MythicalCreature that an Animal would not have.
class MythicalCreature extends Animal {
    constructor(name, type, color, walkStyle, isFriendly=false){
        // super references the parent class constructor so we can do in the MythicalCreature, what we did w the params in the Animal class => ex: this.name = name, etc
        // No need to pass in 'age' bc the parent class also did not have age in the constructor params. (this.age was hardcoded to equal 4)
        super(name, type, color, walkStyle, isFriendly)
        // Next line adds additional property/attribute specific to our MythicalCreature class
        this.powers = ['invisibility, "laser eyes', "super strength"]
    }

    grantWish(wish){
        console.log(`I have granted you your wish ${wish}`)
    }
    // Overriding the Animal walk() method with our own MythicalCreature walk() method
    walk(){
        console.log(`💫✨🌟 ${this.walkStyle} 💫✨🌟 `)
    }

    // We can add other methods w the same name, add keep the parent class functionality as well as ADD new functionality by using the keyword 'super' and then calling the method on super inside of the method.
    // Ex: super.greet(otherBeing) => super references the parent class so we can call the parent class method, and then underneath we can add additional functionality
    greet(otherBeing){
        super.greet(otherBeing)
        console.log('I am very pleased to see you today')
    }
}


const unicorn = new MythicalCreature("Chips", "unicorn", "iridescent white", "clip clop, vanish")

// console.log(unicorn)

// Will not work bc buttons is an Animal, not a MythicalCreature
// => TypeError: buttons.grantWish is not a function
// buttons.grantWish("invisibility powers")


// unicorn.grantWish('a million bucks')

// Works bc unicorn is a MythicalCreature which inherits ALL of the properties and methods that an Animal has
// unicorn.classyGreeting(herbert)

// Before we override the Animal walk() method, this line will call the Animal walk() method, like an Animal would
// unicorn.walk()

// When we add a walk() method to the MythicalCreature class, it overrides the Animal walk() method bc it shares the same name
// unicorn.walk()

// The MythicalCreature walk() method does not interfere w the functionality of the original walk() in Animal
// buttons.walk()


// We can add other methods w the same name, add keep the parent class functionality as well as ADD new functionality by using the keyword 'super' and then calling the method on super.
// Ex: super.greet()
// unicorn.greet(herbert)


console.log(unicorn)