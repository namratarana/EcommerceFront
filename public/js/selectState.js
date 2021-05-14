function random_function()
            {
                var a=document.getElementById("input").value;
                if(a==="INDIA")
                {
                    var arr=["Maharashtra","Delhi"];
                }
                else if(a==="USA")
                {
                    var arr=["Washington","Texas","New York"];
                }
             
                var string="";
             
                for(i=0;i<arr.length;i++)
                {
                    string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
                }
                document.getElementById("output").innerHTML=string;
            }