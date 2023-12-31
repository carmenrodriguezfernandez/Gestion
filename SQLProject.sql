USE [DB_GESTION]
GO
/****** Object:  Table [dbo].[Tarea]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tarea](
	[idTarea] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](20) NOT NULL,
	[descripcion] [varchar](500) NOT NULL,
	[fechaCreacion] [datetime] NOT NULL,
	[idUsuario] [int] NOT NULL,
 CONSTRAINT [PK_Tarea] PRIMARY KEY CLUSTERED 
(
	[idTarea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[idUsuario] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[correo] [varchar](60) NOT NULL,
	[fechaCreacion] [datetime] NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Usuario] ADD  DEFAULT (getdate()) FOR [fechaCreacion]
GO
ALTER TABLE [dbo].[Tarea]  WITH CHECK ADD  CONSTRAINT [FK_Tarea_Tarea] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[Usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[Tarea] CHECK CONSTRAINT [FK_Tarea_Tarea]
GO
/****** Object:  StoredProcedure [dbo].[Tarea_Add]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Tarea_Add]
@titulo varchar(20),
@descripcion varchar(500),
@idUsuario int
AS
INSERT INTO Tarea (titulo, descripcion, idUsuario)
VALUES (@titulo, @descripcion, @idUsuario)
GO
/****** Object:  StoredProcedure [dbo].[Tarea_All]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Tarea_All]
AS
SELECT idTarea, titulo, descripcion, fechaCreacion, idUsuario FROM Tarea
ORDER BY idTarea ASC
GO
/****** Object:  StoredProcedure [dbo].[Tarea_Delete]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Tarea_Delete]
@idTarea int
AS
DELETE FROM Tarea
WHERE idTarea = @idTarea
GO
/****** Object:  StoredProcedure [dbo].[Tarea_Update]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Tarea_Update]
@idTarea int,
@titulo varchar(20),
@descripcion varchar(500),
@idUsuario int
AS
UPDATE Tarea
SET
titulo = @titulo,
descripcion = @descripcion,
idUsuario = @idUsuario
WHERE IdTarea = @idTarea
GO
/****** Object:  StoredProcedure [dbo].[Usuario_Add]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Usuario_Add]
@nombre varchar(50),
@correo varchar(60)
AS
INSERT INTO Usuario (nombre, correo)
VALUES (@nombre, @correo)
GO
/****** Object:  StoredProcedure [dbo].[Usuario_All]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Usuario_All]
AS
SELECT idUsuario, nombre, correo, fechaCreacion FROM Usuario
ORDER BY idUsuario ASC
GO
/****** Object:  StoredProcedure [dbo].[Usuario_Delete]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Usuario_Delete]
@idUsuario int
AS
DELETE FROM Usuario
WHERE idUsuario = @idUsuario
GO
/****** Object:  StoredProcedure [dbo].[Usuario_Update]    Script Date: 29/09/2023 21:53:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Usuario_Update]
@idUsuario int,
@nombre varchar(50),
@correo varchar(60)
AS
UPDATE Usuario
SET
nombre = @nombre,
correo = @correo
WHERE idUsuario = @idUsuario
GO

ALTER TABLE dbo.Tarea ADD  DEFAULT (getdate()) FOR [fechaCreacion]

SELECT * FROM Usuario