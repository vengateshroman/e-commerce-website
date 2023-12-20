import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
import "../css/Slidebare.css";
 function Slidebare({handleChange}) {
  
  return (
   <section className="sidebare">
    <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

   </section>
  )
}
export default Slidebare;