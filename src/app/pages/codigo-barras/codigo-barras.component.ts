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
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

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
    private apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.tipo = this._Activatedroute.snapshot.paramMap.get('tipo');
  }

  ngOnInit(): void {
    
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

  getBoletoInfo() {
    let codBar = this.codigoForm
    .get('mainInput')
    ?.value
    console.log(codBar)

    this.apiService.getBoletoInfo(codBar).subscribe(data => {
      this.toastr.success('Hello world!', 'Toastr fun!');
      console.log(data)
    })
  }
}
