"use strict";
var User = /** @class */ (function () {
    function User(familyName, givenName, age) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
    return User;
}());
var user = new User('YMSK', 'SKY', 18);
var contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = user.familyName + " " + user.givenName;
}
