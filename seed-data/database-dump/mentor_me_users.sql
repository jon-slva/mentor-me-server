-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mentor_me
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `lat` decimal(8,4) NOT NULL,
  `long` decimal(8,4) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `can_text` tinyint(1) DEFAULT '0',
  `pic` varchar(255) DEFAULT '/images/default-profile-img.jpeg',
  `social_ig` varchar(255) DEFAULT NULL,
  `social_facebook` varchar(255) DEFAULT NULL,
  `social_soundcloud` varchar(255) DEFAULT NULL,
  `social_youtube` varchar(255) DEFAULT NULL,
  `social_linkedin` varchar(255) DEFAULT NULL,
  `portfolioLink1` varchar(255) DEFAULT NULL,
  `portfolioLink2` varchar(255) DEFAULT NULL,
  `portfolioLink3` varchar(255) DEFAULT NULL,
  `bio` text NOT NULL,
  `joined_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Matt','Meyer','password123','matt_meyer','123 Main Street','Nashville','Tennessee','37217','United States of America',36.1627,-86.7744,'matt@example.com','615-555-5555',0,'https://media.licdn.com/dms/image/C5603AQEZn6MDgHg0Rg/profile-displayphoto-shrink_800_800/0/1517594081948?e=2147483647&v=beta&t=ONTM4QGay73I8WXm_nxd1Q7ow8QuPy6SqH24H8hK3a0','matt_ig','matt_facebook','matt_soundcloud',NULL,'matt_linkedin','https://portfolio1.com',NULL,NULL,'Passionate about teaching the guitar. Excited to connect with fellow music mentee enthusiasts!','2023-11-20 13:52:36','2023-11-20 13:52:36'),(2,'Dan','Brown','mentee_password','MenteeAlias','456 Second Street','Atlanta','Georgia','30002','United States of America',33.7490,-84.3880,'dan.brown@example.com','123-456-7890',0,'https://hips.hearstapps.com/hmg-prod/images/701/dating-app-photo-mistakes-main-1515525122.jpg','dan_brown_ig','john.doe.facebook','john_doe_soundcloud',NULL,'john_doe_linkedin',NULL,NULL,NULL,'I am passionate about learning guitar and exploring various genres.','2023-11-20 13:52:36','2023-11-20 13:52:36'),(3,'Jerry','Cantrell','your_password','Jerry','123 Main St','Tacoma','Washington','98001','United States of America',47.2529,-122.4443,'jerry@aliceinchains.com','555-555-5555',0,'https://imageio.forbes.com/specials-images/imageserve/626980c1496065da495a6d82/Jerry-Cantrell-poses-in-Chicago-on-night-two-of-the--Brighten--tour--Saturday--March/960x0.jpg?format=jpg&width=960','jerrycantrell','JerryCantrell','jerrycantrellsound',NULL,'jerry-cantrell','https://www.aliceinchains.com',NULL,NULL,'Lead guitarist in Alice In Chains since the band was formed.','2023-11-20 13:52:36','2023-11-20 13:52:36'),(4,'Rabea','Massaad','your_password','Rabea','456 Oak St','Brighton','England','BN1 1AB','United Kingdom',50.8225,-0.1372,'rabea@example.com','555-555-5555',0,'https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/02/10124542/980x980-Rabea-Massaad_Profile-Image-490x490.png','rabeaafro',NULL,NULL,NULL,'linkedin.com/in/rabea-massaad-475b1524','https://www.rabeamassaad.com/','https://Instagram.com/rabeaafro','https://www.YouTube.com/rabeaafro','Hey there! I\'m Rabea Massaad, a guitarist hailing from Brighton, England. You may know me from my YouTube channel \'rabeaafro,\' where I share my love for music and guitar. As a mentor on MentorMe, I\'m here to guide you through the intricacies of guitar playing, offering insights from my real-world experience. Let\'s explore the fretboard, discover new techniques, and unleash the power of music together. Join me on this exciting journey at MentorMe!','2023-11-20 13:52:36','2023-11-20 13:52:36'),(5,'Paul','Davids','securepassword','PaulDavids','123 Guitar Street','Rotterdam','South Holland','1234 AB','Netherlands',51.9225,4.4792,'paul.davids@example.com','555-555-5555',0,'https://maybach-guitars.de/wp-content/uploads/2022/06/Paul-Davids-with-Salmon.jpg','https://instagram.com/pauldavidsguitar','https://www.facebook.com/pauldavids',NULL,'https://www.youtube.com/@PaulDavids',NULL,'https://www.pauldavids.com/',NULL,NULL,'Hey there, I\'m Paul Davids - a passionate guitarist, music educator, and content creator. I\'ve been sharing my love for the guitar on my YouTube channel, where I provide tutorials, gear reviews, and insights into the world of music.\n        As a guitarist, I believe in the power of music to inspire and connect people. Join me on a musical journey where we explore techniques, theory, and the joy of playing the guitar. I\'m excited to be a mentor on MentorMe, where I can share my knowledge and help fellow guitar enthusiasts reach their musical goals.\n        See you in the world of strings and frets! ?','2023-11-20 13:52:36','2023-11-20 13:52:36'),(6,'Paul','Nieto','securepassword','PNieto','207 W 14th St','New York City','NY','10011','United States of America',40.7387,-74.0001,'Pnieto10@gmail.com','212-675-3260',0,'https://i.ytimg.com/vi/U58WL9Iu3Oc/hqdefault.jpg','https://instagram.com/guitartech.nyc','https://www.facebook.com/theRumberos',NULL,'https://www.youtube.com/user/LaMarotte2',NULL,'https://www.guitartechny.com/Home.html',NULL,NULL,'Hey there, I\'m Paul. I\'m the owner and master luthier of Guitar Tech NYC. I\'m on here to train and connect with some of the best and brightest who want to learn to become master luthiers.','2023-11-20 13:52:36','2023-11-20 13:52:36'),(7,'Rick','Beato','your_secure_password','rickbeato','123 Music Street','Atlanta','Georgia','30301','United States of America',33.7490,-84.3880,'rick@example.com','555-555-1234',0,'https://cdn.mos.cms.futurecdn.net/XhxC5f5gUgEjcVBt3P3qsi.jpg','https://instagram.com/rickbeato1','https://facebook.com/rick.beato',NULL,'https://www.youtube.com/c/RickBeato',NULL,'https://www.youtube.com/@rickbeato240',NULL,NULL,'Music producer, educator, and YouTuber known for his insightful breakdowns of songs, music theory lessons, and music production tips. With a wealth of experience in the music industry, Rick Beato shares his knowledge to help musicians and music enthusiasts deepen their understanding of music.','2023-11-20 13:52:36','2023-11-20 13:52:36'),(8,'Jonathan','Silva','password123','johnny5ive167','123 Bunker Street','Middle Island','New York','11953','United States of America',40.8833,-72.9450,'jonathan.silva167@gmail.com','555-555-1234',0,'https://media.licdn.com/dms/image/C5103AQHC-EnKQk3hbQ/profile-displayphoto-shrink_800_800/0/1517364614311?e=2147483647&v=beta&t=aDsR-1DgZviO019cpRFtY76G4efGIw_DvemvmgFzTpw','https://instagram.com/artbyjs',NULL,NULL,NULL,'https://www.linkedin.com/in/jonathansilva761/','https://intenebrisbyjs.com','https://github.com/jon-slva','https://jewelrybyjs.com','Just a guy who does a lot of things and is passinonate about learning.','2023-11-20 13:52:36','2023-11-21 18:03:32'),(9,'John','Doe','securePassword123','john_doe','456 Oak Street','Anytown','California','90210','United States',34.0522,-118.2437,'john.doe@example.com','555-1234',1,'https://example.com/john_doe_pic.jpg','john_ig','john_facebook','john_soundcloud','john_youtube','john_linkedin','https://john-portfolio1.com','https://john-portfolio2.com',NULL,'Passionate about technology and innovation. Always eager to learn and share knowledge!','2023-11-21 20:13:48','2023-11-21 20:13:48'),(15,'Alice','Anderson','password456','alice_mentee','456 Oak Street','San Francisco','California','94102','United States of America',37.7749,-122.4194,'alice@example.com','415-555-5555',1,'https://example.com/alice_profile_pic.jpg','alice_ig','alice_facebook','alice_soundcloud','alice_youtube','alice_linkedin','https://alice-portfolio1.com','https://alice-portfolio2.com',NULL,'Passionate about technology and eager to learn from experienced mentors!','2023-11-22 19:28:07','2023-11-22 19:28:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 21:03:32
