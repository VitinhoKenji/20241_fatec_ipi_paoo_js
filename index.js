//declaração constantes
// const nome = "José"
// console.log(nome)
// const endereco = 'Rua B, 21'
// console.log(endereco)
// const sobrenome = `Bossini`
// console.log(sobrenome)
// console.log(`Me chamo ${nome}. Meu sobrenome é ${sobrenome}.`)
// const idade = 18
// const passeiDeAno = true

// let nome = "Rodrigo"
// console.log(nome)
// nome = "Pedro"
// console.log(nome)
// let a = 2
// console.log(typeof(a))
// a = "abc"
// console.log(typeof(a))
// a = true
// console.log(typeof(a))

//Não use var
// var linguagem = "Javascript"
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = "Java"
// console.log(`Aprendendo ${linguagem}`)
// var idade = 18
// console.log(`Oi, ${nome}`)
// if (idade >= 18){
//     var nome = 'João' //içamento (hoist)
//     console.log(`Paraabéns, ${nome}. Você pode dirigir!`)
// }
// console.log(`Até mais, ${nome}`)

// //let a = "abc" javascript, dinamicamente tipado, feito pelo interpretador, em tempo de excecução
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// //coerção explícita
// console.log(n4)

//Não usar o operador de comparação ==
// console.log(1 == '1')
// console.log(1==='1')
// console.log(1 == true)
// console.log(1 == [1])
// console.log(1 == [1,2])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])

//declaração
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[2] = 'abc'
// console.log(v1.length)
// v1[99] = true
// console.log(v1.length)
// console.log(v1)
// for (let i = 0; i<v1.length; i++){
//     console.log(v1[i])
// }
//int [] v1 = new int[0];
//var v1 = new ArrayList<list>();

//funções
//void m (){} Java
// function hello(){
//     console.log('oi')
// }
// hello()
// function hello(nome){
//     console.log('oi, '+nome)
// }
// hello('Rodrigo')

// function soma (a,b){
//     return a + b
// }
// const resultado = soma(2,3)
// console.log(resultado)
// const dobro = function (n){
//     return 2* n
// }
// const result = dobro(6)
// console.log(result)

// //valor padrão para um parâmetro
// const triplo = function(n=5){
//     return 3*n
// }
// console.log(triplo())
// console.log(triplo(10))

// const f = () => {}
// const umArgumento = n => {
//     console.log(n)
// }
// const soUmaLinha = () => console.log('oi')
// const teste1 = (a,b) => {
//     return a+b
// }
// const teste2 = (a,b) => a+b

// const hello = () => console.log("Hello")
// hello()
// const dobro = (valor) => valor *2

// let triplo = (valor) => {
//     return valor *3
// }
// const ehPar = n => {n%2 === 0}
// console.log(ehPar(10))

// function f3 (){
    
// }

// public class Teste{
//     public void m(){
//     }
//     public void testando(){
//         var meuMetodo = m;
//     }
// // }
// function executa(f){
//     f()
// }
// executa(function(a,b){return a+b})

// function produzUmaFuncao(a,b,operador){
//     if(operador === '+')
//     return function(a,b){
//         a+b
//     }
//     if(operador ==='-')
//     return (a,b) => a-b
// }

// let umaFuncao = function(){
//     console.log ("Fui armazenada em uma variável")
// }
// umaFuncao()

// function f(funcao){
//     return funcao()
// }
// // f(function(){
// //     console.log("Estou sendo passada para f...")
// // })

// function g(){
//     function outraFuncao(){
//         console.log("Fui definida por g")
//         return () => {2}
//     }
//     return outraFuncao()
// }

// console.log(f(g)() + f(g)())

// const resultadoDaG = g()
// resultadoDaG()
// g()()()

// function f(){
//     let nome = "João"
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Olá, ${nome}`)
//     }
// }

// let olaResult = ola()
// olaResult()

// function saudacoesFactory(saudacoes, nome){
//     return function(){
//         console.log(`${saudacoes}, ${nome}`)
//     }
// }

// let olaJoao = saudacoesFactory('Olá', 'João')
// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         cont++
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1,f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
// eAgoraResult.f1()
// eAgoraResult.f2()

// function f(){}

// () => {}

// a => {return a*2}

// let f = a => a*2

// function f (a){
//     return a*2
// }

// www.exemplo.com.br/livros
// GET 
// funções que acessa a base e devolve os livros

// const app = express()
// app.get('/livros', () => {})

//uma pessoa chamada João que tem 17 anos de idade

//JSON: Javascript Object Notation
// let pessoa = {
//     nome: "João",
//     idade: 17
// }
// //. e [] para acessar membros
// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//se chama Maria, tem 21 anos e mora na rua B, 14

// let pessoa = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 14
//     }
// }

// console.log(pessoa['endereco']['logradouro'])
// console.log(pessoa.endereco.numero)
// console.log(pessoa['endereco'].numero)
// console.log(pessoa.endereco['logradouro'])

//uma concessionaria tem CNPJ e endereço.
//Ela possui alguns carros em estoque. Cada um deles
//tem marca, modelo e ano de fabricação

// let concessionaria = {
//     CNPJ: 12345,
//     endereco: {
//         logradouro: "rua B",
//         numero: 14,
//         bairro: 'Vila'
//     },
//     carros: [
//         {
//             marca: "s",
//             modelo: "x", 
//             ano: 123
//         },
//         {
//             marca: "w",
//             modelo: 'd',
//             ano:12
//         }
//     ]
// }
// for (let carro of concessionaria.carros){
//     console.log(`Marca: ${carro.marca}. Modelo: ${carro.modelo}`)
// }
// //acessar a marca do segundo veículo
// console.log(concessionaria.carros[1].marca)
// console.log(concessionaria['carros'][0]['marca'])

//calculadora faz soma e subtração, cada operação envovle dois operandos
//soma deve utilizar arrow function, sem return
//subtração deve ser funcao regular
// let calculadora = {
//     soma: (a,b) => a+b,
//     subtração: function(a,b){
//         return a-b
//     }
// }
// console.log(calculadora.soma(2,3))
// console.log(calculadora.subtração(2,3))

// console.log("Eu primeiro")
// console.log("Agora eu")
// console.log("Sempre vou ser a última...")

// const a= 2+7
// const b = 5
// console.log(a+b)

// function demorada(){
//     //pegar o horário atual do sistem, e deslocar ele de 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8+4
//     return d
// }

// const a = 2+5
// const b = 5+9
// const d = demorada()
// const e = 2+a+b
// console.log(e)
// function demorada(){
//     //pegar o horário atual do sistem, e deslocar ele de 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8+4
//     return d
// }

// const a = 2+5
// const b = 5+9
// setTimeout(function(){
//     const d = demorada()
//     console.log('d: '+ d)
// },500)
// const e = 2+a+b
// console.log('e: ' + e)

// const f1 = () => console.log('f1')
// const f2 = () => console.log('f2')

// setTimeout(f1, 500)
// setTimeout(f2, 0)
// console.log('Fim do script principal')

const fs = require('fs')
const abrirArquivo = (nomeArquivo) => {
    const exibirConteudo = (erro, conteudo) => {
        if(erro){
            console.log(`Erro: ${erro}`)
        }
        else{
            console.log(conteudo.toString())
            const resultado = +conteudo.toString() * 10
            const finalizar = (erro) => {
                if(!erro){
                    console.log('Conteudo escrito com sucesso')
                }
                else{
                    console.log('Escrita falhou')
                }
            }
            fs.writeFile('resultado.txt', resultado.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}
abrirArquivo('arquivo.txt')