import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../interface/Chat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiChat {

  private URL_API : string = "http://localhost:8080/api";

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllChats(): Observable<Chat[]> {

    return this.httpClient.get<Chat[]>(
      this.URL_API + '/'
    );

  }

  getLastChat(): Observable<Chat> {

    return this.httpClient.get<Chat>(
      this.URL_API + '/getLastChat'
    );

  }

  postChat(
    chat: Chat
  ): Observable<Chat> {

    return this.httpClient.post<Chat>(
      this.URL_API + '/postChat',
      chat
    );

  }
}
