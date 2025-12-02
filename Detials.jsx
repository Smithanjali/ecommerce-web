 export default function Details(props)
{
    let people;
    let img;
    let difficulty;
    let cost;
    let prize=5+cost;
    return(
        <section className="rdetails">
    <p>{props.people}
      <img  className="img" src={props.img} alt="image" />
    <p>{props.difficulty}
      
    
    <p>Type: Beverage
    <p>{props.cost}
      <p>
        GST:5$
        <p>
          {props.prize}$
        </p>
      </p>
      
    </p>
    </p>
    </p>
    </p>
    
     
   </section>
    );
}
