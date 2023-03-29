/*+ 2)Crie uma classe para representar pessoas.
 para cada pessoa teremos os atributos nome,peso e altura.
 Aspessoas desvem ter a capacidade de dizer o valor do seu (imc = peso/(altura*altura));
 Instancie uma pessoa chamada José que tenha 70kg e 1.75 de altura e peca ao Jos[é para dizer o valor 
    do seu IMC;
*/

class Pessoa{ 
 Nome;
 peso;
 altura;

  constructor(nome, peso, altura){
     this.nome = nome;
     this.peso = peso;
     this.altura = altura;
    }
  calcularimc(){
    return this.peso / (this.altura*this.altura);
  }
    classificarImc(){
     const imc = this.calcularimc();
     if(imc <18.5){
        return('Abaixo do peso');
    }  else if (imc >= 18.5 && imc < 25){
        return('Peso normal');
    } else if (imc >= 25 && imc < 30){
         return('Acima do pesso')
    }
     else if (imc >=30 && imc < 40){
         return('Obeso');
    }else { 
    return('Obesidade grave');
    }
   }    
  }

const jose = new Pessoa('jose',70, 1.75 );
console.log(jose. classificarImc());
const renan = new Pessoa('renan', 65, 1.75)
console.log(renan. classificarImc());const vitor = new Pessoa('vitor', 100, 1.69)
console.log(vitor. classificarImc());
