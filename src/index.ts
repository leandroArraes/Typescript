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

class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string ,isApproved: boolean ){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canshow: boolean): void{
        if (canshow) {
            console.log(`Idade do Usuário é: ${this.role}`);
            return;
        }
        console.log('informação Restrita!');
    }
}

const usuario = new User('Leandro',"Programador",true);
console.log(usuario);
usuario.showUserName();
usuario.showUserRole(true);


// interfaces em classes
// usar quando as classes são parecidas 
interface Ivehicle{
    brand: string
    showBrand():void
}

class Car implements Ivehicle{
    brand: string;
    wheels

    constructor(brand:string, wheels:number){
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}

const fusca = new Car('w',4);
console.log(fusca);

// Herança

class SuperCar extends Car{
    engine

    constructor(brand:string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("audi",4,2.0);
console.log(a4);

// Decorators

//constructor decorator
function BaseParameters() {
    return function <T extends { new (...args:any[]): {} }>(constructor : T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParameters()
class Person {
    name;
    
    constructor(name:string){
        this.name = name;
    }
}

const meuNome = new Person("Leandro Arraes");
console.log(meuNome);