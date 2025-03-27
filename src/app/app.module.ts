import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaculdadeModule } from './pages/faculdade/faculdade.module';
import { PrimengModule } from './primeng.module';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    FaculdadeModule,
    HttpClientModule // Adicione o HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }