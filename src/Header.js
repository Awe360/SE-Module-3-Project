
// import React, {useState} from "react";
// function Header(){
//   let fun=()=>{console.log("hi you clicked me")}
//   let an=(e)=>{e.target.textContent="I have been changed"}
//   const[age,setAge]=useState(0);
//   const Increament=()=>{
//     setAge(age+1);
//   }
//   const res=()=>{
//     setAge(0);
//   }
//   const ans=()=>{
//     setAge(age-1);
//   }
//   let changeHandle=(event)=>{
//     console.log(event.target);
//   }
//   const[name,setName]=useState("");
//   let funn=(event)=>{
//    setName(event.target.value);
//   }
//   const fruits=["Apple","Banana","Orange","Tomato"];
//   const val=fruits.map(fruit=><li>{fruit}</li>);

//     return(
//         <div>
//           <ul>{val}</ul>
//         <h1 className="home">Home Page</h1>
// <ul className="lis">
// <li><a href="#">Home</a> </li>
// <li><a href="#">About</a> </li>
// <li><a href="#">Contact</a> </li>
// <img src="./src/js counter.PNG" alt="no image found"></img>

// </ul>
// <button onClick={(e)=>an(e)}>click me</button>
// <input onChange={changeHandle}></input>

// <div className="com">
// <h1>Age:{age}</h1>
// <button onClick={Increament}>IncreamentAge</button>
// <button onClick={res}>ResetAge</button>
// <button onClick={ans}>DecreamentAge</button>
// <input type="text"onChange={funn} ></input>
// <p>Name:{name}</p>
// </div>

// </div>);
// }
// export default Header;






// import Header from './Header';
// import Footer from './Footer';
// import{BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'; 
// import Home from './book/Home';
// import Contact from './book/Contact';
// import About from './book/About';

// function App() {
//   return (
//     <div className="app">
//       {/* <Header/>
//       <Footer name="awoke" isLoggedIn="false"></Footer> */
//       <Router>
//         <nav className='bo'>
//          <Link to='/'>Home</Link>
//          <Link to='/Contact'>Contact</Link>
//          <Link to='/About'>About</Link>
//         </nav>
//         <Routes>
//           <Route path='/' element={<Home/>}></Route>
//           <Route path='/Contact' element={<Contact/>}></Route>
//           <Route path='About' element={<About/>}></Route>
//           <Route path='*' element={<h1>No Page Found</h1>}></Route>
//             </Routes></Router>
//             }
      
//     </div>
//   );
// }

// // export default App;
// import React from "react";
// import { BrowserRouter, Route, Routes,Switch } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// // import Consulting from "./pages/Consulting";
// // import Contactus from "./pages/Contactus";
// // import Design from "./pages/Design";
// // import Development from "./pages/Development";
// // import Marketing from "./pages/Marketing";
// // import Products from "./pages/Products";
// // import Services from "./pages/Services";
// // import Signup from "./pages/Signup";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         {/* <Navbar /> */}
//         <Routes>
//           <Route path="/"component={Home}></Route>
//           </Routes>
//           {/* <Route path="/contactus" component={Contactus}></Route>
//           <Route path="/products" component={Products}></Route> */}
//           {/* <Route path="/services" component={Services}></Route>
//           <Route path="/signup" component={Signup}></Route>
//           <Route path="/marketing" component={Marketing}></Route>
//           <Route path="/development" component={Development}></Route>
//           <Route path="/design" component={Design}></Route>
//           <Route path="/consulting" component={Consulting}></Route> */}
       
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;