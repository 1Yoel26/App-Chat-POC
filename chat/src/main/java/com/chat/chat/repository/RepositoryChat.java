package com.chat.chat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chat.chat.model.Chat;

public interface RepositoryChat extends JpaRepository<Chat, Long> {
	
	List<Chat> findAllByOrderByDateEnvoiDesc();

}
