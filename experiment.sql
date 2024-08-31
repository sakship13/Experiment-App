-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 03, 2024 at 02:09 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `experiment`
--

-- --------------------------------------------------------

--
-- Table structure for table `experimenttab`
--

CREATE TABLE IF NOT EXISTS `experimenttab` (
  `EID` int(10) NOT NULL AUTO_INCREMENT,
  `Subject` varchar(20) NOT NULL,
  `ExperimentTitle` text NOT NULL,
  `ExperimentComponent` text NOT NULL,
  `ExperimentAbstract` text NOT NULL,
  `ExperimentDetail` text NOT NULL,
  `ExperimentResult` text NOT NULL,
  `ExperimentConclusion` text NOT NULL,
  `Filepath` text NOT NULL,
  PRIMARY KEY (`EID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `experimenttab`
--

INSERT INTO `experimenttab` (`EID`, `Subject`, `ExperimentTitle`, `ExperimentComponent`, `ExperimentAbstract`, `ExperimentDetail`, `ExperimentResult`, `ExperimentConclusion`, `Filepath`) VALUES
(1, 'ABC', 'assd', 'asd', 'asd', 'asd', 'asdas', 'daasd', '200w.gif'),
(2, 'XYZ', 'dsaasd', 'asdasd', 'asdas', 'das', 'dasd', 'as', '201w.gif');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `FID` int(11) NOT NULL AUTO_INCREMENT,
  `SID` int(11) NOT NULL,
  `Title` varchar(11) NOT NULL,
  `Feedbackdata` text NOT NULL,
  `Fdate` date NOT NULL,
  PRIMARY KEY (`FID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`FID`, `SID`, `Title`, `Feedbackdata`, `Fdate`) VALUES
(1, 1, 'abcde', 'abcde', '2024-03-01'),
(2, 2, 'asd', 'asdasd', '2024-03-25');

-- --------------------------------------------------------

--
-- Table structure for table `studattend`
--

CREATE TABLE IF NOT EXISTS `studattend` (
  `AID` int(10) NOT NULL AUTO_INCREMENT,
  `SID` int(10) NOT NULL,
  `EID` int(10) NOT NULL,
  `ADate` date NOT NULL,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `studattend`
--

INSERT INTO `studattend` (`AID`, `SID`, `EID`, `ADate`) VALUES
(9, 2, 1, '2024-03-25'),
(10, 2, 1, '2024-03-25'),
(11, 2, 1, '2024-03-25'),
(12, 2, 1, '2024-03-26'),
(13, 2, 1, '2024-03-26');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `Sid` int(5) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Pass` varchar(50) NOT NULL,
  `PRN` varchar(15) NOT NULL,
  `Department` varchar(20) NOT NULL,
  `Year` varchar(10) NOT NULL,
  PRIMARY KEY (`Sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Sid`, `Name`, `Email`, `Pass`, `PRN`, `Department`, `Year`) VALUES
(2, 'Rohan S', 'rohan@gmail.com', 'Rohan@142', '1234567890', 'CSE', 'FE');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE IF NOT EXISTS `subject` (
  `SBID` int(5) NOT NULL AUTO_INCREMENT,
  `SName` varchar(25) NOT NULL,
  `Department` varchar(50) NOT NULL,
  `Year` varchar(10) NOT NULL,
  PRIMARY KEY (`SBID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`SBID`, `SName`, `Department`, `Year`) VALUES
(2, 'ABC', 'CSE', 'FE'),
(4, 'ABCD', 'CSE', 'FE'),
(5, 'sdfsf', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `userreg`
--

CREATE TABLE IF NOT EXISTS `userreg` (
  `UID` int(5) NOT NULL AUTO_INCREMENT,
  `Uname` varchar(25) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Utyp` varchar(25) NOT NULL,
  `Pass` varchar(20) NOT NULL,
  `Mobile` varchar(20) NOT NULL,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `userreg`
--

INSERT INTO `userreg` (`UID`, `Uname`, `Email`, `Utyp`, `Pass`, `Mobile`) VALUES
(1, 'rohan', 'rohansuryawanshi142@gmail.com', 'Admin', 'rohan', '7458963210'),
(2, 'rohan', 'rohan123', '', '123', '7418529630'),
(5, 'sfd sfsdf', 'rohansuryawanshi142@gmail.com', '', 'R@on123456', '7458963210');
