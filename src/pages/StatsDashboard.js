import React, { useEffect } from "react";

function StatsDashboard() {
  // const trythis = () => {
  //     fetch('  https://api.github.com/', {
  //         method: 'GET',
  //         headers: {
  //             access_token: 'token ,
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //             "Access-Control-Allow-Headers": "Content-type"
  //         }
  //     })
  //         .then(response => response.json())
  //         .then(data => data.map())
  // }

  // useEffect(() => {
  //     fuckthiss()
  // }, [])
  async function fuckthiss() {
    const url = "https://api.github.com/users/tecdef";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  }

  return (
    <div>
      <button onClick={fuckthiss}>click me</button>
      {/* <a href="https://wakatime.com"><img src="https://wakatime.com/share/@tecdef/49aeae99-cd56-4ccf-bed5-46ebaf003eb0.png" /></a> */}
    </div>
  );
}

export default StatsDashboard;
