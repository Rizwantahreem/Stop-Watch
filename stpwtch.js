let interval;

function check(){

    let min, hr,sec;

        hr = document.getElementById("hrs").innerHTML ;
        hr = Number(hr);
        // console.log(hr);
        min = document.getElementById("mins").innerHTML ;
        min =  Number( min );
        // console.log(min);
        sec = document.getElementById("secs").innerHTML ;
        sec =  Number( sec );
        // console.log(sec);

        if (sec + 1 < 60){
            sec += 1 ;
           
        }
        else if (sec + 1 == 60){
            sec = 0;
            min = min + 1 ;

            if (min + 1 == 60){
                hr +=1;
                min =0;
            }
        }  
    //    if (sec + 1 >= 60){
    //         min = min + 1 ;
           
    //     }
        else if(min + 1 < 60){
            min = min +1;
        }
        
        else if (min + 1 == 60){
            min = 0;
            hr = hr +1;  
            if (sec + 1 == 60){
                min +=1;
            }
        }
        else if (min + 1 > 60){
            min = min + 1; 
            hr = hr +1;  
        }
   
        document.getElementById("secs").innerHTML = sec;
        document.getElementById("hrs").innerHTML = hr;
        document.getElementById("mins").innerHTML = min;
   };

function starting(){
   
       interval = setInterval(check, 1000);
}

function stoping(){
    clearInterval(interval);
}
document.getElementById("start").addEventListener("click", starting);

document.getElementById("stop").addEventListener("click", stoping);


document.getElementById("restart").addEventListener("click", function(){
    document.getElementById("hrs").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
    clearInterval(interval);
});

   console.log(interval);
