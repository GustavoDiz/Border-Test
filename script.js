function borderPreview(){
    let box = document.getElementById("square");
    let clipboard = document.getElementById("clipboard");
    //Border TopLeft
    let i1 = document.getElementById("i1").value;
    let c1 = document.getElementById("1");
    box.style.borderTopLeftRadius = i1 + "px";
    if(i1 == ""){
        box.style.borderTopLeftRadius = 0 + "px";
    }
    if(i1 != 0){
        c1.innerText = 'border-top-left-radius: '+i1+'px';
    }else{
        c1.innerText = '';
    }

    //Border TopRight
    let i2 = document.getElementById("i2").value;
    let c2 = document.getElementById("2");
    box.style.borderTopRightRadius = i2 + "px";
    if(i2 == ""){
        box.style.borderTopRightRadius = 0 + "px";
    }
    if(i2 != 0){
        c2.innerText = 'border-top-right-radius: '+i2+'px';
    }else{
        c2.innerText = '';
    }

    //Border BottomLeft
    let i3 = document.getElementById("i3").value;
    let c3 = document.getElementById("3");
    box.style.borderBottomLeftRadius = i3 + "px";
    if(i3 == ""){
        box.style.borderBottomLeftRadius = 0 + "px";
    }
    if(i3 != 0){
        c3.innerText = 'border-bottom-left-radius: '+i3+'px';
    }else{
        c3.innerText = '';
    }

    //Border BottomRight
    let i4 = document.getElementById("i4").value;
    let c4 = document.getElementById("4");
    box.style.borderBottomRightRadius = i4 + "px";
    if(i4 == ""){
        box.style.borderBottomRightRadius = 0 + "px";
    }
    if(i4 != 0){
        c4.innerText = 'border-bottom-right-radius: '+i4+'px';
    }else{
        c4.innerText = '';
    }
}