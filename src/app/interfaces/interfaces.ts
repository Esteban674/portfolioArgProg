export interface Usuario {
    name:string;
    lastName:string;
    email:string;
    age:number;
    userName:string;
    password:string;
    headLine:string;    //Ej: Desarrollador Full Stack
    nacionality:string;
    img?:string;
}

export interface Experiencia{
    position:string;        //Cargo
    mode:string;            //Tipo de empleo Ej: Jornada Completa
    company:string;         //Nombre de la empresa
    location:string;        //Direccion Ej: Pilar, Cordoba, Argentina 
    startMonth: string; 
    startYear:number;   
    endMonth?:string;       //Cuando esten vacias reemplazar por la palabra "Actualidad"
    endYear?:number;
    timeElapsed: string; 
    comments:string;  
}

export interface Educacion{
    school:string;      //Institucion
    title:string;       //Titulo
    career:string;      //Disciplina Academica
    startMonth: string; 
    startYear:number;   
    endMonth:string;
    endYear:number;
    comments:string;
    img?:string;
}

export interface CursosCertificados{
    name:string;                //Nombre del curso o certificacion
    issuingAuthority:string;    //Empresa o autoridad emisora
    expeditionMonth:string;
    expeditionYear:number;
    IdCredential?:string;
    UrlCredential?:string;
    comments:string;
    img?:string;
}

export interface Habilidades{
    name:string;
    progress:string;
    img?:string;
}

