import React, { useState } from "react";

function Search() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [avl, setAvl] = useState();
  // const [unavl, setUnavl] = useState();

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullName(name);
    // console.log(name);

    console.log(
      "string concatenation",
      "https://mytym.in/api/domain/findby/" + name
    );

    fetch("https://mytym.in/api/domain/findby/" + name)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result === null) {
          setAvl(
            <div>
              <p className="fw-bold">
                .myty.in is <span className="text-success">avilable</span>
              </p>
              <div className="d-grid gap-2 d-flex justify-content-between align-items-center">
                <p>Register it now before anyone else.</p>
                <button type="button" class="Explore_btn fw-bold px-5 py-1">
                  Get Started
                </button>
              </div>
            </div>
          );
        } else {
          setAvl(
            <div>
              <p className="fw-bold">
                .myty.in is <span className="text-danger">unavilable</span>
              </p>
            </div>
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div class="input-group mb-3 mt-5 p-0 m-0">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your domain name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={inputEvent}
            value={name}
          />
          <span
            class="input-group-text px-5 bg-danger text-white"
            id="basic-addon2"
            onClick={onSubmit}
          >
            Search
          </span>
          {/* <button onClick={onSubmit}>click me</button> */}
        </div>
        <div>
          <span className="fw-bold">{fullName}</span>
          {avl}
        </div>
      </div>
    </>
  );
}

export default Search;
