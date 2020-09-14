function email()
{
  var user=document.getElementById("input").value;
  var a=/^([a-z 0-9]+)@([a-z]+)\.(com)$/;
  if(a.test(user))
  {
      alert('Thank you')
  }
  else
  {
    document.getElementById("input").placeholder="forexample@gmail.com";
    document.getElementById("lbl").style.visibility="visible";  
  }                        
}