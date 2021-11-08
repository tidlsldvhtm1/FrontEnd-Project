class Cuser{
    constructor(first, last){
        this.first = first
        this.last = last
    }
    getFullName(){
        return `${this.first}, ${this.last}`
    }
}

const Honggil = new Cuser('Hong', 'gil')
console.log(Honggil.getFullName())

class Vehicle{
    constructor(name, wheel){
        this.name = name
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle{
    constructor(name, wheel){
        super(name, wheel)
    }
}

class Car extends Vehicle{
    constructor (name, wheel, license){
        super(name, wheel)
        this.license=license
    }
}

const mycar = new Car('현대', 4, true)
console.log(mycar)
