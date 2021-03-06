package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Customer;
import com.app.service.CustomerCRUDService;

@RestController
@CrossOrigin
public class CustomerLoginController {

	
	@Autowired
	private CustomerCRUDService service;
	
	@PostMapping("/customer/login")
	public Customer loginValidation(@RequestBody Customer customer) throws Exception {
		Customer c = new Customer();
		boolean flag = false;

		c = service.findByEmail(customer.getEmailId());

		if (c.getPassword().equals(customer.getPassword())) {
			flag = true;
		}
		if (flag) {
			return c;
		} else {
			throw new Exception();
		}
	}
}
