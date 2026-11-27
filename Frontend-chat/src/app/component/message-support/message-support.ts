import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-support',
  imports: [],
  templateUrl: './message-support.html',
  styleUrl: './message-support.scss',
})
export class MessageSupport {

  @Input() date!: string
  @Input() auteur!: string
  @Input() text!: string
}
