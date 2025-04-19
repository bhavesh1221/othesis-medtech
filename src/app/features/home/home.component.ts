import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
interface TemplateItem {
  templates: string;
  description: string[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  templates: TemplateItem[] = [
    { templates: 'Subjective', description: ['Subjective: Toothache for few days'] },
    { templates: 'Objective', description: ['History of Presenting Complaints: Toothache: present for few days'] },
    { templates: 'Assesment & Plan', description: ['Extra Oral Examination: Not performed'] },
    { templates: 'Findings', description: ['Intra Oral Examination: Tenderness around molar Swollen gum', 'swallen gum'] },
    { templates: 'Diagnoses', description: ['Radiographic Findings: X-ray planned to confirm extent of infection'] },
    { templates: 'Treatment', description: ['Diagnoses: Suspected tooth abscess'] },
    { templates: 'Recovery', description: ['sample'] },
    { templates: 'Objective', description: ['sample'] },
    { templates: 'Assesment & Plan', description: ['sample'] },
    { templates: 'Treatment', description: ['sample'] }
  ]

  rootCanal: TemplateItem[] = [
    { templates: 'Get up', description: ['sample'] },
    { templates: 'Brush teeth', description: ['sample'] },
    { templates: 'Take a shower', description: ['sample'] },
    { templates: 'Check e-mail', description: ['sample'] },
    { templates: 'Walk dog', description: ['sample'] }
  ];
  searchTerm: string = '';

  drop(event: CdkDragDrop<TemplateItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  
  // Update your filter method
  get filteredTodo() {
    return this.templates.filter(item => 
      item.templates.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
