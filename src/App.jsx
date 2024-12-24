// Functional Component Version

// import React, { useState, useEffect } from "react";
// import "./App.css";

// const AppFunctional = () => {
//   const [person, setPerson] = useState({
//     fullName: "John Doe",
//     bio: "A passionate web developer.",
//     imgSrc: "https://i.pinimg.com/736x/4b/bc/5c/4bbc5c7f9365f56b36f3806bb40a1b9a.jpg",
//     profession: "Software Engineer",
//   });

//   const [show, setShow] = useState(false);
//   const [timeInterval, setTimeInterval] = useState(0);

//   useEffect(() => {
//     const startTime = Date.now();
//     const interval = setInterval(() => {
//       setTimeInterval(Math.floor((Date.now() - startTime) / 1000));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
//       <button 
//         onClick={() => setShow(!show)} 
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
//       >
//         {show ? "Hide" : "Show"} Profile
//       </button>
//       {show && (
//         <div className="profile p-6 border rounded shadow-lg bg-white">
//           <img 
//             src={person.imgSrc} 
//             alt={person.fullName} 
//             className="w-24 h-24 rounded-full mx-auto mb-4"
//           />
//           <h2 className="text-xl font-semibold text-center mb-2">{person.fullName}</h2>
//           <p className="text-center mb-2">{person.bio}</p>
//           <h3 className="text-center text-gray-600">{person.profession}</h3>
//         </div>
//       )}
//       <p className="mt-4 text-gray-500">Time since mount: {timeInterval} seconds</p>
//     </div>
//   );
// };

// export default AppFunctional;




// src/App.jsx

import React, { Component } from "react";
import "./App.css";

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jane Doe",
        bio: "A creative graphic designer.",
        imgSrc: "https://i.pinimg.com/736x/52/ca/49/52ca49ba08c6c14ed904a5d577a98a19.jpg",
        profession: "Graphic Designer",
      },
      shows: false,
      timeInterval: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    const startTime = Date.now();
    this.interval = setInterval(() => {
      this.setState({
        timeInterval: Math.floor((Date.now() - startTime) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <button
          onClick={this.toggleShow}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          {shows ? "Hide" : "Show"} Profile
        </button>
        {shows && (
          <div className="profile p-6 border rounded shadow-lg bg-white">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center mb-2">{person.fullName}</h2>
            <p className="text-center mb-2">{person.bio}</p>
            <h3 className="text-center text-gray-600">{person.profession}</h3>
          </div>
        )}
        <p className="mt-4 text-gray-500">Time since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default AppClass;

