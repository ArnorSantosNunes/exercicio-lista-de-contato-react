export interface Contact {
  id: string
  nomeCompleto: string
  email: string
  telefone: string
  categoria: 'familia' | 'amigos' | 'trabalho'
  favorito: boolean
}

export type ContactCategory =
  | 'todos'
  | 'favoritos'
  | 'familia'
  | 'amigos'
  | 'trabalho'
