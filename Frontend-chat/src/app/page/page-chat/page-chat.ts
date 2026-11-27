import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApiChat } from '../../service/api-chat';
import { Chat } from '../../interface/Chat';
import { MessageClient } from '../../component/message-client/message-client';

@Component({
  selector: 'app-page-chat',
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MessageClient
],
  templateUrl: './page-chat.html',
  styleUrl: './page-chat.scss',
})
export class PageChat implements OnInit{ 

  formulaireChat!: FormGroup;

  public listDesMessages!: Chat[];

  constructor(
    private serviceApi: ApiChat
  ){}


  ngOnInit(): void {

    this.formulaireChat = new FormGroup({

      auteur: new FormControl(
        'Client',
        Validators.required
      ),

      contenuMessage: new FormControl(
        '',
        Validators.required
      )

    });




    

  }


  public envoyer(): void{


    const chatPost: Chat = {

      auteur: this.formulaireChat.value.auteur,

      contenuMessage: this.formulaireChat.value.contenuMessage

    };

    this.serviceApi.postChat(chatPost).subscribe();

    this.formulaireChat.reset();


    this.serviceApi.getAllChats().subscribe({

      next: (messages) => {

        this.listDesMessages = messages;

      },

      error: (erreur) => {

        console.error(erreur);

      }

    });

  }


  public getAllMessage(): void {

    this.serviceApi.getAllChats().subscribe({

      next: (messages) => {

        this.listDesMessages = messages;

      },

      error: (erreur) => {

        console.error(erreur);

      }

    });

  }
  


}
