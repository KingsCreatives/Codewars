Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(ele => !(values_list.includes(ele)))
 }