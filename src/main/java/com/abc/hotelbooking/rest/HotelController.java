package com.abc.hotelbooking.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.abc.hotelbooking.dao.HotelDao;
import com.abc.hotelbooking.entity.Hotel;

@RestController
public class HotelController {

	@Autowired
    private HotelDao hotelDao;
	
	@GetMapping(path = "/hotels")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public List<Hotel> getHotels(@RequestParam String searchText) {
		List<Hotel> hotels = hotelDao.findByNameOrCity(searchText);
		if(hotels.size() == 0) {
			throw new ResponseStatusException(
			           HttpStatus.NOT_FOUND, "No Hotels are avaiable");
		}
		return hotels;
	}
	
	@GetMapping(path = "/city")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public List<String> getCities(@RequestParam(value="name", defaultValue="") String name) {
		List<String> hotels = "".equalsIgnoreCase(name) ? hotelDao.getAllCities() : hotelDao.findCities(name);
		if(hotels.size() == 0) {
			throw new ResponseStatusException(
			           HttpStatus.NOT_FOUND, "No City are avaiable");
		}
		return hotels;
	}
	
	@GetMapping(path = "/hotels/all")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public List<Hotel> getHotels() {
		List<Hotel> hotels = hotelDao.getAllHotels();
		if(hotels.size() == 0) {
			throw new ResponseStatusException(
			           HttpStatus.NOT_FOUND, "No Hotels are avaiable");
		}
		return hotels;
	}
	
	
}
