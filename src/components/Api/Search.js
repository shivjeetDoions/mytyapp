import React from "react";

function Search() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
  //     result.json().then((resp) => {
  //       //  console.warn("result",resp)
  //       setData(resp);
  //     });
  //   });
  // }, []);
  // console.warn(data);
  return (
    <div>
      {/* <h1>Get API Call</h1>
      <table>
        <tr>
          <td>userId</td>
          <td>ID</td>
          <td>Title</td>
          <td>completed</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{JSON.stringify(item.completed)}</td>
          </tr>
        ))}
      </table> */}
      <div className="container">
        <div class="input-group mb-3 mt-5 p-0 m-0">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your domain name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <span
              class="input-group-text bg-danger text-white px-5"
              id="basic-addon2"
            >
              Search
            </span>
          </div>
        </div>

        <div class="d-flex align-content-center border">
          <div class="p-2  flex-grow-1">yourname1.myty.in</div>
          <div class="p-2 ">
            <button className="btn Explore_btn text-end fw-bold text-end">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
