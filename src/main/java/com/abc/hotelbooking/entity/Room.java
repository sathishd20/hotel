package com.abc.hotelbooking.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Rooms")
public class Room {
    @Id
    private Long roomid;
    
    private Long hotelid;
    
    private String roomtype;
    
    private Long maxpersons;
    
    private Long price;
 
}