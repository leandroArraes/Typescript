// caracteristica do typescript é definir tipo de variavel 


// inferencia x annotation
    // inferencia
        // é  Quando uma variavel é decladar sem a tipagem
        // ex:
        let letra = 'variavel inferida como tipada como string'

// annotation
        // é quando se declara o tipo da variavel
        // ex:
        let numero: Number = 10
        let decladroLetras: String = 'variavel declarada como sendo do tipo String'

// Tipos Basicos
let nome : string = "Leandro";
let idade : number = 32;
const verdade : boolean = true


// consultar tipo de variavael 
console.log(typeof nome);

// any --> só em caso de multiplicidade de dados
let a: any = 0;
a = true
a = [ ]

// union type
let id: string | number = "10";
id = 200;

// type alias
type myIdType = number | string;
const userID: myIdType = 10;
const productId: myIdType = "0001";
const shirId: myIdType = 123;


// object
    // Arrays
const mynumbers: number [] = [1,2,3];

console.log(mynumbers);

// Tuplas -- tuple
let myTuple: [number,string,string[]];
myTuple = [5,"teste",["a","b"]];

// object litarais -> {prop: value}

const user: {name: string,age:number} = {
    name: "Leandro",
    age:32
};
console.log(user);

// enum
enum tamanho{
    p = "Pequeno",
    M = "Medio",
    G = "Grande"
};

const camisa = {
    tipo: "camisa gola v",
    tamanho:tamanho.M
}

console.log(camisa);

// literal types

let teste: "algumValor" | null;
teste = "algumValor";
teste = null;

// funções

function sum(a: number,b: number){
    return a + b
};
console.log(sum(12,12));

function ola(nome:string): string{
    return `olá ${nome}`
}
console.log(ola('Leandro'));

// Quando a função não retornar nenhum valor , deve ser tipada como Void
function print(nome: string): void{
    console.log(`ola ${nome}`);
}
print('leandro');

// interfaces 
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumber(num: MathFunctionParams){
    return num.n1 + num.n2
}

console.log(sumNumber({n1:1,n2:2}));

function multiplyNumbers(nums: MathFunctionParams){
    return  nums.n1 * nums.n2;
}

const someNumbers : MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));


// narrowing
// checagem de 

function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`o número é ${info}`);
        return;
    }
    console.log("não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics

function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
};

const a1 =[1,2,3];
const a2 =["a","b","c"]

showArraysItems(a1);
showArraysItems(a2);


// classes

