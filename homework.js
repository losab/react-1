// // 1) შექმენით მასივი,რომელიც შეიცავს როგორც დადებით ასევე უარყოფით რიცხვებს.
// გაფილტრეთ მოცემული მასივი შემდეგ კი დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი. 

import { threadId } from "worker_threads";

// გამოიყენეთ მასივის filter და reduce მეთოდები.
    const numbers = [7, -3, 90, 11, -11, 45, 0, -999];
    const naturalNumbers1 = numbers.filter(num => num > 0);
    const naturalNumbers2 = numbers.reduce((acc, num) => {
        if (num > 0 ) {
          acc.push(num);
        }
        return acc;
      }, []); 
      
    console.log(naturalNumbers1);
    console.log(naturalNumbers2);

// // 2) შექმენით მასივი,რომელიც შედგება სტრინგებისგან(რომლებიც შეიძლება განმეორდეს). 
// დაწერეთ კოდი,რომელიც დაითვლის რამდენჯერ მეორდება თითოეული სტრინგი მასივში და დააბრუნეთ ობიექტის სახით, 
// მაგ: { a:1 , b: 6, c : 2}. გამოიყენეთ მასივის reduce მეთოდი.

      const people = ["sando", "maiami", "diana",  "maiami",  "diana", "maiami"];
      const countStrings = people.reduce((acc, str) => {
        if (str in acc) {
          acc[str]++;
        } else {
          acc[str] = 1;
        }
        return acc;
      }, {});
      
      console.log(countStrings); 

// // 3) შექმენით კლასი car, რომელსაც ექნება 4 ფროფერთი (brand,model, speed,motion).
//   ბრენდი და მოდელი კლასს კონსტრუქტორში გადაეცემა, ხოლო speed კონსტრუქტორში დიფოლტად 
//   ინიციალიზდება და მისი მნიშვნელობა არის 0.ასევე დიფოლტად ინიციალიზდება motion,რომლის საწყისი 
//   მნიშვნელობაა “The car is not moving”.
class Car {
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = '';
  }

  check_motion() {
    if (this.speed > 0) {
      this.motion = `car is moving`;
    } else {
      this.motion = `the car isn't moving`;
    }
  }

  accelerate(speed) {
    this.speed += speed;
    this.check_motion();
  }

  brake(speed) {
    this.speed = Math.max(0, this.speed - speed);
    this.check_motion();
  }

  emergency_brake() {
    this.speed = 0;
    this.check_motion();
  }

  Status() {
    return `${this.brand} ${this.model} is moving at ${this.speed} km/h and status is ${this.motion}`;
  }
}
    
// // ჩაატარეთ სხვადასხვა ოპერაციები მანქანაზე (accelerate,brake და ა.შ) და თითოეული ცვლილების შემდეგ
//  კონსოლში გამოიტანეთ სტატუსი.

// // 4) შექმენით ფუნქცია addAsync,რომელიც იღებს ორ პარამეტრს და აბრუნებს პრომისს. თუ ორივე პარამეტრი
//  გადაეცემა(undefined არ არის და ორივე პარამეტრი რიცხვია) პრომისი უნდა დარიზოლვდეს(resolve), წინააღმდეგ 
//  შემთხვევაში დარიჯექთდეს(reject). გამოიძახეთ ფუნქცია რამდენიმეჯერ, სხვადასხვა პარამეტრით და კონსოლში გამოიტანეთ შედეგი.
      function addAsync(p1, p2) {
        return new Promise((resolve, reject) => {
          if (typeof p1 === 'number' && typeof p1 !== undefined && typeof p2 === 'number' && typeof p2 !== undefined) {
            resolve('kibatono');
          } else {
            reject('arabatono');
          }
        });
      }
      addAsync(7,9)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));


      addAsync("7", "9")
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

      addAsync(7, null)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
      addAsync(7)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));