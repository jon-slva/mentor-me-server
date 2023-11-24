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
-- Table structure for table `mentorships`
--

DROP TABLE IF EXISTS `mentorships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentorships` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `mentor_id` int unsigned NOT NULL,
  `mentee_id` int unsigned NOT NULL,
  `subject_id` int unsigned NOT NULL,
  `convo_id` int unsigned NOT NULL,
  `start_date` timestamp NOT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mentorships_mentor_id_mentee_id_subject_id_convo_id_unique` (`mentor_id`,`mentee_id`,`subject_id`,`convo_id`),
  KEY `mentorships_mentee_id_foreign` (`mentee_id`),
  KEY `mentorships_subject_id_foreign` (`subject_id`),
  KEY `mentorships_convo_id_foreign` (`convo_id`),
  CONSTRAINT `mentorships_convo_id_foreign` FOREIGN KEY (`convo_id`) REFERENCES `convos` (`id`),
  CONSTRAINT `mentorships_mentee_id_foreign` FOREIGN KEY (`mentee_id`) REFERENCES `mentees` (`id`),
  CONSTRAINT `mentorships_mentor_id_foreign` FOREIGN KEY (`mentor_id`) REFERENCES `mentors` (`id`),
  CONSTRAINT `mentorships_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentorships`
--

LOCK TABLES `mentorships` WRITE;
/*!40000 ALTER TABLE `mentorships` DISABLE KEYS */;
INSERT INTO `mentorships` VALUES (1,2,2,1,1,'2022-12-01 05:00:00','2023-08-01 03:59:59'),(2,5,1,2,2,'2023-02-01 17:00:00',NULL),(3,3,2,1,3,'2023-01-15 17:00:00',NULL);
/*!40000 ALTER TABLE `mentorships` ENABLE KEYS */;
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
