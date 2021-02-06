function solve()
{
    var text_input= document.getElementById('display').value;
    document.getElementById('display').value=eval(text_input);
}
function dis(val)
{
    if(document.getElementById('display').value[0]==0){
        document.getElementById('display').value="";
    }
    document.getElementById('display').value+=val;
}
function clear_all()
{
    document.getElementById('display').value="0";
}
function back()
{
    document.getElementById('display').value=document.getElementById('display').value.slice(0,-1);
    if(document.getElementById('display').value[0]==null){
        document.getElementById('display').value=0;
    }
    

}