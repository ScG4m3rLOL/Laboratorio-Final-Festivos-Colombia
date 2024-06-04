import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidarFestivoComponent } from './components/validar-festivo/validar-festivo.component';
import { ReferenciasMaterialModule } from './modules/referencias-material.module';
import { FestivoService } from './services/festivo.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [AppComponent, ValidarFestivoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReferenciasMaterialModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
  ],
  providers: [FestivoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
