const cityName=document.getElementById('cityName') ;
 
 const submitBtn=document.getElementById('submitBtn');
 const city_name=document.getElementById('city_name') ;
 const temp1=document.getElementById('temp') ;
 const temp_status=document.getElementById('temp_status') ;
 const Datahide=document.querySelector('.middle_layer');
 

const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
     
     
    if(cityval==""){
        city_name.innerText = `plz write the name before search`;
       Datahide.classList.add('Data_hide');
           
    }
    else{
        try{

        
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=a21ab63e90ac7ec77a2b1c6035597739`;
        const response= await fetch(url);
        const data =await response.json();
        const arrData = [data];
        console.log(arrData);
        console.log(arrData[0].main.temp);

        // console.log(response);
        temp1.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        const tempMood = arrData[0].weather[0].main;


        if(tempMood=="Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }else if(tempMood=="Clouds"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color:f12f6;'></i>";

        }
        else if(tempMood=="Rain"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud-rain' style='color:a4bobe;'></i>";

        }
        else {
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color:f1f2f6;'></i>";

        }
        city_name.innerText =` ${arrData[0].name}, ${arrData[0].sys.country}`;
        Datahide.classList.remove('Data_hide');
    
    
    }
    catch(err){
        city_name.innerText =' plz write the city name properly';
        console.log(err);
        Datahide.classList.add('Data_hide');
    }
}

}

submitBtn.addEventListener('click',getInfo);
 
    