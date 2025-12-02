import Header from "./Header";
import Details from "./Detials";
import Footer from "./footer";
export default function Recipe(props)
{
  
    return(
    
      
         <div className="rcontainer">
           <Header item={props.item} time={props.time}/>
           <Details people={props.people} difficulty={props.difficulty} img={props.img} prize={props.prize} cost={props.cost}/>
           <Footer footer={props.footer} />
         </div>
    )
}