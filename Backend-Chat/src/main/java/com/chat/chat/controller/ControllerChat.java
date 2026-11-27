package com.chat.chat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.chat.chat.model.Chat;
import com.chat.chat.service.ServiceChat;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("/api")
public class ControllerChat {
	
	@Autowired
	private ServiceChat serviceChat;
	
	@PostMapping("/postChat")
	public ResponseEntity<Chat> postChat(@RequestBody Chat infoChat) {
		
		serviceChat.postMessage(infoChat);

		Chat lastChat = serviceChat.getLastMessage();

		return ResponseEntity.ok(lastChat);
		
	}
	
	
	@GetMapping("/")
	public ResponseEntity<List<Chat>> getAllChats() {
		
		List<Chat> listChat = serviceChat.getAllMessages();
		
		return ResponseEntity.ok(listChat);
		
	}


	@GetMapping("/getLastChat")
	public ResponseEntity<Chat> getLastChat() {

		Chat lastChat = serviceChat.getLastMessage();

		return ResponseEntity.ok(lastChat);

	}

}
