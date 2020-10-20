//using function 
/*
function createUser(name, id, password, noOfProjects){
    let user = {};
    user.name = name;
    user.id = id;
    user.password = password;
    user.noOfProjects = noOfProjects;
      
    user.getProject = function(){
       return user.noOfProjects;
    }
    user.changeUsername = function(name){
       return  user.name  = name
    }
    user.incrementProject  = function(){
        user.noOfProjects++
        return user.noOfProjects
    }
    user.decrementProject = function(){
        user.noOfProjects--
        return user.noOfProjects;
    }
    return user;
}

let shadab = createUser('shadab', 8, 'super', 50);
let mahir = createUser('mahir', 5, 'shadab@26', 20);
let noor = createUser('noor', 5, 'mahir', 10);
let monish = createUser('monish', 5, 'king', 22);
 
*/

/*
// using Object.create
function createUser(name, id, password, noOfProjects){
    let user = Object.create(userMethod);
    user.name = name;
    user.id = id;
    user.password = password;
    user.noOfProjects = noOfProjects;
    return user;
}
let userMethod = {
    getProject: function(){
        return this.noOfProjects;
     },
     changeUsername: function(name){
        return  this.name  = name
     },
     incrementProject: function(){
         this.noOfProjects++
         return this.noOfProjects
     },
     decrementProject: function(){
         this.noOfProjects--
         return this.noOfProjects;
     },
}

let shadab = createUser('shadab', 8, 'super', 50);
let mahir = createUser('mahir', 5, 'shadab@26', 20);
let noor = createUser('noor', 5, 'mahir', 10);
let monish = createUser('monish', 5, 'king', 22);
*/

/*
function createUser(name, id, password, noOfProjects){
    let user = Object.create(createUser.prototype);
    user.name = name;
    user.id = id;
    user.password = password;
    user.noOfProjects = noOfProjects;
    return user;
}
createUser.prototype = {
    getProject: function(){
        return this.noOfProjects;
     },
     changeUsername: function(name){
        return  this.name  = name
     },
     incrementProject: function(){
         this.noOfProjects++
         return this.noOfProjects
     },
     decrementProject: function(){
         this.noOfProjects--
         return this.noOfProjects;
     },
}

let shadab = createUser('shadab', 8, 'super', 50);
let mahir = createUser('mahir', 5, 'shadab@26', 20);
let noor = createUser('noor', 5, 'mahir', 10);
let monish = createUser('monish', 5, 'king', 22);
*/

/*
// using new keyword
function createUser(name, id, password, noOfProjects){
   // let user = Object.create(createUser.prototype);
    this.name = name;
    this.id = id;
    this.password = password;
    this.noOfProjects = noOfProjects;
    // return user;
}
createUser.prototype = {
    getProject: function(){
        return this.noOfProjects;
     },
     changeUsername: function(name){
        return  this.name  = name
     },
     incrementProject: function(){
         this.noOfProjects++
         return this.noOfProjects
     },
     decrementProject: function(){
         this.noOfProjects--
         return this.noOfProjects;
     },
}

let shadab = new createUser('shadab', 8, 'super', 50);
let mahir = new createUser('mahir', 5, 'shadab@26', 20);
let noor = new createUser('noor', 5, 'mahir', 10);
let monish = new createUser('monish', 5, 'king', 22);

*/ 

class user {
    constructor(name, id, password, noOfProjects) {
        this.name = name;
        this.id = id;
        this.password = password;
        this.noOfProjects = noOfProjects;
    }
    getProject() {
        return this.noOfProjects;
    }
    changeUsername(name) {
        return this.name = name
    }
    incrementProject() {
        this.noOfProjects++
        return this.noOfProjects
    }
    decrementProject() {
        this.noOfProjects--
        return this.noOfProjects;
    }
}
let shadab = new user('shadab', 8, 'super', 50);
let mahir = new user('mahir', 5, 'shadab@26', 20);
let noor = new user('noor', 5, 'mahir', 10);
let monish = new user('monish', 5, 'king', 22);

