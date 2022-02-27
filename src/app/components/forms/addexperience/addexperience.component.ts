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

  experiencia: Experience = {
    position: '',   
    mode: {name: ''},     
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
      {name: 'Media Jornada'},
      {name: 'Jornada Completa'},
      {name: 'Remota'}
    ];


   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    if(this.router.url.includes('eliminar')){
      this.elimina = true;
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
        })
       
    } );
    }
    
   
    

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
      message: 'Esta seguro que desea eiliminar?',
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

}
