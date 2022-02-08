import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA";
function Search() {
  const [searchTerm, setsearchTerm] = useState("");
  const [Success, setSuccess] = useState("");
  const [Link, setLink] = useState("");
  return (
    <div className="container">
      <div class="input-group mb-3 mt-5 p-0 m-0">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your domain name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(event) => {
            setsearchTerm(event.target.value);
            setSuccess(true);
            setLink(event.target.value);
          }}
        />
        <span
          class="input-group-text px-5 bg-danger text-white"
          id="basic-addon2"
        >
          Search
        </span>
      </div>
      {Success ? (
        <div class="d-flex align-content-center border">
          <div class="p-2  flex-grow-1">
            {JSONDATA.filter((val) => {
              if (searchTerm === "") {
                setSuccess(false);
              } else if (
                val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val, key) => {
              return (
                <div key={key}>
                  <p>{val.first_name}</p>
                </div>
              );
            })}
          </div>
          <div class="p-2 ">
            <button
              className="btn Explore_btn text-end fw-bold text-end"
              onClick={() => {
                <Link target="_blank" href={searchTerm}></Link>;
              }}
            >
              Select
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

// function Search() {
//   return (
//     <div>
//       <div className="container">
//         <div class="input-group mb-3 mt-5 p-0 m-0">
//           <input
//             type="text"
//             class="form-control"
//             placeholder="Enter your domain name"
//             aria-label="Recipient's username"
//             aria-describedby="basic-addon2"
//           />
//           <div class="input-group-append">
//             <span
//               class="input-group-text bg-danger text-white px-5"
//               id="basic-addon2"
//             >
//               Search
//             </span>
//           </div>
//         </div>

//         <div class="d-flex align-content-center border">
//           <div class="p-2  flex-grow-1">yourname1.myty.in</div>
//           <div class="p-2 ">
//             <button className="btn Explore_btn text-end fw-bold text-end">
//               Select
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Search;
