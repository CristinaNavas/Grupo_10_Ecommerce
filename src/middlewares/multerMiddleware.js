const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,"../../public/img/avatars"));
    },
	
	filename: (req,file,cb)=>{
        cb(null,"file-"+Date.now()+path.extname(file.originalname));
    },
})

const uploadFile = multer({ storage:storage });

module.exports = uploadFile;