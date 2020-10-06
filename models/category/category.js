const mongoose = require('mongoose')
require('mongoose-double')(mongoose)

var Schema = mongoose.Schema;



var CategorySchema = new mongoose.Schema({
  name : {
            type: String,
            required: true,
            unique: true
        } ,
  subcategory :
  {
    type : Schema.Types.ObjectId , ref : 'Subcategory'
  }
})
var SubCategorySchema = new mongoose.Schema({
  name :
  [
    {
      category :
      {
        type : Schema.Types.ObjectId , ref : 'Category'
      },
      name : String
    }
  ]
})




var Category = mongoose.model('Category' , CategorySchema);

var SubCategory = mongoose.model('SubCategory' , SubCategorySchema);

var sc =
        {
          'Category' : Category,
          'SubCategory' : SubCategory,
        };
module.exports = sc;
