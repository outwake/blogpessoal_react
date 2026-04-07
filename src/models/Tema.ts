import type Postagem from "./Postagem";

export default interface Tema{
id:string;
descricao: string;
postagem?: Postagem[]|null;
}