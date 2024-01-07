import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'smartfit-fe-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  public trainForm!: FormGroup<TrainForm>;

  public ngOnInit(): void {
    this.trainForm = this.formBuilder.group({
      period: this.formBuilder.control(
        { value: '', disabled: false },
        { validators: [Validators.required] },
      ),
      closedLocation: this.formBuilder.control({
        value: false,
        disabled: false,
      }),
    });
  }

  public sendForm() {
    console.log(this.trainForm.getRawValue());
  }

  public resetForm() {
    this.trainForm.reset();
  }
}

type TrainForm = {
  period: FormControl<string>; //'morning' | 'afternoon' | 'evening'
  closedLocation: FormControl<boolean>;
};
