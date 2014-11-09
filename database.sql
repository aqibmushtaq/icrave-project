SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `app_versions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `version` varchar(100) NOT NULL,
  `platform` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `crave_decisions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

INSERT INTO `crave_decisions` (`id`, `title`) VALUES
(1, 'save'),
(2, 'healthy'),
(3, 'unhealthy');


CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

INSERT INTO `images` (`id`, `created_time`, `title`) VALUES
(1, '2013-11-22 01:10:02', 'A rose garden'),
(2, '2013-11-22 01:10:02', 'A double-decker bus'),
(3, '2013-11-22 01:10:02', 'The Queen'),
(4, '2013-11-22 01:10:02', 'A lion in a zoo'),
(5, '2013-11-22 01:10:02', 'A cemetery'),
(6, '2013-11-22 01:10:02', 'An Outdoor Market'),
(7, '2013-11-22 01:10:02', 'A clock tower'),
(8, '2013-11-22 01:10:02', 'A rainbow'),
(9, '2013-11-22 01:10:02', 'A hot air balloon'),
(10, '2013-11-22 01:10:02', 'A launderette'),
(11, '2013-11-22 01:10:02', 'Cows grazing'),
(12, '2013-11-22 01:10:02', 'A sunset'),
(13, '2013-11-22 01:10:02', 'An eagle'),
(14, '2013-11-22 01:10:02', 'A baby asleep'),
(15, '2013-11-22 01:10:02', 'Someone decorating a Christmas tree'),
(16, '2013-11-22 01:10:02', 'Someone sleep walking'),
(17, '2013-11-22 01:10:02', 'A child picking flowers'),
(18, '2013-11-22 01:10:02', 'A ship coming into a harbor'),
(19, '2013-11-22 01:10:02', 'People running to catch a train'),
(20, '2013-11-22 01:10:02', 'Children playing hopscotch'),
(21, '2013-11-22 01:10:02', 'People rowing a boat'),
(22, '2013-11-22 01:10:02', 'A cat climbing a tree'),
(23, '2013-11-22 01:10:02', 'People ice-skating on a lake'),
(24, '2013-11-22 01:10:02', 'A thief escaping from jail'),
(25, '2013-11-22 01:10:02', 'Tropical fish swimming'),
(26, '2013-11-22 01:10:02', 'A diamond ring rolling down a hill'),
(27, '2013-11-22 01:10:02', 'Two cars crashing'),
(28, '2013-11-22 01:10:02', 'A game of charades'),
(29, '2013-11-22 01:10:02', 'A helicopter landing'),
(30, '2013-11-22 01:10:02', 'A game of tennis');

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



CREATE TABLE IF NOT EXISTS `user_actions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_time_client` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_id` int(11) NOT NULL,
  `app_version_id` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'Active is false if the user un-did their history',
  `undo_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



CREATE TABLE IF NOT EXISTS `user_action_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_action_id` int(11) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `client_created_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `image_id` int(11) DEFAULT NULL,
  `rating` tinyint(4) DEFAULT NULL,
  `crave_decision_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
