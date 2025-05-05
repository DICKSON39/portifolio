import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  messageSent = false; // To trigger the success message

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.send('service_0d9cmjp', 'template_vugjb3m', {
      from_name: this.formData.name,
      reply_to: this.formData.email,
      message: this.formData.message
    }, '5reVtycikPcU8tboq')
    .then(() => {
      this.messageSent = true;
      this.formData = { name: '', email: '', message: '' };
      setTimeout(() => this.messageSent = false, 3000); // Hide message after 3 seconds
    })
    .catch((error) => {
      alert('❌ Failed to send message. Try again.');
      console.error('EmailJS Error:', error);
    });
  }
}



