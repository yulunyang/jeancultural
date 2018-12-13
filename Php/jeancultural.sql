-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018 年 11 月 13 日 06:24
-- 伺服器版本: 10.1.36-MariaDB
-- PHP 版本： 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `jeancultural`
--

-- --------------------------------------------------------

--
-- 資料表結構 `acccount`
--

CREATE TABLE `acccount` (
  `sid` int(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `keywords` varchar(255) NOT NULL,
  `permission` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `acccount`
--

INSERT INTO `acccount` (`sid`, `account`, `keywords`, `permission`) VALUES
(2, 'aa', 'aa', '0'),
(3, 'yulun', '8888', '1');

-- --------------------------------------------------------

--
-- 資料表結構 `goods`
--

CREATE TABLE `goods` (
  `sid` int(255) NOT NULL,
  `good_name` varchar(255) NOT NULL,
  `narrative` varchar(255) NOT NULL,
  `color` varchar(10) NOT NULL,
  `size` varchar(100) NOT NULL,
  `price` int(50) NOT NULL,
  `mainpic_dir` varchar(255) NOT NULL,
  `secondpic_dir` varchar(255) NOT NULL,
  `stock` varchar(255) NOT NULL,
  `items` varchar(255) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `hot` varchar(10) NOT NULL,
  `onshelf` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `goods`
--

INSERT INTO `goods` (`sid`, `good_name`, `narrative`, `color`, `size`, `price`, `mainpic_dir`, `secondpic_dir`, `stock`, `items`, `brand`, `category`, `hot`, `onshelf`) VALUES
(1, '包包', '我想不到', '黑色', '30*ˇ30', 9990, '01.jpg', '01.jpg', '99', '包/飾品', 'jillStuart', 'jill', 'yes', '上架');

-- --------------------------------------------------------

--
-- 資料表結構 `marketing`
--

CREATE TABLE `marketing` (
  `sid` int(255) NOT NULL,
  `discount_key` varchar(255) NOT NULL,
  `discount_off` int(255) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `activity_number` varchar(255) NOT NULL,
  `activity_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `marketing`
--

INSERT INTO `marketing` (`sid`, `discount_key`, `discount_off`, `start_time`, `end_time`, `activity_number`, `activity_name`) VALUES
(1, 'halloween', 1, '2018-11-04 00:00:00', '2018-12-10 00:00:00', '00001', '萬聖節促銷');

-- --------------------------------------------------------

--
-- 資料表結構 `members`
--

CREATE TABLE `members` (
  `sid` int(255) NOT NULL,
  `member_name` varchar(255) NOT NULL,
  `member_email` varchar(255) NOT NULL,
  `member_birthday` date NOT NULL,
  `member_address` varchar(255) NOT NULL,
  `member_mobile` varchar(255) NOT NULL,
  `member_gender` varchar(10) NOT NULL,
  `member_vip` varchar(10) NOT NULL,
  `creat_at` datetime NOT NULL,
  `amount_spent` int(255) NOT NULL,
  `member_keyword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `members`
--

INSERT INTO `members` (`sid`, `member_name`, `member_email`, `member_birthday`, `member_address`, `member_mobile`, `member_gender`, `member_vip`, `creat_at`, `amount_spent`, `member_keyword`) VALUES
(14, '蔡依玲', 'joliddn@gmail.com', '2018-09-18', '台北市', '09222222222', '女', '0', '2018-11-09 00:01:35', 4323, '1234'),
(15, '蔡依玲2', 'abc.com', '2018-09-18', '台北市', '09222222222', '男', '1', '2018-11-09 00:01:35', 4323, '1234'),
(16, '蔡依玲3', 'jolin@gsmail.com', '2018-09-18', '台北市', '09222222222', '女', '0', '2018-11-09 00:01:35', 4323, '1234'),
(17, '蔡依玲4', 'ccc@gmail.com', '2018-09-18', '台北市', '09222222222', '男', '2', '2018-11-09 00:01:35', 4323, '1234'),
(18, '蔡依玲5', 'jff@gmail.com', '2018-09-18', '台北市', '09222222222', '女', '2', '2018-11-09 00:01:35', 4323, '1234');

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `sid` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `simple_narrative` longtext NOT NULL,
  `detailed_description` longtext NOT NULL,
  `news_pic` varchar(50) NOT NULL,
  `news_pic2` varchar(50) NOT NULL,
  `post_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `news`
--

INSERT INTO `news` (`sid`, `title`, `simple_narrative`, `detailed_description`, `news_pic`, `news_pic2`, `post_time`) VALUES
(1, '聖誕節特報!', '聖誕節是基督教用來紀念耶穌降生的節日，西方基督教通常將此節日定於12月25日', '聖誕節是基督教用來紀念耶穌降生的節日，西方基督教通常將此節日定於12月25日。但是不認同耶穌為聖人或是為了政治正確的族群則稱之耶誕節（意為耶穌誕辰日）[1]。\r\n將聖誕節作為基督教禮儀年曆的重要節日，教會透過將臨期或降臨期來準備，並以八日慶典與禮儀節期延續慶祝。聖誕節也是許多國家和地區、尤其是西方國家等以基督教文化為主流之地區的公共假日；在教會以外的場合，聖誕節已轉化成一種民俗節日，並常與日期相近的公曆新年合稱「聖誕與新年季」。\r\n\r\n由於耶穌的誕生日期無法確定，聖經上也無相關記載，所以在學術上認為聖誕節是以聖母領報的日期來推算，或是在基督教發展初期將古羅馬的農神節轉化而來，當時社會上（如古羅馬的冬至）以該節日慶祝日照時間由短變長。西方教會在發展初期至4世紀前中期開始將聖誕節定在12月25日，東方正教會稍晚以儒略曆定於1月7日，亞美尼亞教會則定在1月6日或1月19日。\r\n\r\n在基督教國家，聖誕節同時兼具宗教節日與文化節慶的雙重功能，除了參與教會儀式與活動外，家戶、行號與街頭上也可見相關布置，更是重要的商業活動時令；而過聖誕節的習慣，亦隨著近代西方國家的影響力而擴展到全世界。但在基督教並非主流的地區（如東亞），除了當地的教會團體外，聖誕節經常與消費活動掛鉤，且如同西方國家的「聖誕與新年季」與公曆新年結合，過節時間拉長到數週，成為全年重要的購物季之一。', '01.jpg', '01.jpg', '2018-11-09 04:18:25');

-- --------------------------------------------------------

--
-- 資料表結構 `order_detail`
--

CREATE TABLE `order_detail` (
  `order_detail_sid` int(11) NOT NULL,
  `order_number` int(255) NOT NULL,
  `order_at` datetime NOT NULL,
  `good_sid` int(11) NOT NULL,
  `mainpic_dir` varchar(255) NOT NULL,
  `good_name` varchar(255) NOT NULL,
  `quantity` int(50) NOT NULL,
  `member_sid` int(255) NOT NULL,
  `discount_key` varchar(255) NOT NULL,
  `discount_off` int(255) NOT NULL,
  `pay` varchar(50) NOT NULL,
  `total` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `order_list`
--

CREATE TABLE `order_list` (
  `sid` int(255) NOT NULL,
  `order_number` int(255) NOT NULL,
  `order_at` datetime NOT NULL,
  `Processing_status` varchar(255) NOT NULL,
  `Processing_time` datetime NOT NULL,
  `quantity` int(50) NOT NULL,
  `member_sid` int(255) NOT NULL,
  `discount_key` varchar(255) NOT NULL,
  `discount_off` varchar(255) NOT NULL,
  `total` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `order_list`
--

INSERT INTO `order_list` (`sid`, `order_number`, `order_at`, `Processing_status`, `Processing_time`, `quantity`, `member_sid`, `discount_key`, `discount_off`, `total`) VALUES
(1, 1, '2018-11-10 20:59:24', '已付款', '2018-11-09 00:00:00', 3, 14, '', '', 8000);

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `acccount`
--
ALTER TABLE `acccount`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `account` (`account`);

--
-- 資料表索引 `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `marketing`
--
ALTER TABLE `marketing`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `member_email` (`member_email`);

--
-- 資料表索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`order_detail_sid`);

--
-- 資料表索引 `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`sid`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `acccount`
--
ALTER TABLE `acccount`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表 AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表 AUTO_INCREMENT `marketing`
--
ALTER TABLE `marketing`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表 AUTO_INCREMENT `members`
--
ALTER TABLE `members`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表 AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表 AUTO_INCREMENT `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `order_detail_sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表 AUTO_INCREMENT `order_list`
--
ALTER TABLE `order_list`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
