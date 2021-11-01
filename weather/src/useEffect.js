// import React, { useEffect, useState } from "react";
// import "./index.css";

// const Api = () => {
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//     // console.log(response);
//     // const data = await response.json();
//     setUsers(await response.json());
//     // console.log(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div>
//       <h2>List of GitHub users</h2>
//       <div className="container">
//         <div className="row text-center">
//           {users.map(element => {
//             return (
//               <div className="col-10 col-md-4 mt-5" key={element.id}>
//                 <div class="card p-2">
//                   <div class="d-flex align-items-center">
//                     <div class="image">
//                       <img
//                         src={element.thumbnailUrl}
//                         className="rounded"
//                         width="155"
//                       />
//                     </div>
//                     <div class="ml-3 w-100">
//                       <h4 className="mb-0 mt-0 textLeft">thapa</h4>

//                       <span className="textLeft">{element.title}</span>
//                       <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats"></div>
//                       <div className="d-flex flex-column">
//                         <span className="articles">Articles</span>{" "}
//                         <span className="number1">38</span>{" "}
//                       </div>
//                       <div className="d-flex flex-column">
//                         <span className="followers">Followers</span>{" "}
//                         <span className="number2">980</span>{" "}
//                       </div>
//                       <div className="d-flex flex-column">
//                         <span className="rating">Rating</span>{" "}
//                         <span className="number3">8.9</span>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Api;
