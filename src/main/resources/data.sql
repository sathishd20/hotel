DROP TABLE IF EXISTS Hotels;
 
CREATE TABLE Hotels (
  hotelid INT PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  address VARCHAR(250) NOT NULL,
  details VARCHAR(250) NOT NULL,
  city VARCHAR(250) NOT NULL,
  pincode INT DEFAULT NOT NULL,
  phone VARCHAR(20) DEFAULT NOT NULL,
  rating VARCHAR(1) DEFAULT NULL
);
 
INSERT INTO Hotels (hotelid, name, address, city, pincode, details, phone) VALUES
  (1,'Taj Coromandel', 'Nungambakam', 'Chennai', 600056, '', '12345'),
  (2,'The Chancery Pavilion', 'Ashok Nagar', 'Bengaluru', 623007, '', '9897'),
  (3,'The Elephant Court', 'Thekkadi', 'Kerala', 680056, '', '86286');
  
DROP TABLE IF EXISTS Rooms;

CREATE TABLE Rooms (
  roomid INT  PRIMARY KEY,
  hotelid INT  NOT NULL,
  roomtype VARCHAR(250) NOT NULL,
  maxpersons INT NOT NULL,
  price INT NOT NULL
);

INSERT INTO Rooms (roomid, hotelid, roomtype, maxpersons, price) VALUES
  (1,1,'1B', '2', 5000),
  (2,1,'5B', '12', 20000),
  (3,2,'2B', '4', 10000);

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  userid INT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  phone VARCHAR(20) NOT NULL
);

INSERT INTO Users (userid, name, email, phone) VALUES
  (1,'Sathish','sathish123@gmail.com', '86868'),
  (2,'Ram','ram123@gmail.com', '567456'),
  (3,'Sam','sam123@gmail.com', '456477');

 DROP TABLE IF EXISTS BookingDetails;
 
CREATE TABLE BookingDetails (
  bookingid INT AUTO_INCREMENT PRIMARY KEY,
  userid INT NOT NULL,
  hotelid INT NOT NULL,
  roomid INT NOT NULL,
  startdate VARCHAR(50) NOT NULL,
  enddate VARCHAR(50) NOT NULL
);

