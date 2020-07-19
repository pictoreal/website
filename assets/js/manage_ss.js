function change(v)
{
  document.getElementById("change"+v).style.visibility="visible";
}

var ori_img = document.getElementById("label").innerHTML;

function getFileData(myFile){
var file = myFile.files[0];
var filename = file.name;
document.getElementById("label").innerHTML = ori_img + "Image slected : " + filename;
document.getElementById("imgtd").style.border="1px solid black";
}

function img()
{
  if(document.getElementById("fileToUpload").files.length != 0)
  {return true;}
  else{
    document.getElementById("imgtd").style.border="2px solid red";
    ori_img = document.getElementById("label").innerHTML;
    document.getElementById("label").innerHTML += "<font color='red'>Upload an image</font>";
    return false;
  }

}
