# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

## Introduction

TypeScript হলো একটি pure Object Oriented Programming Language. Large-scale application তৈরি করার সময় code maintain করা, reusable রাখা এবং complexity কমানো খুব গুরুত্বপূর্ণ। এই কাজগুলো সহজ করার জন্য Object-Oriented Programming (OOP) অনেক সাহায্য করে। প্রত্যেক্টি OOP Language এর ৪ টি পিলার থাকে। এই পিলার গুলো TypeScript এও রয়েছে।

OOP-এর চারটি মূল pillar হলো:

1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

এই concepts গুলো TypeScript project-কে আরও organized এবং scalable করে তোলে।

---

# 1. Inheritance

Inheritance শব্দ বা কন্সেপ্ট টার অর্থ হলো উত্তরাধীকার সূত্রে। অর্থাৎ, Inheritance ব্যবহার করে একটি class অন্য class-এর property এবং method inherit করতে পারে।

এতে code reuse করা যায়।

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
}
```

এখানে `Student` class, `Person` class-এর property reuse করেছে।

### সুবিধা

- Code repeatation কমে
- Reusability বাড়ে
- Maintain করা সহজ হয়

---

# 2. Polymorphism

Polymorphism কপ্সেপ্ট দ্বারা বোঝানো হয় একই জিনিসের ভিন্ন ভিন্ন রূপ। অর্থাৎ, Polymorphism মানে একই method বিভিন্নভাবে কাজ করতে পারা।

```ts
class Animal {
  makeSound(): string {
    return "Some Sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}
```

এখানে একই `makeSound()` method আলাদা আলাদা output দিচ্ছে। এটিই Polymorpihism এর আসল কাজ।

### সুবিধা

- Flexible code লেখা যায়
- Different object একই interface follow করতে পারে
- Large project-এ extensibility বাড়ে

---

# 3. Abstraction

Abstraction complex logic hide করে শুধু প্রয়োজনীয় অংশ দেখায়। আমরা যদি express.js কোড যখন লেখি তখন আমরা কিছু প্রি-ডিফাইন্ড লজিক ইমপ্লিমেন্ট করি কিন্তু লজিক গুলা আমরা বিল্ড করি না বা বুঝিও না আমরা শুধু ইম্পোর্ট করে কাজ করি। এটিই মূলত Abstraction। 

### abstract class declaration 
কোনো abstract class declare করার ক্ষেত্রে নামের শুরুতে `abstract` keyword ইউজ করলেই হয়।

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class CardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} by card`);
  }
}
```
এখানে user শুধু `pay()` method ব্যবহার করবে, ভিতরের implementation নিয়ে ভাবতে হবে না।

### সুবিধা

- Complexity কমে
- Clean architecture তৈরি হয়
- Large system manage করা সহজ হয়

---

# 4. Encapsulation

Encapsulation data hide করে এবং controlled access দেয়।

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

এখানে `balance` সরাসরি access করা যাচ্ছে না।

### সুবিধা

- Data secure থাকে
- Accidental modification কমে
- Better control পাওয়া যায়

---

# কেন Large TypeScript Project-এ OOP গুরুত্বপূর্ণ?

Large project-এ অনেক developer একসাথে কাজ করে। তখন organized structure খুব গুরুত্বপূর্ণ হয়ে যায়।

OOP সাহায্য করে:

- Reusable code তৈরি করতে
- Complex logic ছোট ছোট অংশে ভাগ করতে
- Maintainability বাড়াতে
- Future update সহজ করতে

---

# Conclusion

Inheritance, Polymorphism, Abstraction এবং Encapsulation — এই চারটি pillar বড় TypeScript project-এ clean, reusable এবং scalable architecture তৈরি করতে সাহায্য করে।

এই concepts ভালোভাবে ব্যবহার করলে project maintain করা সহজ হয় এবং development process আরও efficient হয়ে যায়।