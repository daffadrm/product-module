/*  gunakan salah satu untuk latihan, kita buat 3 route : 
    1. region-raw : menggunakan raw query
    2. region-seq : menggunakan method sequelize
    3. region-ctrl : bisnis logic dipisah di folder controller
*/


import account from './account'
import brand from './brand'
import category from './category'
import categoryImg from './categoryImg'
import condition from './condition'
import product from './product'
import productImages from './productImages'
import productVariant from './productVariant'
import status from './status'
import uploadDownload from './UploadDownload'


export default {
  account,
  brand,
  category,
  categoryImg,
  condition,
  product,
  productImages,
  productVariant,
  status,
  uploadDownload
};
