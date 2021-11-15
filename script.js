//object
let myself = {

    //properties
    firstName: "hein",
    lastName: "htet",
    id: 123,

    //methods
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    //es6
    showName() {
        return this.firstName + " " + this.lastName;
    },
    //method with parameter
    eat(everytihig) {
        return "I like " + everytihig;
    }

};



