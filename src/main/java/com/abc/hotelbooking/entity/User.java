package com.abc.hotelbooking.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name = "Users")
public class User {
    @Id
    private Long userid;
 
    private String name;
    
    private String email;
    
    private String phone;
 
}