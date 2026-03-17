import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import proyectosData from '../../../../public/proyectos.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  protected readonly proyectos = signal(proyectosData);
}