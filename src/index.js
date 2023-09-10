// // import React from "react";
// import ReactDOM from "react-dom/client";
// // import "./index.css";
// import App from './App';
// import user from './user.json';


// // const paragraph = React.createElement('p', { id: 'test-p-id', children: ['I am p'] })

// // const p = <p>I am p</p>;
// // const div = React.createElement('div', {
// //   name: 'main',
// //   id: 'test-id',
// //   className: 'test-name',
// //   children: p,
// // });

// // const div = (
// //   <div name="main" id="test-id" className="test-class">
// //     {p}
// //   </div>
// // );


// function Profile(props) {
//   return (<div className="profile">
//     <div className="description">
//       <img
//         src={props.avatar}
//         alt={props.username}
//         className="avatar"
//       />
//       <p className="name">{props.username}</p>
//       <p className="tag">{props.tag}</p>
//       <p className="location">{props.location}</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">1000</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">2000</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">3000</span>
//       </li>
//     </ul>
//   </div>);
// }



// ReactDOM.render(<Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />,
//   document.getElementById("root"))

  import React from "react";
import ReactDOM from "react-dom/client";

// // import "./index.css";
import App from './App';




// ReactDOM.render(<App />, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);