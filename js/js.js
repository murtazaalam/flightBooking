var detailAriaId;
let addClickCounter = 1;
let totalPassengers = 0;
let totalGuest = 0;
let minGap = 0;

window.onload = function() {
    slideOne();
    slideTwo();
    updateTime(0,"arrival", "min");
    updateTime(0,"departure", "min")
}
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
    else if(id == "infant"){
        document.getElementById("i-value").innerText = document.getElementById("infant").value;
    }
}
var getValues = () => {
    window.localStorage.getItem("Adults") ? document.getElementById("a-value").innerText = window.localStorage.getItem("Adults")
                                    : document.getElementById("a-value").innerText = document.getElementById("a-value").innerHTML;
    
    window.localStorage.getItem("Children") ? document.getElementById("c-value").innerText = window.localStorage.getItem("Children")
                                    : document.getElementById("c-value").innerText = document.getElementById("c-value").innerHTML;                                   

    var aValue = document.getElementById("a-value").innerHTML;
    var cValue = document.getElementById("c-value").innerHTML;

    document.getElementById("adults").value = aValue;
    document.getElementById("children").value = cValue;

}
var showHideDetail = (id) => {
    var flightNo = id.split("-")[1];

    detailAriaId = `${id}-detail`;
    var displayProperty = document.getElementById(detailAriaId).getAttribute("style").split(":");

    displayProperty[1].trim() == "none;" ? document.getElementById(detailAriaId).style.display = "block" : 
            document.getElementById(detailAriaId).style.display = "none";

    //TODO : Note - Replace 2 with total number of flights coming from api
    for(var i = 0; i < 2; i++){
        if(flightNo !=  (i+1)){
            document.getElementById(`flight-${i+1}-detail`).style.display = "none"
        }
        
    }
    
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
        document.getElementById("con-booking").style.display = "none";
        document.getElementById("confirm-info").style.display = "none";
        
    }
    else if(id == "i-button"){
        document.getElementById("extraItemModalLabel").innerText = "Flight Details";
        document.getElementById("extra-items").style.display = "none";
        document.getElementById("flight-info").style.display = "block";
        document.getElementById("modal-dialog").classList.add("modal-lg");
        document.getElementById("con-booking").style.display = "none";
        document.getElementById("confirm-info").style.display = "none";
    }
    else if(id == "continue"){
        
        document.getElementById("extraItemModalLabel").innerText = "Review Details";
        document.getElementById("modal-dialog").classList.remove("modal-lg");
        document.getElementById("extra-items").style.display = "none";
        document.getElementById("flight-info").style.display = "none";
        document.getElementById("con-booking").style.display = "block";
        document.getElementById("confirm-info").style.display = "block";

        let validation = true;
        let error = false;

        var divContent = document.getElementById("pInfo");
        while(divContent.firstChild){
            divContent.removeChild(divContent.firstChild);
        }

        for(var i = 0; i < totalPassengers; i++){

            var firstName = document.getElementById(`f${i}`).value;
            var middleName = document.getElementById(`m${i}`).value;
            var lastName = document.getElementById(`l${i}`).value;
            var dob = document.getElementById(`d${i}`).value;
            var gender = document.getElementById(`gender${i}`).value;
            document.getElementById(`f${i}`).style.borderColor = "#ced4da";
            document.getElementById(`m${i}`).style.borderColor = "#ced4da"
            document.getElementById(`l${i}`).style.borderColor = "#ced4da"
            document.getElementById(`d${i}`).style.borderColor = "#ced4da"
            document.getElementById(`gender${i}`).style.borderColor = "#ced4da"

            if(firstName == ""){
                error = true;
                document.getElementById(`f${i}`).style.borderColor = "red";
            }
            if(middleName == ""){
                error = true;
                document.getElementById(`m${i}`).style.borderColor = "red";
            }
            if(lastName == ""){
                error = true;
                document.getElementById(`l${i}`).style.borderColor = "red";
            }
            if(dob == ""){
                error = true;
                document.getElementById(`d${i}`).style.borderColor = "red";
            }
            if(gender == 0){
                error = true;
                document.getElementById(`gender${i}`).style.borderColor = "red";
            }
            if(error == false){
                var pInfo = `<div class="p-detail-box">
                                <h6>Passenger ${i+1}</h6>
                                <div>
                                    <table class="table table-borderless">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td class="t-txt">
                                                    First & Middle Name
                                                </td>
                                                <td class="t-value">
                                                    ${firstName} ${middleName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="t-txt">
                                                    Last Name
                                                </td>
                                                <td class="t-value">
                                                    ${lastName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="t-txt">
                                                    Gender
                                                </td>
                                                <td class="t-value">
                                                    ${gender == 0 && "Invalid" || gender == 1 && "Male" ||
                                                    gender == 2 && "Female" || gender == 3 && "Other"} 
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="t-txt">
                                                    DOB
                                                </td>
                                                <td class="t-value">
                                                    ${dob}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>`;
                $("#pInfo").append(pInfo);
            }
        }

        if(error == false) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = document.getElementById("email")
            var code = document.getElementById("code")
            var mobile = document.getElementById("mobile")
            var city = document.getElementById("city")
            email.style.borderColor = "#ced4da";
            code.style.borderColor = "#ced4da";
            mobile.style.borderColor = "#ced4da";
            city.style.borderColor = "#ced4da";
            if(email.value == ""){
                validation = false;
                email.style.borderColor = "red";
            }
            if(!email.value.match(mailformat)){
                validation = false;
                email.style.borderColor = "red";
            }
            if(code.value == ""){
                validation = false;
                code.style.borderColor = "red";
            }
            if(mobile.value == ""){
                validation = false;
                mobile.style.borderColor = "red";
            }
            if(city.value == ""){
                validation = false;
                city.style.borderColor = "red";
            }
            if(mobile.value.length != 10){
                validation = false;
                mobile.style.borderColor = "red";
            }
            if(validation == true){
                $("#extraItemModal").modal("show");
            }
        }
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
    for(var i = 0; i < totalPassengers; i++){
        var infoFields = `<div class="adult">P-${i+1}</div>
                            <div class="input-fields">
                                <select class="form-select" id="gender${i}" onchange="checkValue(this.id)" required>
                                    <option value="0" selected disabled>Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </select>
                                <input type="text" class="form-control name" placeholder="First Name" id="f${i}" 
                                oninput="checkValue(this.id)" required />
                                <input type="text" class="form-control name" placeholder="Middle Name" id="m${i}"
                                oninput="checkValue(this.id)" required />
                                <input type="text" class="form-control name" placeholder="Last Name" id="l${i}"
                                oninput="checkValue(this.id)" required />
                                <input type="text" class="form-control" placeholder="Date of Birth" id="d${i}" required
                                 onfocus="(this.type='date')" oninput="checkValue(this.id)" />
                            </div>`;
        $('#passengers-info').append(infoFields);
    }
}
var checkValue = (id) => {
    var value = document.getElementById(id).value;
    if(value == ""){
        document.getElementById(id).style.borderColor = "red"
    }
    else{
        document.getElementById(id).style.borderColor = "#ced4da";
    }
}
var addRoom = () => {
    if(addClickCounter == 1){
        document.getElementById("remove-room").style.display = "block";
    }
    addClickCounter = addClickCounter+1;
    if(addClickCounter == 2){
        document.getElementById("room-2").style.display = "block";
        document.getElementById("ha-value").innerHTML = addClickCounter;
    }
    else if(addClickCounter == 3){
        document.getElementById("room-3").style.display = "block";
        document.getElementById("ha-value").innerHTML = addClickCounter;
    }
    else if(addClickCounter == 4){
        document.getElementById("room-4").style.display = "block";
        document.getElementById("ha-value").innerHTML = addClickCounter;
    }
    else if(addClickCounter == 5){
        document.getElementById("room-5").style.display = "block";
        document.getElementById("ha-value").innerHTML = addClickCounter;
    }
    else{
        addClickCounter = 5;
    }
}
var removeRoom = () => {
    if(addClickCounter == 2){
        document.getElementById("room-2").style.display = "none";
        document.getElementById("remove-room").style.display = "none";
        document.getElementById("ha-value").innerHTML = addClickCounter-1;
        addClickCounter = addClickCounter - 1;
        document.getElementById("r-2-a").value = 0;
        document.getElementById("r-2-c").value = 0;
        document.getElementById("r-2-i").value = 0;
    }
    else if(addClickCounter == 3){
        document.getElementById("room-3").style.display = "none";
        document.getElementById("ha-value").innerHTML = addClickCounter-1;
        addClickCounter = addClickCounter - 1;
        document.getElementById("r-3-a").value = 0;
        document.getElementById("r-3-c").value = 0;
        document.getElementById("r-3-i").value = 0;
        
    }
    else if(addClickCounter == 4){
        document.getElementById("room-4").style.display = "none";
        document.getElementById("ha-value").innerHTML = addClickCounter-1;
        addClickCounter = addClickCounter - 1;
        document.getElementById("r-4-a").value = 0;
        document.getElementById("r-4-c").value = 0;
        document.getElementById("r-4-i").value = 0;
    }
    else if(addClickCounter == 5){
        document.getElementById("room-5").style.display = "none";
        document.getElementById("ha-value").innerHTML = addClickCounter-1;
        addClickCounter = addClickCounter - 1;
        document.getElementById("r-5-a").value = 0;
        document.getElementById("r-5-c").value = 0;
        document.getElementById("r-5-i").value = 0;
    }
}

var okRoom = () => {
    var total = 0;
    for(var i = 0; i < 5; i++){
        total = total + Number(document.getElementById(`r-${i+1}-a`).value) + 
                        Number(document.getElementById(`r-${i+1}-c`).value) + 
                        Number(document.getElementById(`r-${i+1}-i`).value);
    }
    document.getElementById("hg-value").innerText = total;
}
var getChildAge = (id, count) => {
    var childCount = document.getElementById(id).value;
    
    var ageBox = document.getElementsByClassName(`r-${count}`);
    for(i = 0; i<childCount; i++){
        ageBox[i].style.display = "inline-block";
    }
    for(i = childCount; i<5; i++){
        ageBox[i].style.display = "none";
    }
    
}

function slideOne(){
    let sliderOne = document.getElementById("p-slider-1");
    let sliderTwo = document.getElementById("p-slider-2");
    let displayValOne = document.getElementById("p-range-1");

    if((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor("p");
}
function slideTwo(){
    let sliderOne = document.getElementById("p-slider-1");
    let sliderTwo = document.getElementById("p-slider-2");
    let displayValTwo = document.getElementById("p-range-2");

    if((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor("p");
}
function fillColor(type){

    let sliderOne = document.getElementById(`${type}-slider-1`);
    let sliderTwo = document.getElementById(`${type}-slider-2`);
    let sliderMaxVal = document.getElementById(`${type}-slider-1`).max;
    let sliderTrack = document.querySelector(`.${type}-slider-track`);

    percent1 = (sliderOne.value / sliderMaxVal)*100;
    percent2 = (sliderTwo.value / sliderMaxVal)*100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%,
        #dadae5 ${percent2}%)`
}

function updateTime(value, type, valueType){
    
    if(type == "arrival" && valueType == "min"){

        let sliderOne = document.getElementById("a-slider-1");
        let sliderTwo = document.getElementById("a-slider-2");
        if((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap){
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }

        let hr = Math.floor(sliderOne.value/60);
        let min = sliderOne.value % 60;
        document.getElementById("a-range-1").innerHTML = `${hr}:${min}`;
        fillColor("a");
        
    }
    if(type == "arrival" && valueType == "max"){

        let sliderOne = document.getElementById("a-slider-1");
        let sliderTwo = document.getElementById("a-slider-2");
        if((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap){
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        let hr = Math.floor(sliderTwo.value/60);
        let min = sliderTwo.value % 60;
        document.getElementById("a-range-2").innerHTML = `${hr}:${min}`;
        fillColor("a");
    }
    if(type == "departure" && valueType == "min"){
        let sliderOne = document.getElementById("d-slider-1");
        let sliderTwo = document.getElementById("d-slider-2");
        if((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap){
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        let hr = Math.floor(sliderOne.value/60);
        let min = sliderOne.value % 60;
        document.getElementById("d-range-1").innerHTML = `${hr}:${min}`;
        fillColor("d");
    }
    if(type == "departure" && valueType == "max"){
        let sliderOne = document.getElementById("d-slider-1");
        let sliderTwo = document.getElementById("d-slider-2");
        if((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap){
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        let hr = Math.floor(sliderTwo.value/60);
        let min = sliderTwo.value % 60;
        document.getElementById("d-range-2").innerHTML = `${hr}:${min}`;
        fillColor("d");
    }
}
