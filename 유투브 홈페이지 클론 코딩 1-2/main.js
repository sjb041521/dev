
function openMenuButton(){
    if(document.getElementById('main_slide_list').className === 'main_slide'){
        document.getElementById('main_slide_list').className = 'left_menu_hidden';
        document.getElementById('slide_header').style.display='flex';
        document.getElementById('hidden_area_id').style.display='block';
    }
    else if ( document.getElementById('main_slide_list').className === 'left_menu_hidden') {
        document.getElementById('main_slide_list').className = 'main_slide';
        document.getElementById('hidden_area_id').style.display='none';
        document.getElementById('slide_header').style.display='none';
    }
}

function profile_button_on(){
    if(document.getElementById('test').style.display === 'none'){
        document.getElementById('test').style.display ='block';
        
    }

    else {
        document.getElementById('test').style.display='none';
    }

}