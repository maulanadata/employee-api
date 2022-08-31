-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 31 Agu 2022 pada 10.55
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee-api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `worker`
--

CREATE TABLE `worker` (
  `id` int(11) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `salary` int(10) NOT NULL,
  `joining_date` bigint(20) NOT NULL,
  `departement` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `worker`
--

INSERT INTO `worker` (`id`, `first_name`, `last_name`, `salary`, `joining_date`, `departement`) VALUES
(1, 'Monika', 'Aurora', 9000000, 1581647666000, 'HR'),
(2, 'Bayu', 'Saputra', 5000000, 1588057616000, 'Operator'),
(3, 'Yusuf', 'Pamungkas', 5000000, 1588057616000, 'Operator'),
(4, 'Niharka', 'Verma', 8000000, 1588057616000, 'Admin'),
(5, 'toni', 'Fadilah', 7000000, 1661802176619, 'Diver'),
(6, 'anto', 'wibowo', 5000000, 1661802192913, 'Programmer'),
(7, 'Ratna', 'Putri', 7000000, 1661797679489, 'HR'),
(8, 'Darma', 'Aji', 8000000, 1661798829360, 'Programmer'),
(9, 'Dani', 'Alamsyah', 7000000, 1661806963290, 'Driver'),
(10, 'Riska', 'Wulandari', 7000000, 1661806979215, 'Admin');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `worker`
--
ALTER TABLE `worker`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `worker`
--
ALTER TABLE `worker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
