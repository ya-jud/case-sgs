CREATE TABLE Операции
(
	ИД UNIQUEIDENTIFIER,
	"ИД Контейнера" UNIQUEIDENTIFIER,
	"Дата начала операции" DATETIME,
	"Дата окончания операции" DATETIME,
	"Тип операции" NVARCHAR(50),
	"ФИО оператора" NVARCHAR(50),
	"Место инспекции" NVARCHAR(50)
)

CREATE TABLE Контейнеры
(
	ИД UNIQUEIDENTIFIER,
	Номер INT,
	Тип NVARCHAR(20),
	Длина INT,
	Ширина INT,
	Высота INT,
	Вес INT,
	"Пустой/не пустой" BIT,
	"Дата поступления" DATETIME
)