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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `convo_id` int unsigned NOT NULL,
  `mentor_id` int unsigned DEFAULT NULL,
  `mentee_id` int unsigned DEFAULT NULL,
  `content` text NOT NULL,
  `sent_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `messages_convo_id_id_unique` (`convo_id`,`id`),
  KEY `messages_mentor_id_foreign` (`mentor_id`),
  KEY `messages_mentee_id_foreign` (`mentee_id`),
  CONSTRAINT `messages_convo_id_foreign` FOREIGN KEY (`convo_id`) REFERENCES `convos` (`id`),
  CONSTRAINT `messages_mentee_id_foreign` FOREIGN KEY (`mentee_id`) REFERENCES `mentees` (`id`),
  CONSTRAINT `messages_mentor_id_foreign` FOREIGN KEY (`mentor_id`) REFERENCES `mentors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,NULL,2,'Hi Jerry! I would like to be your student, if you have the time.','2022-11-01 16:05:00'),(2,1,2,NULL,'Hey Jonathan. Is there anything specific you\'d like to focus on in our mentorship?','2022-11-02 13:15:00'),(3,1,2,NULL,'Feel free to share your progress or any challenges you\'re facing. I\'m here to help!','2022-11-03 18:30:00'),(4,1,NULL,2,'Can you help me with my solo improvisation?','2022-11-04 15:45:00'),(5,1,2,NULL,'Absolutely. Let\'s start the mentorship and I will send you some exercises.','2022-11-05 20:20:00'),(6,1,NULL,2,'Awesome thanks!','2022-11-06 15:10:00'),(7,1,2,NULL,'Looking forward to our next conversation.','2022-11-07 17:30:00'),(8,2,5,NULL,'Hi Dan! How\'s everything going with your guitar project?','2023-01-21 17:10:00'),(9,2,NULL,1,'Hey Paul! It\'s going well. I\'ve been working on some customizations. Can I show you some pictures?','2023-01-22 14:30:00'),(10,2,5,NULL,'Absolutely, Dan! Feel free to share the pictures. I\'m excited to see your progress.','2023-01-23 19:45:00'),(11,2,NULL,1,'Here are a few snapshots of the guitar. Let me know what you think!','2023-01-24 16:20:00'),(12,2,5,NULL,'Wow, Dan! That looks fantastic. I can see the dedication you\'ve put into it. Great job!','2023-01-25 21:35:00'),(13,2,NULL,1,'Thanks, Paul! I really appreciate your guidance. Any tips on the finishing touches?','2023-01-26 15:25:00'),(14,2,5,NULL,'Certainly, Dan! Let\'s discuss the details. Feel free to ask any questions.','2023-01-27 17:45:00'),(15,3,3,NULL,'Hey Jonathan! It\'s Rabea. Excited to connect with a fellow guitar enthusiast! How\'s it going?','2023-01-15 14:00:00'),(16,3,NULL,2,'Hi Rabea! I can\'t believe I\'m actually chatting with you. Huge fan here! Everything\'s going great on my end. How about you?','2023-01-16 16:30:00'),(17,3,3,NULL,'I\'m doing well, Jonathan! Always happy to connect with fans. If you have any guitar-related questions or topics you\'d like to discuss, feel free to let me know.','2023-01-17 19:15:00'),(18,3,NULL,2,'Thanks, Rabea! I\'d love to get your thoughts on a riff I\'ve been working on. Can I share it with you?','2023-01-18 21:45:00'),(19,3,3,NULL,'Absolutely, Jonathan! I\'m all ears. Feel free to send over the riff, and we can discuss it.','2023-01-19 15:20:00');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
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
