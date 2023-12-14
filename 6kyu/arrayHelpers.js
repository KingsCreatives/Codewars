Array.prototype.square = function(){
    return this.map(ele => ele ** 2)
}

Array.prototype.cube = function(){
    return this.map(ele => ele ** 3)
}

Array.prototype.average = function(){
    return this.reduce((start, num) => start + num, 0)/ this.length
}

Array.prototype.sum = function(){
return this.reduce((start, num) => start + num, 0)
}

Array.prototype.even = function(){
  return this.filter(ele => ele % 2 === 0)
}

Array.prototype.odd = function(){
  return this.filter(ele => ele % 2 !== 0)
}