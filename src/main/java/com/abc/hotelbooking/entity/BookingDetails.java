package com.abc.hotelbooking.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name = "BookingDetails")
public class BookingDetails {
    @Id
    private Long bookingid;
	
	private Long userid;
	
	private Long hotelid;
	
	private Long roomid;
}