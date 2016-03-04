

var $_GET=[];
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});

document.getElementById('p_id').innerHTML = $_GET['chip_id']
document.getElementById('p_id2').innerHTML = $_GET['status']

console.log($_GET['chip_id']);
console.log($_GET['status']);