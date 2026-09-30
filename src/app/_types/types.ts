export interface resultsType {
  name: string;
  url: string;
}

export interface ListPokemonsType {
  count: number;
  next: string;
  previous: null;
  results: resultsType[];
}

export interface PokemonsType {
  name: string;
  weight: number;
  height: number;
  id: number;
  type: string;
  imgPokemon: string;
}
