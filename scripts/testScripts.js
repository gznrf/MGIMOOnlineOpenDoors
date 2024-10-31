function ChangingPhoto(floorNumber){
    console.log("FloorChanging Script Worked");
    if(IsPlacesSelected()){
        if(floorNumber == 'first'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_Sport_Complex.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'second'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_dinner_room.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'third'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_action_hole.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'fourth'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_street.jpg";
            console.log("Floor changed done");
        }
    }else{
        if(floorNumber == 'first'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_first_floor.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'second'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_second_floor.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'third'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_third_floor.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'fourth'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_fourth_floor.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'fifth'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_fifth_floor.jpg";
            console.log("Floor changed done");
        }else if(floorNumber == 'sixth'){
            document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_sixth_floor.jpg";
            console.log("Floor changed done");
        }
    }
    
    
}
function GoToTeachersPage(){
    window.location.href='ourTeachersPage.html';
}

function ChangeFloorsToPlaces(){
    document.getElementById("first").textContent = 'Спортивный Комплекс';
    document.getElementById("second").textContent = 'Столовая';
    document.getElementById("third").textContent = 'Актовый зал';
    document.getElementById("fourth").textContent = 'Улица';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("sixth").style.display = 'none';
}

function ChangePlacesToFloors(){
    document.getElementById("first").textContent = '1 этаж';
    document.getElementById("second").textContent = '2 этаж';
    document.getElementById("third").textContent = '3 этаж';
    document.getElementById("fourth").textContent = '4 этаж';
    document.getElementById("fifth").style.display = 'inline';
    document.getElementById("sixth").style.display = 'inline';
}

function IsPlacesSelected(){
    if(document.getElementById("sixth").style.display == 'none'){
        return true;
    }else if(document.getElementById("sixth").style.display == 'inline'){
        return false;
    }
    else{
        console.log('Selected not correct');
    }
}