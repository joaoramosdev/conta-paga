import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-codigo-barras',
  templateUrl: './codigo-barras.component.html',
  styleUrls: ['./codigo-barras.component.scss'],
})
export class CodigoBarrasComponent implements OnInit, AfterViewInit {
  input1: any;
  input2: any;
  input3: any;
  input4: any;
  @ViewChild('codbar') codbar: ElementRef | undefined;
  tipo: any = '0';

  public codigoForm = new FormGroup({
    mainInput: new FormControl('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _location: Location,
    private _Activatedroute: ActivatedRoute,
  ) {
    this.tipo = this._Activatedroute.snapshot.paramMap.get('tipo');
  }

  ngOnInit(): void {
    this.codigoForm.get('mainInput')?.valueChanges.subscribe(() => {
      // let string = this.codigoForm.controls['mainInput'].value;

      // let string1 = string.slice(0,10);
      // let string2 = string.slice(10,22);
      // let string3 = string.slice(22,35);
      // let string4 = string.slice(35,50);

      // let breakpoints = [10, 22, 35];

      // if(breakpoints.indexOf(string.length) > -1) {
      //   this.codigoForm.get('mainInput')?.setValue(string.concat('\n'));
      // }

      // this.input1 = string1;
      // this.input2 = string2;
      // this.input3 = string3;
      // this.input4 = string4;

      // console.log(string);
      this.codbar?.nativeElement.focus();
      this.codigoForm
        .get('mainInput')
        ?.setValue(this.codigoForm.get('mainInput')?.value.trim());
    });
  }

  clearForm() {
    this.codigoForm.get('mainInput')?.setValue('');
  }

  redirect(to: string) {
    this.router.navigate([to]);
  }

  ngAfterViewInit(): void {
    this.codbar?.nativeElement.focus();
  }

  put(item: any) {
    if (item === 'Apagar') {
      this.codigoForm
        .get('mainInput')
        ?.setValue(
          this.codigoForm
            .get('mainInput')
            ?.value.slice(0, this.codigoForm.get('mainInput')?.value.length - 1)
        );
    } else {
      this.codigoForm
        .get('mainInput')
        ?.setValue(this.codigoForm.get('mainInput')?.value + item);
    }
  }

  deleteHandler() {
    this.codigoForm
      .get('mainInput')
      ?.setValue(
        this.codigoForm
          .get('mainInput')
          ?.value.slice(0, this.codigoForm.get('mainInput')?.value.length - 1)
      );
  }

  holdHandler(e: any) {
    console.log(e);
    if (e > 1000) {
      this.codigoForm.controls['mainInput'].setValue('');
    }
  }

  voltarPagina() {
    this._location.back();
  }
}
