var swap = () =>{
    var originCity = document.getElementById("origin-city").value;
    var originCountry = document.getElementById("origin-country").innerText;
    var destCity = document.getElementById("dest-city").value;
    var destCountry = document.getElementById("dest-country").innerText;
    document.getElementById("dest-city").value = originCity;
    document.getElementById("dest-country").innerHTML = originCountry;
    document.getElementById("origin-city").value = destCity;
    document.getElementById("origin-country").innerHTML = destCountry;

}
var changeTab = (id) =>{
    if(id == "flight-tab"){
        document.getElementById("flight-content").style.display = "block";
        document.getElementById("hotel-content").style.display = "none";

        document.getElementById("flight-tab").classList.add("tab-focus");
        document.getElementById("flight-tab").classList.remove("tab-not-focus");

        document.getElementById("hotel-tab").classList.remove("tab-focus");
        document.getElementById("hotel-tab").classList.add("tab-not-focus");
    }
    else if(id == "hotel-tab"){
        document.getElementById("hotel-content").style.display = "block";
        document.getElementById("flight-content").style.display = "none";

        document.getElementById("hotel-tab").classList.add("tab-focus");
        document.getElementById("hotel-tab").classList.remove("tab-not-focus");

        document.getElementById("flight-tab").classList.add("tab-not-focus");
        document.getElementById("flight-tab").classList.remove("tab-focus");
        
        
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
            console.log(childCount)
            document.getElementById("age-box").style.display = "flex";
            if(childCount == 1){
                document.getElementById("age-1").style.display = "block";
                document.getElementById("age-2").style.display = "none";
            }
            else if(childCount == 2){
                document.getElementById("age-2").style.display = "block";
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