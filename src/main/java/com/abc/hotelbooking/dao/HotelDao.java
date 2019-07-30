package com.abc.hotelbooking.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.abc.hotelbooking.entity.Hotel;


@Repository
public interface HotelDao extends JpaRepository<Hotel, Long> {
	
	@Query("SELECT m.city FROM Hotel m WHERE  upper(m.city) LIKE %:searchText%")
    List<String> findCities(@Param("searchText") String searchText);
	
	
	@Query("SELECT m.city FROM Hotel m")
    List<String> getAllCities();
	
	@Query("SELECT m FROM Hotel m")
    List<Hotel> getAllHotels();
	
	@Query(
	  value = "SELECT m.* FROM Hotels m LEFT OUTER JOIN BookingDetails b  ", 
	  nativeQuery = true)
	List<Hotel> findAllHotels();
	
	 
	@Query("SELECT m.name FROM Hotel m,  BookingDetails b WHERE upper(m.name) LIKE %:searchText% "
			+ " or m.city = :searchText")
    List<String> findByNameOrCity(@Param("searchText") String searchText);
	
	@Query(
	  value = "select * from hotels where hotelid in (" + 
	  		"select r.hotelid from rooms r where r.roomid not in (select roomid from bookingdetails where roomtype ='1B') " + 
	  		")", 
	  nativeQuery = true)
	List<Hotel> getHotels();
	
	
 
}