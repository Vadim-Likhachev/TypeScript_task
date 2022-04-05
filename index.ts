//TASK1

function concat(str1: string, str2: string) {
    console.log(str1 + str2);
     
}

concat('Hello ', 'World');


//TASK2

type TSArr = (string | number);

interface myInterface{
  howIDoIt: string,
  simeArray: TSArr[],
  withData: [{}]
  
}


const myHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//TASK3

interface MyArray<T> {
	[N: number]: T;

	reduce<U>(fn: (pr: T, item: T) => U): T;
}

const arr: MyArray<number> = [1,2,3];

console.log(arr.reduce((a, b) => a + b));

