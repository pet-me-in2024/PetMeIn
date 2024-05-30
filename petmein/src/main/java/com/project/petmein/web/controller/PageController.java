package com.project.petmein.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PageController {

	@GetMapping("/hello")
	public String hello() {
		return "hi";
	}
}
