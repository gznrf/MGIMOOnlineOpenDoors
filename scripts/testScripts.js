function ChangingPhoto(floorNumber){
    console.log("FloorChanging Script Worked");
    
    try{
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
    catch{
        console.log('Floor selection error');
    }
    
}
