import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'about',component:AboutComponent},
    {path: 'contact',component:ContactComponent},   
    {path: 'skills',component:SkillsComponent},
    {path: 'projects',component:ProjectsComponent}, // Assuming you have a ProjectsComponent
];
