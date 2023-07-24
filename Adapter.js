function Reactor() {
    this.start = function () {
        console.log("Reactor started")
    }
}


function AdvancedReactor() {
    this.prepare = function (time) {
        setTimeout(() => {
            console.log("Advanced Reactor started")
        }, time);
    },
        this.initiate = function () {
            console.log('Advanced Reactor Initiated');

        }
}

function ReactorAdapter(timeout) {

    var advancedReactor = new AdvancedReactor();

    return {
        start: function () {
            advancedReactor.initiate();
            advancedReactor.prepare(timeout);
        }
    }
}

// Old interface
var reactor = new Reactor();
reactor.start();


// New Interface
var advancedReactor = new ReactorAdapter(15000);
advancedReactor.start();