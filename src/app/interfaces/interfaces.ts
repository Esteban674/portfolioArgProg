export interface User {
    name:string;
    lastName:string;
    email:string;
    age:number;
    userName:string;
    password:string;
    headLine:string;    //Ej: Desarrollador Full Stack
    nacionality:string;
    img:string;
}

export interface Experience{
    id?:number;
    position:string;        //Cargo
    mode:Mode;            //Tipo de empleo Ej: Jornada Completa
    company:string;         //Nombre de la empresa
    location:string;        //Direccion Ej: Pilar, Cordoba, Argentina 
    startDate: string; //  
    endDate?: string;       //Cuando esten vacias reemplazar por la palabra "Actualidad"
    comments:string;  
}

export interface Mode {
    id:number;
    name:string;
}

export interface Education{
    id?:number;
    school:string;      //Institucion
    title:string;       //Titulo
    career:string;      //Disciplina Academica
    startDate: string; //  
    endDate?: string;       //Cuando esten vacias reemplazar por la palabra "Actualidad"
    comments:string;
    img?:string;
}

export interface Course{
    id?:number;
    name:string;                //Nombre del curso o certificacion
    issuingAuthority:string;    //Empresa o autoridad emisora
    expeditionDate:string;
    credentialId:string;
    credentialUrl:string;
    comments:string;
    img?:string;
}



export interface HardSkills{
    name:string;                //HTML, CSS, JavaScript, Idiomas
    frontEnd: boolean;
    backEnd: boolean;
    level:string;               //Principiante, Intermedio, Competente, Experto
    comments:string;
    img?:string;
}


export interface SoftSkills{
    name:string;                //SCRUM, Administracion del tiempo, trabajo en equipo, comunicacion, iniciativa
    level:string;               //Regular, Bueno, Muy Bueno, Excelente
    comments:string;
}

export interface Projects{
    name:string;
    url:string;
    img?:string;
}