import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { Contacto } from 'src/app/interfaces/interfaces';
import { EmailSenderService } from 'src/app/services/email-sender.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ConfirmationService],
})
export class ContactoComponent implements OnInit {

  contacto!: Contacto;
  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  msgs: Message[] = [];

  contactoForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    comments: ['', [Validators.required]],
  });

  get emailErrorMsg():string {
    const errors = this.contactoForm.get('email')?.errors;
    if( errors?.['required']){
      return 'El email es obligatorio.'
    } else if( errors?.['pattern']){
      return 'El email ingresado no tiene un formato válido';
    } 
    return '';
  }

  constructor(private emailSender : EmailSenderService, private fb: FormBuilder,
              private confirmationService: ConfirmationService,
              private router: Router, private primengConfig: PrimeNGConfig,) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  enviarContacto(contacto: Contacto){
    
  }

  campoEsValido(campo: string){
    return this.contactoForm.get(campo)?.invalid
           && this.contactoForm.get(campo)?.touched;
  }

  
  confirm() {
    this.confirmationService.confirm({
      message: 'Esta seguro que desea proceder?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.emailSender
            .sendEmail(this.contactoForm.value)
            .subscribe((contacto) => {
              this.router.navigate(['/acercade']);
            });
          console.log(this.contactoForm.value);
           
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }
}
