import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {AuthService } from './services/auth.service';
import { AccountsService } from './services/accounts.service';
import { DataService } from './services/MyData.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemComponent } from './navitem/navitem.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderSectionComponent } from './header/header-section/header-section.component';
import { BodySectionComponent } from './body/body-section/body-section.component';
import { FooterSectionComponent } from './footer/footer-section/footer-section.component';
import { AboutComponent } from './about/about.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { PricingInfoComponent } from './pricing-info/pricing-info.component';
import { RegisterButtonComponent } from './registerbutton/register-button.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { EmployeesComponent } from './employees/employees.component';
import { TrainingComponent } from './training/training.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule, matDatepickerAnimations } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavitemComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HeaderSectionComponent,
    BodySectionComponent,
    FooterSectionComponent,
    AboutComponent,
    AccountInfoComponent,
    PricingInfoComponent,
    RegisterButtonComponent,
    DashboardComponent,
    TrainingsComponent,
    EmployeesComponent,
    TrainingComponent,
    LandingPageComponent,
    RegistrationFormComponent,
    BlogComponent,
    BlogPostComponent
  ],
  imports: [
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'landing', component: LandingPageComponent },
      { path: '', redirectTo: 'landing', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: AboutComponent },
      { path: 'AccountInfo', component: AccountInfoComponent },
      { path: 'PricingInfo', component: PricingInfoComponent },
      { path: 'Random', component: AboutComponent },
    ]),
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AccountsService,
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
