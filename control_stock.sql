-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-09-2019 a las 16:14:34
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `control_stock`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id_articulo` int(30) NOT NULL,
  `categoria` varchar(300) NOT NULL,
  `marca` varchar(300) NOT NULL,
  `modelo` varchar(300) NOT NULL,
  `notas` varchar(300) NOT NULL,
  `stockInicial` text NOT NULL,
  `alerta` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id_articulo`, `categoria`, `marca`, `modelo`, `notas`, `stockInicial`, `alerta`) VALUES
(1, 'discos', 'kingston', '128gb', 'sin notas', '100', '10'),
(2, 'discos', 'samsung', '512gb', 'sin notas', '200', '1'),
(3, 'discos', 'kingston', '1024gb', 'sin notas', '100', '10'),
(4, 'monitor', 'dell', '22 pulgadas', 'sin notas', '100', '10'),
(5, 'monitor', 'dell', '20 pulgadas', 'sin notas', '100', '10'),
(6, 'monitor', 'samsung', '17 pulgadas', 'sin notas', '100', '10'),
(7, 'teclado', 'lenovo', 'negro', 'sin notas', '100', '10'),
(8, 'teclado', 'lenovo', 'blanco', 'sin notas', '100', '10'),
(9, 'teclado', 'dell', 'verde', 'sin notas', '100', '10'),
(10, 'mouse', 'dell', 'bolita', 'sin notas', '100', '10'),
(11, 'mouse', 'lenovo', 'bolita', 'sin notas', '100', '10'),
(12, 'mouse', 'lenovo', 'laser', 'sin notas', '100', '10'),
(13, 'mouse', 'lenovo', 'laser', 'sin notas', '500', '10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

CREATE TABLE `movimientos` (
  `id_trans` int(3) NOT NULL,
  `id_articulo` int(3) NOT NULL,
  `accion` char(1) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(3) NOT NULL,
  `usuario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`id_trans`, `id_articulo`, `accion`, `fecha`, `cantidad`, `usuario`) VALUES
(1, 2, 'i', '2019-05-29', 20, 'PS'),
(2, 2, 'i', '2019-05-29', 20, 'PS'),
(3, 2, 'i', '2019-05-29', 20, 'PS'),
(4, 2, 'i', '0000-00-00', 20, 'PS'),
(5, 2, 'i', '0000-00-00', 20, 'PS'),
(6, 2, 'r', '0000-00-00', 20, 'Pepito'),
(7, 1, 'i', '0000-00-00', 20, 'PS'),
(8, 1, 'i', '0000-00-00', 20, 'PS'),
(9, 1, 'r', '0000-00-00', 40, 'Jorge Perez');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id_articulo`);

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`id_trans`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id_articulo` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `id_trans` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
