 
                    function calculator()
                    {

                    var city, hotel, numberpeople, staydays, values =0.00, meal, travelcost, hotelcost, totalcost, firstn, lastn;

                    firstn= document.getElementById("first").value;
                    lastn= document.getElementById("last").value;
                        
                    if (document.getElementById("st").checked)
                    {city = document.getElementById("st").value;}
                    else if (document.getElementById("mil").checked)
                    {city = document.getElementById("mil").value;}
                    else if (document.getElementById("detro").checked)
                    {city = document.getElementById("detro").value;}
                        
                    if (document.getElementById("economy").checked)
                    {hotel = document.getElementById("economy").value;}
                    else if (document.getElementById("standard").checked)
                    {hotel = document.getElementById("standard").value;}
                    else if (document.getElementById("upscale").checked)
                    {hotel = document.getElementById("upscale").value;}
                        
                    numberpeople = document.getElementById("travelers").value;
                    staydays = document.getElementById("days").value;
                    
                    
                    if ( document.getElementById("wifi").checked)
                    values = values+(10.00);
		            if ( document.getElementById("seat").checked)
		            values = values+(20.00);   
                        
                    if (document.getElementById("none").checked)
                    {meal = document.getElementById("none").value;}
                    else if (document.getElementById("snack").checked)
                    {meal = document.getElementById("snack").value;}
                    else if (document.getElementById("fullmeal").checked)
                    {meal = document.getElementById("fullmeal").value;}
                        
                    travelcost= (city*1*numberpeople) + (hotel*1*staydays);
                    hotelcost= (values*1*numberpeople) + (meal*numberpeople);
                    totalcost= travelcost + hotelcost;
                
		
                    
                    


                    document.getElementById("TotalCost").innerHTML= "THANK YOU FOR YOUR RESERVATION! " + lastn + ", " + firstn + "." + " Your total cost is " + totalcost + "$";
                        
                        
                    }
    
                    function email()   
    
                    {
                    var first;

                    first = confirm("We added you to our mailing list!")


                    document.getElementById("OUTPUT").innerHTML

                    }  
    
                        
    
    
    
    
    
    
    
    
    
    