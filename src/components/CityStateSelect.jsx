import React from 'react'

function CityStateSelect({props}) {
// const cityState=[{statecity:"تهران",cities:["صادقیه، آزادی"]},
// {statecity:"اصفهان",cities:["مشتاق اول، پروین"]},
// {statecity:"اسلامشهر",cities:["قائمیه، واوان"]},
// {statecity:"رباط کریم",cities:["نصیرشهر، پرند"]},
// {statecity:"پروین",cities:["عسگریه دوم، عسگریه اول"]},
// {statecity:"خانی اباد ",cities:["خانی آبادنو، عبدل آباد "]},
// ]
let provinceList =['تهران','اصفهان','اسلامشهر']
let cityList=[
    ["صادقیه، آزادی"],
    ["مشتاق اول، پروین"],
    ["قائمیه، واوان"]
]
// const province=cityState.map((c)=>{return c.statecity})

  return (
        <div>   


<select name="" id="">
    {provinceList.map(pr=>
        (<option value={pr}>
        {pr}</option>))
    
   }
</select>


<select name="" id="">
    {
       cityList.map(c=>(
           <option value="">{c}</option>
       )) 
    }
</select>
        </div>
    )
}

export default CityStateSelect

// {cityState.map((c)=>(

//     <select name="" id="">
//         <option value={c.cities}>
            
//             {
            
//             c.cities}</option>
    
//     </select>))} 
            // {/* <li>{province}</li> */}
