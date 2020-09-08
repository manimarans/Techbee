import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
