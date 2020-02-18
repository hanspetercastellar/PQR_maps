-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.5.0.5332
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla pqr.infraestructuras
CREATE TABLE IF NOT EXISTS `infraestructuras` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla pqr.infraestructuras: ~2 rows (aproximadamente)
DELETE FROM `infraestructuras`;
/*!40000 ALTER TABLE `infraestructuras` DISABLE KEYS */;
INSERT INTO `infraestructuras` (`id`, `descripcion`, `created_at`) VALUES
	(1, 'Luninaria', '2020-02-15 22:06:25'),
	(2, 'Poste de concreto', '2020-02-15 22:06:57');
/*!40000 ALTER TABLE `infraestructuras` ENABLE KEYS */;

-- Volcando estructura para tabla pqr.table_pqr
CREATE TABLE IF NOT EXISTS `table_pqr` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_problema_id` bigint(20) unsigned NOT NULL,
  `ifr_id` bigint(20) unsigned NOT NULL,
  `codigo_infraestructura` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usuario_id` bigint(20) unsigned NOT NULL,
  `barrio` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitud` int(11) NOT NULL,
  `longitud` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `table_pqr_ifr_id_foreign` (`ifr_id`),
  KEY `usuarios` (`usuario_id`),
  CONSTRAINT `table_pqr_ifr_id_foreign` FOREIGN KEY (`ifr_id`) REFERENCES `infraestructuras` (`id`),
  CONSTRAINT `usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla pqr.table_pqr: ~0 rows (aproximadamente)
DELETE FROM `table_pqr`;
/*!40000 ALTER TABLE `table_pqr` DISABLE KEYS */;
/*!40000 ALTER TABLE `table_pqr` ENABLE KEYS */;

-- Volcando estructura para tabla pqr.tipo_problemas
CREATE TABLE IF NOT EXISTS `tipo_problemas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(200) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla pqr.tipo_problemas: ~4 rows (aproximadamente)
DELETE FROM `tipo_problemas`;
/*!40000 ALTER TABLE `tipo_problemas` DISABLE KEYS */;
INSERT INTO `tipo_problemas` (`id`, `descripcion`, `created_at`) VALUES
	(1, 'cable en el suelo', '2020-02-16 12:15:43'),
	(2, 'cancha apagada', '2020-02-16 12:16:23'),
	(3, 'luminaria encendida permanente', '2020-02-16 12:17:51'),
	(4, 'Luminaria intermitente', '2020-02-16 12:18:07');
/*!40000 ALTER TABLE `tipo_problemas` ENABLE KEYS */;

-- Volcando estructura para tabla pqr.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla pqr.usuarios: ~1 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `telefono`, `created_at`) VALUES
	(1, 'hans peter', 'castellar del rio', '3147550088', '2020-02-16 07:02:52');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
