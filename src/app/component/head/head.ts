import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-head',
  template: '',
  styleUrl: './head.css',
  standalone: true
})
export class Head {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Marcos Jimenez Garcia | Web Developer');
    this.metaService.updateTag({ name: 'description', content: 'Portfolio de Marcos Jimenez Garcia, Desarrollador Web con más de 4 años de experiencia.' });
  }
}
