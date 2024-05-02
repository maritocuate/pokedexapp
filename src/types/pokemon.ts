export interface GenericItem {
  [key: string | symbol]: string
}
export interface PokemonResult {
  name: string
  url: string
}
export interface PokemonList {
  count: number
  next?: string
  previous?: string
  results: PokemonResult[] | GenericItem[]
}
