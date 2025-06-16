import ejs from "ejs";
import path from "path";
import { Router } from "express";

export const routert = Router()

routert.get('/preview-candidatura', async (req, res) => {
    const templatePath = path.resolve(__dirname,"..",'views', 'candidatura-template.ejs');
      
    const html = await ejs.renderFile(templatePath, {
      name: 'Nome Exemplo',
      email: 'teste@email.com',
      message: 'Mensagem fictícia.',
    });
      
    res.send(html);
});