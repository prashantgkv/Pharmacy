package com.pharmacy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharmacy.model.Pharmacy;
import com.pharmacy.repository.PharmacyRepository;

@Service
public class PharmacyService {

	@Autowired
	private PharmacyRepository pharmacyRepo;
	
	public void save(Pharmacy pharmacy) {
		pharmacyRepo.save(pharmacy);
	}
	
	public Optional<Pharmacy> getPharmacy(Long id) {
	   return pharmacyRepo.findById(id);
	}
	
	public List<Pharmacy> getAllPharmacy() {
		return pharmacyRepo.findAll();
	}
}
