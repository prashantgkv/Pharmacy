package com.pharmacy.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pharmacy.model.Pharmacy;
import com.pharmacy.service.PharmacyService;

@RestController
public class PharmacyController {
	
	@Autowired
	PharmacyService pharmacyService;

	@PostMapping("/pharmacy")
	public void save(@RequestBody Pharmacy pharmacy) {
		pharmacyService.save(pharmacy);
		
	}
	
	@GetMapping("/pharmacy/{id}")
	public Optional<Pharmacy> get(@PathVariable Long id) {
		return pharmacyService.getPharmacy(id);
	}
	
}
