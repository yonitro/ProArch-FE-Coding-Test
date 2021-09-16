import React,{useContext} from 'react'

import { GlobalContext } from "../../context/GlobalContext";

export default function Landing() {
    const { searchApp } = useContext(GlobalContext);
    const [search, setsearch] = searchApp;
  
  return (
    <div>
       <form>  
        <div className="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" />  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" />  
            <button type="submit">Login</button>   
            <input type="checkbox" checked={true}/> Remember me   
            <button type="button" className="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>   
    </form>     
    </div>
  )
}
