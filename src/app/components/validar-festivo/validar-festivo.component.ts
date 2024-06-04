import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from 'src/app/entities/festivo';
import { FestivoService } from 'src/app/services/festivo.service';

@Component({
  selector: 'app-validar-festivo',
  templateUrl: './validar-festivo.component.html',
  styleUrls: ['./validar-festivo.component.css'],
})
export class ValidarFestivoComponent implements OnInit {
  onActivate($event: any) {
    throw new Error('Method not implemented.');
  }
  public selectedDate: Date;
  public enteredYear: number;
  public festivos: Festivo[];
  public columns = [
    { name: 'Festivo', prop: 'nombre' },
    { name: 'Fecha', prop: 'fecha' },
  ];
  public columnMode = ColumnMode;
  public selecionType = SelectionType;
  public selectedFestivo: Festivo | undefined;
  modoColumna: any;
  tipoSeleccion: any;

  constructor(private festivoService: FestivoService) {}

  verifyHoliday(): void {
    const date = new Date(this.selectedDate);

    if (this.isValidDate(date)) {
      this.festivoService.verifyHoliday(date).subscribe((res) => {
        window.alert(res);
      });
    } else {
      //cuando se da click y no hay fecha
      window.alert(
        'La fecha no es válida. Por favor, ingrese una fecha. Debe seguir la secuencia MM/DD/YYYY.'
      );
    }
  }

  isValidDate(date: Date): boolean {
    return !isNaN(date.getTime());
  }

  getFestivos(): void {
    if (this.isYearValid(this.enteredYear)) {
      this.festivoService.getFestivos(this.enteredYear).subscribe((res) => {
        this.festivos = res;
        console.log(this.festivos);
      });
    } else {
      // Si se da click en el boton y no hay año
      window.alert(
        'Lo sentimos, año no válido. ingrese solo números en formato YYYY'
      );
    }
  }

  isYearValid(year: number): boolean {
    // Se valida que el año no tenga más de cuatro caracteres, que no sea negativo y no esté vacío
    return year >= 0 && year.toString().length <= 4 && !isNaN(year);
  }

  public handleRowActivation(event: any) {
    // if (event.type === 'click') {
    //   this.selectedFestivo = event.row;
    // }
  }

  ngOnInit(): void {}
}
