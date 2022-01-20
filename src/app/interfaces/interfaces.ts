export interface Usuario {
    nombre:string;
    apellido:string;
    edad:number;
}

export interface Experiencia{
    position:string;
    company:string;
    img:string;
    mode:string;
    start:string;
    end:string;
    timeElapsed: string;
}

export interface Educacion{
    school:string;
    title:string;
    img:string;
    career:string;
    start: number;
    end: number;
}

export interface Habilidades{
    name:string;
    progress:string;
}

