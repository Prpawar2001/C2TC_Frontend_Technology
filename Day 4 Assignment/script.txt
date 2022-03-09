var button = document.querySelectorAll("input");
function check() {
    for(let i=0; i<button.length; i++)
    {  
        if(button[i].value == "")  
        {
            window.alert("Please Enter all the details");
            break;
        } 
        else if(i==2)
        {
            if(button[2].value.length < 10 || button[2].value.length > 10)  
            {
                window.alert("Please Enter valid mobile number(10 digit)");
            }  
        }
    };
};