package com.chat.chat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.chat.chat.model.Chat;
import com.chat.chat.service.ServiceChat;

@Controller
@RequestMapping("/api")
public class ControllerChat {
	
	@Autowired
	private ServiceChat serviceChat;
	
	@PostMapping("/postChat")
	public void postChat(@RequestBody Chat infoChat) {
		
		serviceChat.postMessage(infoChat);
		
	}
	
	
	@GetMapping("/")
	public ResponseEntity<?> getAllChats() {
		
		List<Chat> listChat = serviceChat.getAllMessages();
		
		return ResponseEntity.ok(listChat);
		
	}

}
