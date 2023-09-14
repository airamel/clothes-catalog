import { Component, Input } from '@angular/core';
import { ClothItem } from '../../../Domain/models/cloth-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: ClothItem = { cloth: '', brand: '', description: '', color: '', size: '', price: '', status: '', photo: '' }
}
