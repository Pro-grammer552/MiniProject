package com.MiniProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MiniProject.model.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {

}
