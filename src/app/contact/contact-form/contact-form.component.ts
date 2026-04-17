import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    details: ['', Validators.required],
  });

  protected submitted = false;
  protected submitting = false;
  protected submitSuccess = false;
  protected submitError = '';

  protected onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digitsOnly = input.value.replace(/\D+/g, '');

    if (input.value !== digitsOnly) {
      input.value = digitsOnly;
    }

    this.contactForm.controls.phone.setValue(digitsOnly, { emitEvent: false });
  }

  protected onSubmit(): void {
    this.submitted = true;
    this.submitError = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.contactForm.disable();

    const payload = {
      name: this.contactForm.controls.name.value ?? '',
      email: this.contactForm.controls.email.value ?? '',
      phone: this.contactForm.controls.phone.value ?? '',
      company: this.contactForm.controls.company.value ?? '',
      details: this.contactForm.controls.details.value ?? '',
    };

    this.contactService.send(payload).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
        this.contactForm.enable();
        this.submitError = 'We could not send your request right now. Please try again in a moment.';
      },
    });
  }
}
