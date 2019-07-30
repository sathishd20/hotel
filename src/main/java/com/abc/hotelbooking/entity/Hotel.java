package com.abc.hotelbooking.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Hotels")
public class Hotel {
    @Id
    private Long hotelid;
    
	/*
	 * @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	 * 
	 * @JoinColumn(name = "hotelid") private List<Room> rooms = new ArrayList<>();
	 */
    
    private String name;
    
    private String address;
    
    private String city;
    
    private String details;
    
    private Long pincode;
    
    private Long phone;
 
}