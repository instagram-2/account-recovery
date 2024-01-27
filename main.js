let a = 0

function ci(){
    document.getElementById('show').hidden = 'true';
    document.getElementById('loginbtn').disabled = 'true';
}





function check(){
  var pd =   document.getElementById('password').value;
  if (pd == '' ){
    document.getElementById('show').hidden = true;
    document.getElementById('loginbtn').disabled = true;
    document.getElementById('loginbtn').style.background = '#4cb5f9';
  }
  else if (pd.length < 8){
    document.getElementById('show').hidden = false;
    document.getElementById('loginbtn').disabled = true 
  }
  else{
    document.getElementById('show').hidden = false;
    document.getElementById('loginbtn').disabled = false;
  }
}

function shw(){
    if( a == 0 ){
        document.getElementById('show').innerHTML = 'Hide'
        a++;
        document.getElementById('password').type = 'text';
        console.log(a);
    }
    else{
        document.getElementById('show').innerHTML = 'Show'
        a = 0;
        document.getElementById('password').type = 'password';
        console.log(a);
    }
     
}
