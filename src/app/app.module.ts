import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetcodeInputComponent } from './setcode-input/setcode-input.component';
import { SetnameOutputComponent } from './setname-output/setname-output.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YgoLookupService } from './ygo-lookup.service';

@NgModule({
  declarations: [
    AppComponent,
    SetcodeInputComponent,
    SetnameOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [YgoLookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
