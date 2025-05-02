// App.js
import React from "react";

function App() {
  const sendData = async () => {
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch("https://webhook.site/3dd5ac42-fa83-4304-a45a-a0234c1294df", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // ✅ Displaying the sent data
      console.log("Sent JSON:");
      console.log(JSON.stringify(data));

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}

export default App;
