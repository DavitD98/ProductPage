import "./productsPage.css"
import upload from "../../images/file.jpg"
import {setAddProduct, setDeleteProduct,setEditProductName, setEditProductCost} from "../../redux/products/actions"
import {useState} from "react";
import {connect} from "react-redux"
import ProductsComponent from "../components/productsComponent/productsComponent";


const ProductsPage =(props)=>{
    //           Props and States
   const {products,setAddProduct,setDeleteProduct,setEditProductName,setEditProductCost,} = props
    const [newValues,setNewValues] = useState({
        nameValue:"",
        costValue:null,
        imgValue:null,
        gaming:false
    })

    //           Functions

    const changeValues = (e)=>{
       setNewValues(prevState => {
           return {
               ...prevState,
               [e.target.name] : e.target.value
           }
       })
    }
    const setImg = (e)=>{
       const objectUrl = URL.createObjectURL(e.target.files [0])
        setNewValues(prevState => {
            return{
                ...prevState,
                imgValue:objectUrl
            }
        })
    }
    const changeIsGaming = ()=>{
       setNewValues(prevState => {
           return{
               ...prevState,
               gaming:!prevState.gaming
           }
       })
    }
    const AddProduct = ()=>{
       setAddProduct(newValues.nameValue,newValues.costValue,newValues.imgValue,newValues.gaming)
    }


    return(
        <div>
            <h1 style={{textAlign:"center"}}>Products Page</h1>
                <div className="inputs">
                <input onChange={changeValues} type="text" name="nameValue" placeholder="Type product name..."/>
                <input onChange={changeValues} type="number" name="costValue" placeholder="Type product price..."/>


                <label htmlFor="img">
                     <input onChange={setImg} id="img" type="file"/>
                        <div className="upload">
                            <img src={upload} />
                      </div>
                </label>

                <span className="bold">File Path</span>
                <span style={{width:"300px"}}>{newValues.imgValue}</span>

                   <div>
                    <label htmlFor="gaming">Is Gaming</label>
                    <input onChange={changeIsGaming} type="checkbox" id="gaming"/>
                   </div>

                <button onClick={AddProduct} className="btn">Add Product</button>
            </div>


            <div className="productsContainer">
                {
                    products.map(item => <ProductsComponent {...item} key={item.id}
                           setDeleteProduct={setDeleteProduct} setEditProductName={setEditProductName} setEditProductCost={setEditProductCost} />)
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        products:state.productState.products
    }
}
export default connect(mapStateToProps,{setAddProduct,setDeleteProduct,setEditProductName,setEditProductCost})(ProductsPage)