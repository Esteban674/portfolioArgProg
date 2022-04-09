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

export interface AcercaDe{
    id?:number;
    contenido:string;
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
    img?:string; 
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



export interface Skills{
    id?:number;   
    name:string;                //HTML, CSS, JavaScript, Idiomas
    grupo:Grupo;              //FrontEnd, BackEnd, Database, Dev Ops, Mobile App
    category:Category;           //Framework, Lenguaje, Basics, Herramienta
    status:Status;
    img?:string;
}

export interface Grupo{
    id?:number;                 
    name:string;                //FrontEnd, BackEnd, Database, Dev Ops, Mobile App
}

export interface Category{
    id?:number;                 
    name:string;                //Framework, Lenguaje, Basics, Herramienta
}

export interface Status{
    id?:number;                 
    name:string;                 //Status: Principiante, Intermedio, Competente, Experto o Level: Regular, Bueno, Muy Bueno, Excelente
    color:string;
}

export interface SoftSkills{
    name:string;                //SCRUM, Administracion del tiempo, trabajo en equipo, comunicacion, iniciativa
    level:string;               
    comments:string;
}

export interface Projects{
    name:string;
    url:string;
    img?:string;
}

export interface Contacto{
    name:string;
    lastName:string;
    email:string;
    comments:string;
}