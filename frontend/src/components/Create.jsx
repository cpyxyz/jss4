const { useState } = require("react");

function Create(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [ssn, setSSN] = useState("");

  async function handle(e) {
    e.preventDefault();
    const emp = {
      ssn: ssn,
      name: name,
      age: age,
      email: email,
    };
    const response = await fetch("http://localhost:8000/emp", {
      method: "post",
      body: JSON.stringify(emp),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (response.ok) {
      props.fetctData();
      setSSN("");
      setEmail("");
      setName("");
      setAge("");
    }
  }

  return (
    <div>
      <form>
        SSN
        <input
          type="text"
          name="ssn"
          id="ssn"
          onChange={(e) => setSSN(e.target.value)}
          value={ssn}
        />
        Name
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        Age
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        Email
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button onClick={handle}>Submit</button>
      </form>
    </div>
  );
}

export default Create;
