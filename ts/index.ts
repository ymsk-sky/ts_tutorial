class User {
  public age: number;
  public familyName: string;
  public givenName: string;
  constructor (familyName: string, givenName: string, age: number) {
    this.age = age;
    this.familyName = familyName;
    this.givenName = givenName;
  }
}

const user = new User('YMSK', 'SKY', 18);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
