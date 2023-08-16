// 8kyu
function array(string) {
    if(string == "")return null
    string = string.split(",")
    string.pop()
    string.shift()
   return string.length < 1 ? null : string.join(" ")
  }

