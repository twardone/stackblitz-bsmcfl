import { Routes } from '@angular/router';
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


export const routes: Routes = [
  { title: "Tampa Chapter | Home", path: '', component: HomeComponent },
  { title: "Tampa Chapter | Home", path: 'Home', component: HomeComponent },
  { title: "Tampa Chapter | About", path: 'About-Us', component: AboutUsComponent },
  { title: "Tampa Chapter | EC", path: 'Executive-Counsel', component: ExecutiveCounselComponent },
  { title: "Tampa Chapter | Full-Patches", path: 'Full-Patches', component: FullPatchesComponent },
  { title: "Tampa Chapter | Associates", path: 'Associates', component: AssociatesComponent },
  { title: "Tampa Chapter | Life Members", path: 'Retirees', component: RetireesComponent },
  { title: "Tampa Chapter | Fallen Soldiers", path: 'Fallen', component: FallenComponent },
  { title: "Tampa Chapter | Scholarships", path: 'Scholarship', component: ScholarshipComponent },
  { title: "Tampa Chapter | Join-Us", path: 'Join-Us', component: JoinUsComponent },
  { title: "Tampa Chapter | Contact-Us", path: 'Contact-Us', component: ContactUsComponent },
  { title: "Tampa Chapter | Members Only", path: 'Members-Only', component: MembersOnlyComponent },


];
