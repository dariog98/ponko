drop database if exists ponkoApp;
-- start transaction;
-- rollback;
create database ponkoApp;
-- show tables;
use ponkoApp;

-- Tables
create table users (
    id int auto_increment primary key,
    username varchar(15) not null unique,
    password varchar(60) not null,
    color varchar(7) null
);

create table userimages (
    id int auto_increment primary key,
    userId int not null unique,
    imageId int not null
);

create table images (
    id int auto_increment primary key,
    filename varchar(23) not null,
    uploadBy int not null,
    createdAt timestamp not null default current_timestamp,
    updatedAt timestamp not null default current_timestamp,
    constraint fk_images_uploadby foreign key (uploadBy) references users(id)
);

create table posts (
    id int auto_increment primary key,
    userId int not null,
    content varchar(140) null,
    createdAt timestamp not null default current_timestamp,
    updatedAt timestamp not null default current_timestamp,
    constraint fk_posts_users foreign key (userId) references users(id)
);

create table likes (
    id int auto_increment primary key,
    postId int not null,
    userId int not null,
    constraint fk_likes_users foreign key (userId) references users(id),
    constraint fk_likes_posts foreign key (postId) references posts(id)
);

create table shareds (
    id int auto_increment primary key,
    postId int not null,
    userId int not null,
    constraint fk_shared_users foreign key (userId) references users(id),
    constraint fk_shared_posts foreign key (postId) references posts(id)
);

create table postcomments (
    id int auto_increment primary key,
    postId int not null,
    commentId int not null,
    constraint fk_comments_post foreign key (postId) references posts(id),
    constraint fk_comments_comment foreign key (commentId) references posts(id),
    unique key comments_unique_posts_comments (postId, commentId)
);

insert into users (username, password, color)
value
("pako", "$2a$10$3xgONQ80GE5oPhTX4Mc4huakytpPD0G.Md/TjxARQaUzlp1rPtPvS", "#01b09a"),
("gobo", "$2a$10$czi3cLe.yX4j4C8iusSO5e3wa54GKeVSlwnBkpbpoDQNVkcpPwoC.", "#01907a"),
("momo", "$2a$10$Yfzke6Amz/t7DX3yAVQr3eu30heb2vEGFwCyZLo71MTQMdUXQAW6i", "#01a70b");

insert into images (filename, uploadBy)
value
("file-1675771186033.jpg", 1),
("file-1675771199515.jpg", 2),
("file-1675771215111.jpg", 3);

insert into userimages (userId, imageId)
value
(1, 1),
(2, 2),
(3, 3);

insert into posts (userId, content)
value
(1, "this is my first post in Ponko App, hi everyone :D"),
(1, "you guys likes movies?"),
(1, "i watch Puss in Boots The Last Wish and i like it <3"),
(2, "nice, me too"),
(3, "awesome :)");

insert into postcomments (postId, commentId)
value
(3, 4),
(3, 5);

insert into likes (postId, userId)
value
(2, 2),
(2, 3),
(3, 2),
(3, 3);