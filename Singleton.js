let instance;

class Preferences {
    constructor() {
        if (instance) {
            throw new Error("Only one instance can be created!")
        }
        this.color = "green";
        this.theme = "dark";
        instance = this;
    }

    changeTheme() {
        this.theme = this.theme == "dark" ? "light" : "dark";
    }

    changeColor(color) {
        this.color = color;
    }

    getInstance() {
        return instance;
    }
}


const preferenceInstance = new Preferences(); // We can export this as the instance

console.log(preferenceInstance);

preferenceInstance.changeTheme();
console.log(preferenceInstance);
preferenceInstance.changeColor("white");
console.log(preferenceInstance);

const preferenceInstance2 = preferenceInstance.getInstance();

console.log(preferenceInstance2);

preferenceInstance2.changeTheme();
console.log(preferenceInstance2);
preferenceInstance2.changeColor("black");
console.log(preferenceInstance2);