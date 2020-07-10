import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICard } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card-create-edit-form',
  templateUrl: './card-create-edit-form.component.html',
  styleUrls: ['./card-create-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCreateEditFormComponent implements OnInit {
  @Input()
  card: ICard;

  @Output()
  save: EventEmitter<ICard> = new EventEmitter();

  @Output()
  delete: EventEmitter<ICard> = new EventEmitter();

  formGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(
        this.card && this.card.title ? this.card.title : null,
        {
          validators: [Validators.required],
        }
      ),
      description: new FormControl(
        this.card && this.card.description ? this.card.description : null
      ),
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.save.emit({ ...this.card, ...this.formGroup.value });
    }
  }

  onDelete() {
    this.delete.emit(this.card);
  }
}
