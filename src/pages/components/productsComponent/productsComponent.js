import "./productsComponent.css"
import {setEditProductCost, setEditProductName} from "../../../redux/products/actions";
import {useState} from "react";

const ProductsComponent= (props)=>{
    //             Props and hook States
     const {id,name,cost,gaming,img,setDeleteProduct,setEditProductName,setEditProductCost} = props
    const [newValues,setNewValues] = useState({
        name:"",
        cost:null
    })
    const [isBoolean,setIsBoolean] = useState(false)

  //                Functions

    const changeValues = (e)=>{
         setNewValues(prevState => {
             return {
                 ...prevState,
                 [e.target.name] : e.target.value
             }
         })
    }
    const changeBoolean = ()=>{
         setIsBoolean(!isBoolean)
    }
    const editName = ()=>{
        setEditProductName(id,newValues.name)
    }
    const editCost = ()=>{
         setEditProductCost(id,newValues.cost)
    }

    console.log(newValues)
    return(
        <div key={id} className="product-item">
            <p> Product Name :<span className="bold"> {name}</span></p>
            <p>Product Cost :<span className="bold"> {cost} $</span></p>
            {gaming === true ?  <span className="bold">Gaming </span> : ""}

               {img ?  <div className="product-img">
                          <img src={img} alt="productImg"/>
                      </div>
              : <p style={{color:"red",fontWeight:"700"}}>No Img Found</p>
               }

                  <div className="buttons">
                   <button onClick={()=>{setDeleteProduct(id)}} className="btn">Delete</button>
             {
                 isBoolean === true ? <button onClick={changeBoolean} className="btn">Close Edit</button>
                     : <button onClick={changeBoolean} className="btn">Open Edit</button>
             }
       </div>

            {
                isBoolean === true ? <div className="edit-div">
                <div className="edit-section">
                    <input onChange={changeValues} name="name" type="text" placeholder="edit name ..."/>
                        <button onClick={editName} className="btn">Edit Name</button>
                 </div>
                <div className="edit-section">
                    <input onChange={changeValues}  name="cost"  type="number" placeholder="edit cost ..."/>
                        <button onClick={editCost} className="btn">Edit Cost</button>
                </div>

                            </div>
                    : ""
                    }

        </div>
    )
}

export default ProductsComponent
