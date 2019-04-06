class cfr_alg{
    constructor(){
        this.ROCK = 0;
        this.PAPER = 1;
        this.SCISSORS = 2;
        this.NUM_ACTION = 3;
        this.strategy = [];
        this.regretSum = [];
        this.strategySum = [];
        this.oppStrategy = [0.4, 0.3, 0.3];
    }

    getStrategie(){
        let normalizingSum = 0;
        for(let i = 0; i < this.NUM_ACTION; i++){
            this.strategy[i] = this.regretSum[i] > 0 ? this.regreSum[i] : 0;
            this.normalizingSum += this.strategy[i];
        }
        for(let i = 0; i < this.NUM_ACTION; i++){
            if(this.normalizingSum > 0){
                this.strategy[i] /= this.normalizingSum;
            }else{
                this.strategy[i] = 1.0 / this.NUM_ACTION;
            }
            this.strategySum[i] += this.strategy[i];
        }
        return this.strategy;
    }

    getAction(strat){
        r = Math.random();
        let cumulativeProbability = 0;
        for(var i = 0; i < this.NUM_ACTION; i++){
            cumulativeProbability += strat[i];
            if(r < cumulativeProbability){
                break;
            }
        }
        return i;
    }

    getAverageStrategy(){
        let normalizingSum = 0;
        for(let i = 0; i < this.NUM_ACTION; i++){
            normalizingSum += this.strategySum[i];
        }
        for(let i = 0; i < this.NUM_ACTION; i++){
            if(normalizingSum > 0){
                var avgStrategy[a] = this.strategySum[a] / normalizingSum;
            }else{
                avgStrategy[a] = 1.0 / NUM_ACTION;
            }
        }
        return avgStrategy;
    }


}
