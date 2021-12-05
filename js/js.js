var swap = (flight) =>{
    if(flight == "flight-search"){
        var originCity = document.getElementById("origin-city").value;
        var originCountry = document.getElementById("origin-country").innerText;
        var destCity = document.getElementById("dest-city").value;
        var destCountry = document.getElementById("dest-country").innerText;
        document.getElementById("dest-city").value = originCity;
        document.getElementById("dest-country").innerHTML = originCountry;
        document.getElementById("origin-city").value = destCity;
        document.getElementById("origin-country").innerHTML = destCountry;
    }
    else if(flight == "listflight"){
        var source = document.getElementById("source").value;
        var dest = document.getElementById("dest").value;
        document.getElementById("source").value = dest;
        document.getElementById("dest").value = source;
    }
}
var changeTab = (id) =>{
    if(id == "flight-tab"){
        document.getElementById("flight-content").style.display = "block";
        document.getElementById("hotel-content").style.display = "none";

        document.getElementById("flight-tab").classList.add("tab-focus");
        document.getElementById("flight-tab").classList.remove("tab-not-focus");

        document.getElementById("hotel-tab").classList.remove("tab-focus");
        document.getElementById("hotel-tab").classList.add("tab-not-focus");

        document.getElementById("hotel-search").style.display = "none";
        document.getElementById("flight-search").style.display = "block";
    }
    else if(id == "hotel-tab"){
        document.getElementById("hotel-content").style.display = "block";
        document.getElementById("flight-content").style.display = "none";

        document.getElementById("hotel-tab").classList.add("tab-focus");
        document.getElementById("hotel-tab").classList.remove("tab-not-focus");

        document.getElementById("flight-tab").classList.add("tab-not-focus");
        document.getElementById("flight-tab").classList.remove("tab-focus");

        document.getElementById("flight-search").style.display = "none";
        document.getElementById("hotel-search").style.display = "block";
        
    }
    else if(id == "one-way"){
        document.getElementById("one-way").classList.add("tab-focus");
        document.getElementById("one-way").classList.remove("tab-not-focus");

        document.getElementById("round-trip").classList.add("tab-not-focus");
        document.getElementById("round-trip").classList.remove("tab-focus");

        document.getElementById("return-date").disabled = true;
    }
    else if(id == "round-trip"){
        document.getElementById("round-trip").classList.add("tab-focus");
        document.getElementById("round-trip").classList.remove("tab-not-focus");

        document.getElementById("one-way").classList.add("tab-not-focus");
        document.getElementById("one-way").classList.remove("tab-focus");

        document.getElementById("return-date").disabled = false;
    }
    
}
var getNumbers = (id) => {
    if(id == "adults"){
        document.getElementById("a-value").innerText = document.getElementById("adults").value;
    }
    else if(id == "children"){

        var childCount = document.getElementById("children").value
        document.getElementById("c-value").innerText = childCount;

        if(childCount == 0){

            document.getElementById("age-box").style.display = "none";

        }else if(childCount > 0){
            
            document.getElementById("age-box").style.display = "block";
            for(i = 1; i <= childCount; i++){
                document.getElementById("age-"+i).style.display = "inline-block";
            }
            for(i = 10; i > childCount; i--){
                document.getElementById("age-"+i).style.display = "none";
            }
        }

    }
    else if(id == "guests"){
        document.getElementById("g-value").innerText = document.getElementById("guests").value;
    }
    else if(id == "rooms"){
        document.getElementById("r-value").innerText = document.getElementById("rooms").value;
    }
}
var getValues = () => {
    var aValue = document.getElementById("a-value").innerHTML;
    var cValue = document.getElementById("c-value").innerHTML;
    var gValue = document.getElementById("g-value").innerHTML;
    var rValue = document.getElementById("r-value").innerHTML;

    document.getElementById("adults").value = aValue;
    document.getElementById("children").value = cValue;
    document.getElementById("guests").value = gValue;
    document.getElementById("rooms").value = rValue;

}