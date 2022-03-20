import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { switchMap } from 'rxjs/operators';
import { Experience, Mode } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-addexperience',
  templateUrl: './addexperience.component.html',
  styleUrls: ['./addexperience.component.css'],
  providers: [ConfirmationService]
})
export class AddexperienceComponent implements OnInit {

  addExperienceForm: FormGroup = this.fb.group({
  id:[,[]], 
  position:['',[Validators.required]],        
  mode:['',[Validators.required]],          
  company:['',[Validators.required]],        
  location:['',[Validators.required]],       
  startDate:['',[Validators.required]],  
  endDate:['',[]],     
  comments:['',[]]
  })

  startDateF: Date = new Date();

  modalidades: Mode[] = [];

  msgs: Message[] = [];

  elimina:boolean = false;
  edita: boolean = false;
  fotoSeleccionada!: File;
  progreso: number = 0;

  experiencia: Experience = {
    position: '',   
    mode: {id: 1,name: ''},     
    company: '' ,     
    location:  '', 
    startDate: '', 
    endDate: undefined,
    comments:''
  };

  constructor(private fb: FormBuilder,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig,
              private portfolioService: PortfolioService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) {

    this.modalidades = [
      { id: 1, name: 'Media Jornada' },
      { id: 2, name: 'Jornada Completa' },
      { id: 3, name: 'Remota' },
      { id: 4, name: 'Jornada Parcial' },
      { id: 5, name: 'Autónomo' },
      { id: 6, name: 'Profesional independente' },
      { id: 7, name: 'Contrato temporal' },
      { id: 8, name: 'Contrato de prácticas' },
      { id: 9, name: 'Contrato de formación' }
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
      switchMap( ({id}) => this.portfolioService.getExperiencePorId(id))
    )
    .subscribe( data => {this.experiencia = data,
      
      this.addExperienceForm.reset({
        id: this.experiencia.id,
        position: this.experiencia.position,   
        mode: this.experiencia.mode,       
        company: this.experiencia.company ,     
        location: this.experiencia.location, 
        startDate: this.experiencia.startDate,
        endDate: this.experiencia.endDate,
        comments: this.experiencia.comments,
        img: this.experiencia.img,
        })
       
    } );
    }
  }
  
  campoEsValido( campo: string){
    return this.addExperienceForm.controls[campo].errors && this.addExperienceForm.controls[campo].touched
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Esta seguro que desea proceder?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          
            if(this.experiencia.id){
              //Editar
              this.portfolioService.updateExperience(this.addExperienceForm.value)
              .subscribe ( experiencie => {
                this.router.navigate(['/experiencia'])
              })
              console.log(this.addExperienceForm.value)
            } else{
              //Agregar
              this.portfolioService.addExperience(this.addExperienceForm.value)
              .subscribe ( experiencie => {
               this.router.navigate(['/experiencia'])
            })
            console.log(this.addExperienceForm.value)
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
              switchMap( ({id}) => this.portfolioService.deleteExperience(id))
             )
              .subscribe( data => 
                this.router.navigate(['/experiencia'])
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
      .uploadImgExperience(this.fotoSeleccionada, this.experiencia.id)
      .subscribe((event) => {
        if (
          event.type === HttpEventType.UploadProgress &&
          event.total !== undefined
        ) {
          this.progreso = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          let response: any = event.body;
          this.experiencia = response.experiencia as Experience;
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
