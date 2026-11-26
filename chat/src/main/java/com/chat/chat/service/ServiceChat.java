package com.chat.chat.service;

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
		
		repositoryChat.save(infoChat);
		
	}
	
	
	public List<Chat> getAllMessages() {
		
		return repositoryChat.findAllByOrderByDateEnvoiDesc();
	}

}
