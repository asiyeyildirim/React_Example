import Ayran from "./Ayran";
import Cay from "./Cay";
import Kahve from "./Kahve";
import React from 'react';
import ReactDOM from 'react-dom/client';






function GorselGetir(props){

  const secim = function(x){

const div = ReactDOM.createRoot(document.getElementById("aciklama"));

    if (x==1) {

     div.render(
      <Cay/>
     );
      
    }
    else if(x==2){
      div.render(
        <Kahve/>
       );

    }
    else if(x ==3){
      div.render(
        <Ayran/>
       );
    }



}




return(
  
    <>
<button onClick={()=>secim("1")} > Çay</button>
<button  onClick={()=>secim("2")}> Kahve</button>
<button onClick={() =>secim("3")}> Ayran</button>
<div id="aciklama"></div>

</>
  
);
}

      
  

   

export default GorselGetir;