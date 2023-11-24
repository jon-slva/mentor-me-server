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
-- Table structure for table `interests`
--

DROP TABLE IF EXISTS `interests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interests` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parent_subject_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `interests_parent_subject_id_foreign` (`parent_subject_id`),
  CONSTRAINT `interests_parent_subject_id_foreign` FOREIGN KEY (`parent_subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interests`
--

LOCK TABLES `interests` WRITE;
/*!40000 ALTER TABLE `interests` DISABLE KEYS */;
INSERT INTO `interests` VALUES (1,'Guitar Fingerstyle Techniques',1),(2,'Music Theory for Guitarists',1),(3,'Rock Guitar',1),(4,'Blues Guitar',1),(5,'Classical Guitar',1),(6,'Jazz Guitar',1),(7,'Guitar Setup',1),(8,'Guitar String Replacement',1),(9,'Guitar Setup',2),(10,'Guitar String Replacement',2),(11,'Fretwork',2),(12,'Wood Carving',2),(13,'Finishing Techniques',2),(14,'Figure Drawing',3),(15,'Still Life Drawing',3),(16,'Oil Painting',3),(17,'Watercolor Painting',3),(18,'Figure Drawing',4),(19,'Traditional Animation',4),(20,'Motion Graphics',4),(21,'Adobe Animate',4),(22,'Toon Boom Harmony',4),(23,'Storyboarding',4),(24,'3D Game Modeling',5),(25,'Game Animation',5),(26,'Product Modeling',5),(27,'Prototyping',5),(28,'Composition',6),(29,'Lighting',6),(30,'Adobe Lightroom',6),(31,'Photoshop Basics',6),(32,'Social Media Marketing',7),(33,'Content Marketing',7),(34,'SEO Strategies',7),(35,'Italian Cuisine',8),(36,'Asian Cuisine',8),(37,'Knife Skills',8),(38,'Sous Vide Cooking',8),(39,'Healthy Cooking',8),(40,'Budgeting',9),(41,'Investing Basics',9),(42,'Financial Planning',9),(43,'Workout Routines',10),(44,'Nutrition Planning',10),(45,'Weight Training',10),(46,'Healthy Cooking',10),(47,'Mystery',11),(48,'Science Fiction',11),(49,'Fantasy',11),(50,'Vocab Expansion',11),(51,'Plot Development',11),(52,'Multilingual Literature',11),(53,'Spanish',12),(54,'French',12),(55,'Japanese',12),(56,'Multilingual Literature',12),(57,'Guided Meditation',13),(58,'Mindfulness Practices',13),(59,'Yoga',13),(60,'Stargazing Basics',14),(61,'Astrophotography',14),(62,'Cosmic Phenomena',14),(63,'Plant Care Techniques',15),(64,'Garden Design',15),(65,'Urban Gardening',15),(66,'HTML',16),(67,'CSS',16),(68,'JavaScript',16),(69,'Node.js',16),(70,'Python Django',16),(71,'React.js',16),(72,'Ruby',16),(73,'RESTful API Development',16),(74,'Database Management (SQL)',16),(75,'Web Design',16),(76,'Ambient Guitar',1),(77,'Metal Guitar',1),(78,'Acoustic Guitar',1);
/*!40000 ALTER TABLE `interests` ENABLE KEYS */;
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
