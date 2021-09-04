 function clrscr() {
        document.getElementById("textbar").value = "";
    }
    
    function show(val) {
        document.getElementById("textbar").value += val;
    }

    function backspace(){
        var value = document.getElementById("textbar").value;
        document.getElementById("textbar").value = value.substr(0 , value.length-1);
    }
    
    function ans() {
        var num = document.getElementById("textbar").value;
        
        if (num === "") {
            alert("Enter Values to Evalute");
        }
        
        var ans = eval(num);
        document.getElementById("textbar").value = ans;
    }
