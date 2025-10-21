import multer from 'multer';
import multerConfig from '../config/multer';

import File from '../models/File';

const upload = multer(multerConfig).single('foto');

class FileController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const file = await File.create({ originalname, filename, aluno_id });
        return res.json({ file });
      } catch (e) {
        return res.status(400).json({
          errors: {
            msg: ['Aluno não existe '],
          },
        });
      }
    });
  }
}

export default new FileController();
