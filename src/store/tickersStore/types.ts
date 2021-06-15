export interface ITicker {
    price: number | null;
    name: string | null;
    graph: number[];
    normalizedGraph: number[];
}

export interface IState {
    tickers: ITicker[];
    selectedTicker: ITicker | null;
    filteredTickers: ITicker[];
}

export interface IFilterOptions {
    start: number;
    end: number;
}

export interface IAddOptions {
    name: string;
    itemPerPage?: number;
}
