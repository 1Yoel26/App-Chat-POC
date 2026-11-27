import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-client',
  imports: [],
  templateUrl: './message-client.html',
  styleUrl: './message-client.scss',
})
export class MessageClient {

  @Input() date!: string
  @Input() auteur!: string
  @Input() text!: string

}
