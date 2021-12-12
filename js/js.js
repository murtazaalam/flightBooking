var detailAriaId;
let totalPassengers = 0;
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
    let totalNumberOfAdults = 0;
    let totalNumberOfchild = 0;
    if(id == "adults"){
        totalNumberOfAdults = document.getElementById("adults").value;
        window.localStorage.setItem("Adults", totalNumberOfAdults);
        document.getElementById("a-value").innerText = document.getElementById("adults").value;
    }
    else if(id == "children"){
        totalNumberOfchild = document.getElementById("children").value;
        window.localStorage.setItem("Children", totalNumberOfchild);
        var childCount = document.getElementById("children").value;
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
    window.localStorage.getItem("Adults") ? document.getElementById("a-value").innerText = window.localStorage.getItem("Adults")
                                    : document.getElementById("a-value").innerText = document.getElementById("a-value").innerHTML;
    
    window.localStorage.getItem("Children") ? document.getElementById("c-value").innerText = window.localStorage.getItem("Children")
                                    : document.getElementById("c-value").innerText = document.getElementById("c-value").innerHTML;                                   

    var aValue = document.getElementById("a-value").innerHTML;
    var cValue = document.getElementById("c-value").innerHTML;
    var gValue = document.getElementById("g-value").innerHTML;
    var rValue = document.getElementById("r-value").innerHTML;

    document.getElementById("adults").value = aValue;
    document.getElementById("children").value = cValue;
    document.getElementById("guests").value = gValue;
    document.getElementById("rooms").value = rValue;

}
var showHideDetail = (id) => {
    //var index = id.split("-")[1];
    detailAriaId = `${id}-detail`;
    var displayProperty = document.getElementById(detailAriaId).getAttribute("style").split(":");

    displayProperty[1].trim() == "none;" ? document.getElementById(detailAriaId).style.display = "block" : 
                            document.getElementById(detailAriaId).style.display = "none";
    // var detailAria = document.getElementsByClassName("detail-aria");
    // console.log(index);
    // for(i = 0; i < detailAria.length; i++){
    //     if(index != (i+1)){
    //         console.log("helo")
    //         document.getElementById(`flight-${index}-detail`).style.display = "none";
    //     }
    // }
}
var tabChange = (id) => {
    if(id == `${detailAriaId}-tab-1`){
        document.getElementById(`${detailAriaId}-tab-1`).classList.add("active");
        document.getElementById(`${detailAriaId}-tab-2`).classList.remove("active");
        document.getElementById(`${detailAriaId}-tab-3`).classList.remove("active");

        document.getElementById(`${detailAriaId}-tab-1-content`).style.display = "block";
        document.getElementById(`${detailAriaId}-tab-2-content`).style.display = "none";
        document.getElementById(`${detailAriaId}-tab-3-content`).style.display = "none";
        
    }
    else if(id == `${detailAriaId}-tab-2`){
        document.getElementById(`${detailAriaId}-tab-2`).classList.add("active");
        document.getElementById(`${detailAriaId}-tab-1`).classList.remove("active");
        document.getElementById(`${detailAriaId}-tab-3`).classList.remove("active");

        document.getElementById(`${detailAriaId}-tab-2-content`).style.display = "block";
        document.getElementById(`${detailAriaId}-tab-1-content`).style.display = "none";
        document.getElementById(`${detailAriaId}-tab-3-content`).style.display = "none";
    }
    else if(id == `${detailAriaId}-tab-3`){
        document.getElementById(`${detailAriaId}-tab-3`).classList.add("active");
        document.getElementById(`${detailAriaId}-tab-1`).classList.remove("active");
        document.getElementById(`${detailAriaId}-tab-2`).classList.remove("active");

        document.getElementById(`${detailAriaId}-tab-3-content`).style.display = "block";
        document.getElementById(`${detailAriaId}-tab-2-content`).style.display = "none";
        document.getElementById(`${detailAriaId}-tab-1-content`).style.display = "none";
    }
    else if(id == "itinerary"){
        document.getElementById("itinerary").classList.add("active");
        document.getElementById("baggage").classList.remove("active");
        document.getElementById("itinerary-content").style.display = "block";
        document.getElementById("baggage-content").style.display = "none";
    }
    else if(id == "baggage"){
        document.getElementById("baggage").classList.add("active");
        document.getElementById("itinerary").classList.remove("active");
        document.getElementById("baggage-content").style.display = "block";
        document.getElementById("itinerary-content").style.display = "none";
    }
}

var showHideFields = (id) => {
    if(id == "freq-flyer"){
        var plus = document.getElementById("plus").getAttribute("style").split(":")[1].trim();
        var minus = document.getElementById("minus").getAttribute("style").split(":")[1].trim();
        if(plus == "inline-block;" & minus == "none;"){
            document.getElementById("plus").style.display = "none";
            document.getElementById("minus").style.display = "inline-block";
            document.getElementById("freq-flyer-aria").style.display = "flex";
        }
        else{
            document.getElementById("plus").style.display = "inline-block";
            document.getElementById("minus").style.display = "none";
            document.getElementById("freq-flyer-aria").style.display = "none";
        }
    }
}
var extraItem = (id) => {
    var selectedItem = document.getElementById(id).value;
    if(id == "meal-item"){
        document.getElementById("meal").innerHTML = selectedItem;
    }
    else if(id == "bag-item"){
        document.getElementById("bag").innerHTML = selectedItem;
    }
}

var openModal = (id) => {
    if(id == "addMealBags"){
        document.getElementById("extraItemModalLabel").innerText = "Meal & Extra baggage";
        document.getElementById("extra-items").style.display = "block";
        document.getElementById("flight-info").style.display = "none";
        document.getElementById("modal-dialog").classList.remove("modal-lg");
    }
    else if(id == "i-button"){
        document.getElementById("extraItemModalLabel").innerText = "Flight Details";
        document.getElementById("extra-items").style.display = "none";
        document.getElementById("flight-info").style.display = "block";
        document.getElementById("modal-dialog").classList.add("modal-lg");
    }
}
var searchByStops = (id) => {
    
    if(id == "zero-stop"){
        //use loop here
        for(i = 0; i < 2; i++){
            document.getElementById(`f-${i+1}-stop-dot`).style.display = "none";
            document.getElementById(`f-${i+1}-stop-txt`).innerText = "Non-stop";
            document.getElementById(`f-${i+1}-stop-txt`).style.color = "#1aac41";
        }
        
    }
    else if(id == "one-stop"){
        //use loop here
        for(i = 0; i < 2; i++){
            document.getElementById(`f-${i+1}-stop-dot`).style.display = "block";
            document.getElementById(`f-${i+1}-stop-txt`).innerText = "1 stop";
            document.getElementById(`f-${i+1}-stop-txt`).style.color = "red";
        }
        
    }
    else if(id == "more-stop"){

    }
}
var selectTripType = () => {
    var tripType = document.getElementById("trip-type").value;
    if(tripType == 2 || tripType == 4){
        document.getElementById("return").disabled = false;
    }
    else{
        document.getElementById("return").disabled = true;
    }
}
var loadInfoBox = () => {
    totalPassengers = Number(window.localStorage.getItem("Adults"))+Number(window.localStorage.getItem("Children"));
    if(totalPassengers < 2){
        var infoFields = `<div class="input-fields">
                            <select class="form-select">
                                <option value="0">Title</option>
                                <option value="1">Mr</option>
                                <option value="2">Ms</option>
                                <option value="3">Mrs</option>
                            </select>
                            <input type="text" class="form-control name" placeholder="First Name & Middle Name" />
                            <input type="text" class="form-control" placeholder="Last Name"/>
                        </div>`;
            $('#passengers-info').append(infoFields);
    }
    else {
        for(var i = 0; i < totalPassengers; i++){
            var infoFields = `<div class="adult">P-${i+1}</div>
                                <div class="input-fields">
                                    <select class="form-select">
                                        <option value="0">Title</option>
                                        <option value="1">Mr</option>
                                        <option value="2">Ms</option>
                                        <option value="3">Mrs</option>
                                    </select>
                                    <input type="text" class="form-control name" placeholder="First Name & Middle Name" />
                                    <input type="text" class="form-control" placeholder="Last Name"/>
                                </div>`;
            $('#passengers-info').append(infoFields);
        }
    }
    
}
