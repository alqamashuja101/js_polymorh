class Car {
    constructor(nam, model, capacity, engineNo){
        this.name = nam;
        this.model = model;
        this.capacity = capacity;
        this.engineNo = engineNo;
    }
    showDetail(){
        console.log(`
            Car Name:   ${this.name}
            Model:      ${this.model}
            Capacity:   ${this.capacity}
            Engine No:  ${this.engineNo}
        `);
    }
}

class Tesla extends Car {
    constructor(nam, model, capacity, engineNo, fuelConsuption){
        super(nam, model, capacity, engineNo);
        this.fuel = fuelConsuption
    }

    showDetail(){
        console.log(`
            Car Name:   ${this.name}
            Model:      ${this.model}
            Capacity:   ${this.capacity}
            Engine No:  ${this.engineNo}
            Fuel:       ${this.fuel}
        `);
    }
}

let t1 = new Tesla("Tesla", 2022, 4, 32456, "Electricity");
// console.log(t1);
t1.showDetail()