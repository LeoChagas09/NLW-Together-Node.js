import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

/**
 * GET      => Buscar uma informação
 * POST     => Inserir(criar) uma informação
 * PUT      => Alterar uma informação
 * DELETE   => Remover um dado
 * PATCH    => Alterar uma informação específica
 *
 */

/**
 * Tipos de parâmetros
 * Routes Params => http://localhost:3000/produtos/4564864698456
 * Query Params => http:// localhost:3000/produtos/?name=teclado&description=tecladobom
 * 
 * Body Params => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 */

// http://localhost:3000
app.listen(3000, () => console.log('Server is running'));
