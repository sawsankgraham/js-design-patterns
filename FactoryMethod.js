

class Knife {

    constructor(knifeType, sharpness) {
        this.knifeType = knifeType;
        this.sharpness = sharpness;
    }

    sharpen() {
        this.sharpness += 0.1;
    }

    polish() {
        this.polished = true;
    }

    package() {
        this.packaged = true;
    }
}

class SteakKnife extends Knife {
    constructor(knifeType = "Steak Knife", sharpness = 0.5) {
        super(knifeType, sharpness)
    }
}

class ChefsKnife extends Knife {
    constructor(knifeType = "Chef's knife", sharpness = 0.8) {
        super(knifeType, sharpness)
    }
}

class BudgetSteakKnife extends Knife {
    constructor(knifeType = "Budget Steak Knife", sharpness = 0.5) {
        super(knifeType, sharpness)
    }
}

class BudgetChefsKnife extends Knife {
    constructor(knifeType = "Budget Chef's Knife", sharpness = 0.8) {
        super(knifeType, sharpness)
    }
}

class FamilySteakKnife extends Knife {
    constructor(knifeType = "Family Steak Knife", sharpness = 0.5) {
        super(knifeType, sharpness)
    }
}

class FamilyChefsKnife extends Knife {
    constructor(knifeType = "Family Chef's Knife", sharpness = 0.8) {
        super(knifeType, sharpness)
    }
}

class KnifeStore {


    orderKnife(knifeType) {
        let knife = null;

        knife = this.createKnife(knifeType);

        // prepare the knife
        knife.sharpen();
        knife.polish();
        knife.package();

        return knife;
    }

    createKnife(knifeType) {
        throw new Error("Method createKnife() must be implemented.")
    }
}

class BudgetKnifeStore extends KnifeStore {
    createKnife(knifeType) {
        let knife = null;

        if (knifeType == "Steak") {
            knife = new BudgetSteakKnife();
        } else if (knifeType == "Chefs") {
            knife = new BudgetChefsKnife();
        }

        return knife;
    }
}

class FamilyKnifeStore extends KnifeStore {
    createKnife(knifeType) {
        let knife = null;

        if (knifeType == "Steak") {
            knife = new FamilySteakKnife();
        } else if (knifeType == "Chefs") {
            knife = new FamilyChefsKnife();
        }

        return knife;
    }
}




let knifeStore = new BudgetKnifeStore();

let orderedKnife = knifeStore.orderKnife("Chefs")

console.log('orderedKnife', orderedKnife);



let familyKnifeStore = new FamilyKnifeStore();

let familyKnife = knifeStore.orderKnife("Steak")

console.log('familyKnife', familyKnife);