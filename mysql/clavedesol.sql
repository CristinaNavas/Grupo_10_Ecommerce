CREATE database claveDeSol;
USE claveDeSol;
CREATE TABLE `products`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` DOUBLE(8, 2) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `discount` INT NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `productsCategory_id` INT NOT NULL
);
CREATE TABLE `productCategory`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` VARCHAR(255) NOT NULL
);
CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(255) NOT NULL,
    `birthday` DATE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `usersProfile_id` INT NOT NULL
);
CREATE TABLE `userProfile`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `profile` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `products` ADD CONSTRAINT `products_productscategory_id_foreign` FOREIGN KEY(`productsCategory_id`) REFERENCES `productCategory`(`id`);
ALTER TABLE
    `users` ADD CONSTRAINT `users_usersprofile_id_foreign` FOREIGN KEY(`usersProfile_id`) REFERENCES `userProfile`(`id`);
Use clavedesol;
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Trompeta", "Trompeta Yahama YTR-6335 con campana de cobre dorado",123,"trompeta-yamaha.png",15,"viento",1) ;
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Saxofon", "Saxo Alto Parquer Custom De Estudio Con Estuche",123,"saxofon.png",15,"viento",2) ;
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Clarinete", "Clarinete Ocen OCL190 con 17 llaves",123,"clarinet.jpg",15,"viento",1) ;
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Tuba", "Tuba Yamaha YBB 104",123,"tuba.jpg",15,"viento",2) ;
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Flauta traversa", "Batería de viaje Odery Cafe Kit: Bombo 14x11', Redo 12x5', Tom 10x5.5' / 12x6'. Incluye pedal de Bomboy Platillo.",123,"flauta-traversa.png",15,"viento",1) ;
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Batería-Odery", "Trompeta Yahama YTR-6335 con campana de cobre dorado",123,"Batería-Odery.jpg",15,"percusión",2) ;
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Charango", "Nuevo",123,"charango.jpg",15,"cuerda",1);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Violín", "Nuevo",123,"imagen_violin.jpg",15,"cuerda",2);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Ukelele", "Nuevo",123,"ukelele.jpg",15,"cuerda",1);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Arpa", "Nuevo",123,"arpa.jpg",15,"cuerda",1);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Guitarra", "Nuevo",123,"guitarra.jpg",15,"cuerda",1);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Batería-Odery","Batería de viaje Odery Cafe Kit: Bombo 14x11', Redo 12x5', Tom 10x5.5' / 12x6'. Incluye pedal de Bomboy Platillo.",123,"Batería-Odery.jpg",1,"percusión", 1);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Redoblante-Odery","Redoblante de maple Odery Eyedentity Series. Madera: Maple 100%. medidas: 10x4.5'. Torres: 6. Tirabordona: Eyedentity de 4 puntos de ajuste. Color: Maple Natural.",456,"Redoblante-Odery.jpg",10,"percusión", 2);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Batería-Electrónica","Batería Electrónica Nux DM 210. Cantidad de cuerpos: 5. Tipos de conexiones: Bluetooth,Plug. Cantidad de sonidos: 1000. Incluye palillos, pedales y parches mesh, redoblante, metrónomo y reverb.",500,"Batería-Electrónica.jpg",1,"percusión",2);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Cajón-Peruano","Cajón Peruano GM LIMA profesional. Tapa 3mm con tornillos regulables y clavos de refuerzo. Medidas: 50 x 30 x 27 cm. Cuerpo de pPino Araucaria de 12mm.",200,"Cajón-Peruano.jpg",20,"percusión",2);
INSERT INTO products (`name`, `description`, `price`,`image`,`discount`,`type`,`productsCategory_id`) VALUES ("Conga","Conga de fibra Parquer Light de 10'. Color: negro.",150,"Conga.jpg",2,"percusión",1);

INSERT INTO productcategory (`category`) VALUES ("Oferta") ;
INSERT INTO productcategory (`category`) VALUES ("Reciente") ;

INSERT INTO users (`name`, `lastname`, `email`,`address`, `avatar`, `nickname`,`birthday`,`password`, `usersProfile_id`) VALUES ("Diana", "Moya", "diana@mit.edu", "Colombia", "file-1657155173729.jpg", "dian21", "2022-06-29" ,"$2a$10$.DvHzv9th.qCZLLWsfyzPe7tNlDglkcGkooDf4VuI0PKqwMX11N4e", 2);
INSERT INTO users (`name`, `lastname`, `email`,`address`, `avatar`, `nickname`,`birthday`,`password`, `usersProfile_id`) VALUES ("Maria","Navas","cris.30a@hotmail.com", "Ambato 550","file-1657245513654.png","Mari","2022-06-29","$2a$10$KKO37OW/77b3VWcRcs8bM.n3YQBWT/h4/ZgxqGTgmTMaJo5RVcdtm",1);
INSERT INTO users (`name`, `lastname`, `email`,`address`, `avatar`, `nickname`,`birthday`,`password`, `usersProfile_id`) VALUES ("Gabriela","Torres","gab.123@hotmail.com", "Quito 5250","file-1657244523241.png","Gab","2000-06-29","$2a$10$Mcdsc1vwKvoMtN5.em0cQ.NpqvpgFY6O7XNxKJ3ZrsqkB73ed1cia",1);
INSERT INTO users (`name`, `lastname`, `email`,`address`, `avatar`, `nickname`,`birthday`,`password`, `usersProfile_id`) VALUES ("Pablo","Guiguli","pablo@hotmail.com", "Argentina","file-1657244686276.png","Pablin","1990-02-02","$2a$10$.b.C1PXbejwOj.676PPW.erXNdrNtD4C9S1V9l8cPcXhhFmzJ8sSm",1);
INSERT INTO users (`name`, `lastname`, `email`,`address`, `avatar`, `nickname`,`birthday`,`password`, `usersProfile_id`) VALUES ("Luis","Carraquina","luis@mit.edu", "Colombia 550","file-1657155636141.jpg","Luissss","2022-06-27","$2a$10$QfcEblH5s9S5zrMEYVDXu.beT0E174pzkKM1LS3yH3u0VcTnxmyBS",2);

INSERT INTO userprofile (`profile`) VALUES ("Vendedor") ;
INSERT INTO userprofile (`profile`) VALUES ("Comprador") ;

