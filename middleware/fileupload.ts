import multer from "multer";
export const imageUpload = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|JPG)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(null, true);
  },
});
