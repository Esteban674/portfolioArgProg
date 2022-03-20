import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { switchMap } from 'rxjs/operators';
import { Education } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css'],
  providers: [ConfirmationService]
})
export class AddeducationComponent implements OnInit {

  addEducationForm: FormGroup = this.fb.group({
    id:[,[]], 
    school:['',[Validators.required]],        
    title:['',[Validators.required]],          
    career:['',[Validators.required]],             
    startDate:['',[Validators.required]],  
    endDate:['',[]],     
    comments:['',[]],
    // img:['',[]]
    })

    msgs: Message[] = [];
  
    elimina:boolean = false;
    edita: boolean = false;
    fotoSeleccionada!: File;
    progreso: number = 0;
  
    educacion: Education = {
      school: '',   
      title: '',     
      career: '',     
      startDate: '', 
      endDate: undefined,
      comments:'',
      // img:''
    };
  
    constructor(private fb: FormBuilder,
                private confirmationService: ConfirmationService,
                private primengConfig: PrimeNGConfig,
                private portfolioService: PortfolioService,
                private router: Router,
                private activatedRoute: ActivatedRoute
                ) {
  
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
        switchMap( ({id}) => this.portfolioService.getEducationPorId(id))
      )
      .subscribe( data => {this.educacion = data,
        
        this.addEducationForm.reset({
          id: this.educacion.id,
          school: this.educacion.school,   
          title: this.educacion.title,     
          career: this.educacion.career,     
          startDate: this.educacion.startDate, 
          endDate: this.educacion.endDate,
          comments: this.educacion.comments,
          img: this.educacion.img
          })
         
      } );
      }
         
    }
    
    campoEsValido( campo: string){
      return this.addEducationForm.controls[campo].errors && this.addEducationForm.controls[campo].touched
    }
  
    confirm() {
      this.confirmationService.confirm({
          message: 'Esta seguro que desea proceder?',
          header: 'Confirmación',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            
              if(this.educacion.id){
                //Editar
                this.portfolioService.updateEducation(this.addEducationForm.value)
                .subscribe ( educacion => {
                  this.router.navigate(['/educacion'])
                })
                console.log(this.addEducationForm.value)
              } else{
                //Agregar
                this.portfolioService.addEducation(this.addEducationForm.value)
                .subscribe ( educacion => {
                 this.router.navigate(['/educacion'])
              })
              console.log(this.addEducationForm.value)
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
                switchMap( ({id}) => this.portfolioService.deleteEducation(id))
               )
                .subscribe( data => 
                  this.router.navigate(['/educacion'])
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
        .uploadImgEducation(this.fotoSeleccionada, this.educacion.id)
        .subscribe((event) => {
          if (
            event.type === HttpEventType.UploadProgress &&
            event.total !== undefined
          ) {
            this.progreso = Math.round((100 * event.loaded) / event.total);
          } else if (event.type === HttpEventType.Response) {
            let response: any = event.body;
            this.educacion = response.educacion as Education;
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
