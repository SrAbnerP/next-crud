export default class Cliente {
  #id: string;
  #nome: string;
  #idade: number;

  constructor(nome: string, idade: number, id: string) {
    this.#nome = nome;
    this.#idade = idade;
    this.#id = id;
  }

  static vazio() {
    return new Cliente("", 0, "");
  }

  public get id(): string {
    return this.#id;
  }

  public get nome(): string {
    return this.#nome;
  }

  public get idade(): number {
    return this.#idade;
  }
}
