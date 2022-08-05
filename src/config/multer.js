const multer = require('multer')
const path = require('path')

module.exports = {
   dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
   storage: multer.diskStorage({
      destination: (req, file, cb) => {
         cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
      },
      filename: (req, file, cb) => {
         cb(null, Date.now() + '-' + file.originalname)
      }
   }),
   limits: {
      fileSize: 2 * 1024 * 1024,
   },
   fileFilter: (req, file, cb) => {
      const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png']

      if (allowedMimes.includes(file.mimetype)) {
         cb(null, true)
      } else {
         cb(new Error('Tipo de arquivo Invalido'))
      }

   }
}