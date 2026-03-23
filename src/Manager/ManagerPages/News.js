import React, { useEffect, useState } from 'react'
import ManagerHeader from '../managerComponents/ManagerHeader'
import firedb from '../../firebase'

function News() {

  
  var [holder,setHolder]=  useState()

var [path, setPath] = useState()

   
  const[user,setUser]= useState({
    Image:"",
    title:"",
     date:""
   })
  
    
   function set(e)
   {
     setUser({...user,[e.target.name]:e.target.value})
   }
     
     function set1(e) {
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = function () {
      setPath(reader.result)
      setUser({ ...user, Image: reader.result });
    }
  }
  
    function save()
    {
        const currentDate = new Date().toISOString().split('T')[0];
    const data = { ...user, date: currentDate };
       firedb.child("News").push(data)
       alert("News created successfully")
      show()
    }
    
   
     function show()
       {
         firedb.child("News").once("value",function(snapshot){
            setHolder(snapshot.val())
            
        })
       }

       useEffect(function(){
           show()
           
         },[])
       


var s={
                height:"100px",
                width:"100px"
              }

    function Del(key){
      firedb.child("News").child(key).remove()
      show()
    }

  return (
    <div id='panelman'>
       <ManagerHeader/> 
         <div id='n1'>
        <h2>News</h2>
        
 <input id='in' onChange={set1} type="file" />

          <input
          id='in'
           name="title"
            type="text"
            placeholder="title"
            value={user.title}
            onChange={set}
            required
          />
         
          <button onClick={save} type="submit"
          id='bn'>Register</button>

      <div class="container">
        <table class="table table-bordered">
          <thead>
            <th>
              Images
            </th>
            <th>
              Title
            </th>
            <th>
              Operation
            </th>
          </thead>
          <tbody>
             {
             
               holder? Object.keys(holder).map(function(key){
                  
                    return(
                      
                      <tr>
                          <td>
                           <img style={s} src={holder[key].Image} alt=''></img>
                          </td>
                          <td>{holder[key].title}</td>
                          <td>
                            <button id='btng' onClick={() => Del(key) } >delete</button>
                          </td>
                      </tr>
                    )
                }):""
             }
          </tbody>
        </table>
      </div>

       
      </div>
      </div>

    
  )
}

export default News




   
