package com.chat.chat.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chat.chat.model.Chat;
import com.chat.chat.repository.RepositoryChat;

@Service
public class ServiceChat {
	
	@Autowired
	private RepositoryChat repositoryChat;
	
	
	public void postMessage(Chat infoChat) {

		infoChat.setDateEnvoi(
				LocalDateTime.now());
		repositoryChat.save(infoChat);
		
	}
	
	
	public List<Chat> getAllMessages() {
		
		return repositoryChat.findAllByOrderByDateEnvoiDesc();
	}

	public Chat getLastMessage() {

		return repositoryChat.findFirstByOrderByDateEnvoiDesc();
	}
}
