import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../../public/habilidades.json';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  protected readonly habilidades = signal(data);
}
