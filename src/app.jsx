import React,{useState} from "react";
import axios from "axios"
const App = ()=>{ 
    const [searchText,setSearchText]=useState("food");
    const [prodImage,setProdImage]=useState([])
    console.log(prodImage)
    const handleSearch=()=>{
        const url=`https://pixabay.com/api/?key=33366993-be48e72cce501c5c05208ada2&q=${searchText}&image_type=photo&pretty=true`
        axios.get(url).then((e)=>{
            console.log(e)
          setProdImage(e.data.hits)
        })
    }


    return(<>
       <div className="container mt-5">
        <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" onChange={(a)=>setSearchText(a.target.value)}/>
        <button onClick={handleSearch}>submit</button>
        <div className="row">

        {prodImage && prodImage.map((data)=>{
            return(
        <div className="col-md-4">


        <div className="card">
        <img src={data.largeImageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className="card-text">{data.tags}</p>
  </div>
</div>
        </div>

            )
        })}

        </div>
        </div>
        </>)
   
}
export default App