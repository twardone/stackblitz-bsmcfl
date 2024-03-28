import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ExecutiveCounselComponent } from './pages/executive-counsel/executive-counsel.component';
import { FullPatchesComponent } from './pages/full-patches/full-patches.component';
import { AssociatesComponent } from './pages/associates/associates.component';
import { RetireesComponent } from './pages/retirees/retirees.component';
import { FallenComponent } from './pages/fallen/fallen.component';
import { ScholarshipComponent } from './pages/scholarship/scholarship.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MembersOnlyComponent } from './pages/members-only/members-only.component';
import { FooterComponent } from './core/footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ExecutiveCounselComponent,
    FullPatchesComponent,
    AssociatesComponent,
    RetireesComponent,
    FallenComponent,
    ScholarshipComponent,
    JoinUsComponent,
    ContactUsComponent,
    MembersOnlyComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
