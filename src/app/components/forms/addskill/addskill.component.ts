import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { switchMap } from 'rxjs/operators';
import { Category, Grupo, Skills, Status } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { baseUrl } from 'src/app/shared/ruta';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css'],
  providers: [ConfirmationService]
})
export class AddskillComponent implements OnInit {

    addSkillForm: FormGroup = this.fb.group({
    id:[,[]], 
    grupo:['',[Validators.required]],        
    name:['',[Validators.required]],          
    category:['',[Validators.required]],        
    status:['',[Validators.required]]     
    })

    grupo: Grupo[] = [];
    category: Category[] = [];
    status: Status[] = [];

    msgs: Message[] = [];

    urlserver: string = baseUrl;

    elimina:boolean = false;
    edita: boolean = false;
    fotoSeleccionada!: File;
    progreso: number = 0;

    habilidad: Skills = {
      grupo: {id:1 ,name: ''},   
      name: '',     
      category: {id:1 ,name: ''},    
      status:  {id:1 ,name: '', color: ''},
    };

  constructor(private fb: FormBuilder,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig,
              private portfolioService: PortfolioService,
              private router: Router,
              private activatedRoute: ActivatedRoute
    ) { 

      this.grupo = [
        { id: 40, name: 'FrontEnd' },
        { id: 41, name: 'BackEnd' },
        { id: 42, name: 'DataBase' },
        { id: 43, name: 'Dev Ops' },
        { id: 44, name: 'Mobile App' },
        { id: 45, name: 'Soft Skills' },
        { id: 78, name: 'Tools' }
      ];

      this.category = [
        { id: 46, name: 'Framework' },
        { id: 47, name: 'Language' },
        { id: 48, name: 'Basics' },
        { id: 49, name: 'Tools' },
        { id: 66, name: 'Styles' },
        { id: 67, name: 'Technology' },
        { id: 68, name: 'RDBMS' },
        { id: 69, name: 'NoSQL' },
        { id: 70, name: 'Graph' },
        { id: 71, name: 'Message Queues' },
        { id: 72, name: 'Infraestructure' },
        { id: 73, name: 'Automation' },
        { id: 74, name: 'Virtualization' },
        { id: 75, name: 'Android' },
        { id: 76, name: 'IOS' },
        { id: 77, name: 'Cross Platform' },
        { id: 79, name: 'IDE' },
        { id: 80, name: 'Management' },
        { id: 81, name: 'Time Management' },
        { id: 82, name: 'Communication' },
        { id: 83, name: 'Adaptability' },
        { id: 84, name: 'Problem-solving' },
        { id: 85, name: 'Teamwork' },
        { id: 86, name: 'Creativity' },
        { id: 87, name: 'Leadership' },
        { id: 88, name: 'Interpersonal skills' },
        { id: 89, name: 'Work ethic' },
        { id: 90, name: 'Attention to detail' }
      ];

      this.status = [
        { id: 54, name: 'Principiante' , color: '#FDFFB6'},
        { id: 55, name: 'Intermedio' , color: '#CAFFBF'},
        { id: 56, name: 'Avanzado' , color: '#A0C4FF'},
        { id: 57, name: 'Experto' , color: '#BDB2FF'}
      ];


    }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    if(this.router.url.includes('eliminar')){
      this.elimina = true;
    }
   
    if (this.router.url.includes('editar')) {
      this.edita = true;
    }

    if( !this.router.url.includes('editar') && !this.router.url.includes('eliminar') ){
      return;
  } else {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.portfolioService.getSkillPorId(id))
    )
    .subscribe( data => {this.habilidad = data,
      
      this.addSkillForm.reset({
        id: this.habilidad.id,
        grupo: this.habilidad.grupo,   
        name: this.habilidad.name,       
        category: this.habilidad.category ,     
        status: this.habilidad.status, 
        img: this.habilidad.img
        })
       
    } );
    }
    
  }

  campoEsValido( campo: string){
    return this.addSkillForm.controls[campo].errors && this.addSkillForm.controls[campo].touched
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Esta seguro que desea proceder?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          
            if(this.habilidad.id){
              //Editar
              this.portfolioService.updateSkill(this.addSkillForm.value)
              .subscribe ( skill => {
                this.router.navigate(['/habilidades'])
              })
              console.log(this.addSkillForm.value)
            } else{
              //Agregar
              this.portfolioService.addSkill(this.addSkillForm.value)
              .subscribe ( skill => {
               this.router.navigate(['/habilidades'])
            })
            console.log(this.addSkillForm.value)
            }          
                     
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
}

 borrar() {
  this.confirmationService.confirm({
      message: 'Esta seguro que desea eliminar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.activatedRoute.params
        .pipe(
              switchMap( ({id}) => this.portfolioService.deleteSkill(id))
             )
              .subscribe( data => 
                this.router.navigate(['/habilidades'])
              )                  
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
}

seleccionarFoto(event: any): void {
  this.fotoSeleccionada = event.target.files[0];
  this.progreso = 0;
  console.log(this.fotoSeleccionada);
  if (this.fotoSeleccionada.type.indexOf('image') < 0) {
    // Swal.fire(
    //   'Error seleccionar imagen: ',
    //   'el arhivo debe ser del tipo imagen',
    //   'error'
    // );
    //tarea pendiente: hacer que se borre el arhivo seleccionado que no es una imagen
  }
}

subirFoto() {
  if (!this.fotoSeleccionada) {
    // Swal.fire('Error upload: ', 'debe seleccionar una foto', 'error');
  } else {
    this.portfolioService
      .uploadImgSkill(this.fotoSeleccionada, this.habilidad.id)
      .subscribe((event) => {
        if (
          event.type === HttpEventType.UploadProgress &&
          event.total !== undefined
        ) {
          this.progreso = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          let response: any = event.body;
          this.habilidad = response.habilidad as Skills;
          // Swal.fire(
          //   'La foto se ha subido correctamente',
          //   response.mensaje,
          //   'success'
          // );
        }
      });
  }
}


}
