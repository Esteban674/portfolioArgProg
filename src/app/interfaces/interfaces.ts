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

export interface Education{
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

export interface CoursesCertified{
    name:string;                //Nombre del curso o certificacion
    issuingAuthority:string;    //Empresa o autoridad emisora
    expeditionMonth:string;
    expeditionYear:number;
    IdCredential:string;
    UrlCredential:string;
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