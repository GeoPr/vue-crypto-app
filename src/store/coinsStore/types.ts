export interface ICoin {
    Id: string;
    ImageUrl: string;
    Symbol: string;
    FullName: string;
}

export interface IState {
    coins: ICoin[];
    filteredCoins: ICoin[];
}

export interface ICoinsOutput {
    [key: string]: ICoin;
}

export interface ICoinsBackendOutput {
    Data: ICoinsOutput;
    [key: string]: any;
}

export interface IValidateCoinsInput {
    tickerName: string;
    length: number;
}
