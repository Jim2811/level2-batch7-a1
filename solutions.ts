// filterEvenNumbers 
const filterEvenNumbers = (nums: number[]): number[]=>{
    const evenNumbers: number[] = nums.filter(num => num%2===0)
    return evenNumbers 
}
// reverseString 
const reverseString  = (str: string) : string => {
    const reversed = str.split('').reverse().join("") 
    return reversed
}
// StringOrNumber 
type AlphaNumaric = string | number
const StringOrNumber = (inpt: AlphaNumaric): "String" | "Number" =>{
    if (typeof inpt === 'string'){
        return "String"
    }
    return "Number"
}
// getProperty
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
}
// toggleReadStatus
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
const toggleReadStatus = (book: Book) => {
    const newBook = { ...book, isRead: true }
    return newBook;
}
// problem 6 about oop
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}
// getIntersection
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    const arr3 = arr1.filter(num => arr2.includes(num));
    return arr3;
};