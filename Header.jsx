 
 export default function Header(props)
{
    let item;
    let time;
    return(

    <div className="rheader">
        
        <h1>{props.item}</h1>
        <p>{props.time}</p>
        
         
     
  </div>
    );
}

