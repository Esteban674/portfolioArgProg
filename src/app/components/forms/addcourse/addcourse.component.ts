import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { switchMap } from 'rxjs/operators';
import { Course } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
  providers: [ConfirmationService]
})
export class AddcourseComponent implements OnInit {

  addCourseForm: FormGroup = this.fb.group({
    id:[,[]], 
    name:['',[Validators.required]],        
    issuingAuthority:['',[Validators.required]],          
    expeditionDate:['',[Validators.required]],             
    credentialId:['',[]],  
    credentialUrl:['',[]],     
    comments:['',[]],
    img:['',[]]
    })

    msgs: Message[] = [];
  
    elimina:boolean = false;
  
    curso: Course = {
    name:'',        
    issuingAuthority:'',          
    expeditionDate:'',             
    credentialId:'',  
    credentialUrl:'',     
    comments:'',
    img:'',
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
     
  
      if( !this.router.url.includes('editar') && !this.router.url.includes('eliminar') ){
        return;
    } else {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.portfolioService.getCoursePorId(id))
      )
      .subscribe( data => {this.curso = data,
        
        this.addCourseForm.reset({
          id: this.curso.id,
          name: this.curso.name,        
          issuingAuthority: this.curso.issuingAuthority,          
          expeditionDate: this.curso.expeditionDate,             
          credentialId: this.curso.credentialId,  
          credentialUrl: this.curso.credentialUrl,     
          comments: this.curso.comments,
          img: this.curso.img,
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
            
              if(this.curso.id){
                //Editar
                this.portfolioService.updateCourse(this.addCourseForm.value)
                .subscribe ( curso => {
                  this.router.navigate(['/cursos'])
                })
                console.log(this.addCourseForm.value)
              } else{
                //Agregar
                this.portfolioService.addCourse(this.addCourseForm.value)
                .subscribe ( curso => {
                 this.router.navigate(['/cursos'])
              })
              console.log(this.addCourseForm.value)
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
                switchMap( ({id}) => this.portfolioService.deleteCourse(id))
               )
                .subscribe( data => 
                  this.router.navigate(['/cursos'])
                )                  
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }

}
