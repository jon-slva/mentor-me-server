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
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `rating` int NOT NULL,
  `content` varchar(255) NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `mentee_id` int unsigned NOT NULL,
  `mentor_id` int unsigned NOT NULL,
  `mentorship_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reviews_mentee_id_mentorship_id_unique` (`mentee_id`,`mentorship_id`),
  KEY `reviews_mentor_id_foreign` (`mentor_id`),
  KEY `reviews_mentorship_id_foreign` (`mentorship_id`),
  CONSTRAINT `reviews_mentee_id_foreign` FOREIGN KEY (`mentee_id`) REFERENCES `mentees` (`id`),
  CONSTRAINT `reviews_mentor_id_foreign` FOREIGN KEY (`mentor_id`) REFERENCES `mentors` (`id`),
  CONSTRAINT `reviews_mentorship_id_foreign` FOREIGN KEY (`mentorship_id`) REFERENCES `mentorships` (`id`),
  CONSTRAINT `reviews_chk_1` CHECK ((`rating` in (1,2,3,4,5)))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,5,'Exceptional mentorship experience! Learned a lot and improved my guitar skills significantly. Jerry is Awesome','2023-08-01 14:30:00',2,2,1),(2,4,'Great mentorship experience. Some helpful insights but could be more focused on violins and other stringed instruments.','2023-04-15 20:20:00',1,5,2);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 21:03:31
