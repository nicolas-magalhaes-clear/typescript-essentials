class Carro{

    private velocidadeMaxima:number = 200
    
    private delta:number = 5

    velocidadeAtual = 0

    public acelerar(){
        if(this.velocidadeAtual + this.delta <= this.velocidadeMaxima){
            this.velocidadeAtual+= this.delta
        }
        else{
            this.velocidadeAtual = this.velocidadeMaxima
        }
    }

    public getVelocidadeAtual(){
        return this.velocidadeAtual
    }



    
}

const uno = new Carro() 

uno.acelerar()
console.log(uno.getVelocidadeAtual())