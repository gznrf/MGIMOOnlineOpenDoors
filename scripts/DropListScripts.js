function FirstItemSelected(){
    if(IsPlacesSelected()){
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_Sport_Complex.jpg";
    }else{
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_first_floor.jpg";
    }
}

function SecondItemSelected(){
    if(IsPlacesSelected()){
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_dinner_room.jpg";
    }else{
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_second_floor.jpg";
    }
}

function ThirdItemSelected(){
    if(IsPlacesSelected()){
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_action_hole.jpg";
    }else{
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_third_floor.jpg";
    }
}

function FourthItemSelected(){
    if(IsPlacesSelected()){
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_street.jpg";
    }else{
        document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_fourth_floor.jpg";
    }
}

function FifthItemSelected(){
    document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_fifth_floor.jpg";
}
function SixthItemSelected(){
    document.getElementById("mapPhoto").src="../images/pictureMaps/picture_map_sixth_floor.jpg";
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

function ChangeFloorsToPlaces(){
    document.getElementById("lable").textContent = 'Выбрать место';
    document.getElementById("first").textContent = 'Спортивный Комплекс';
    document.getElementById("second").textContent = 'Столовая';
    document.getElementById("third").textContent = 'Актовый зал';
    document.getElementById("fourth").textContent = 'Улица';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("sixth").style.display = 'none';
}

function ChangePlacesToFloors(){
    document.getElementById("lable").textContent = 'Выбрать этаж';
    document.getElementById("first").textContent = '1 этаж';
    document.getElementById("second").textContent = '2 этаж';
    document.getElementById("third").textContent = '3 этаж';
    document.getElementById("fourth").textContent = '4 этаж';
    document.getElementById("fifth").style.display = 'inline';
    document.getElementById("sixth").style.display = 'inline';
}

