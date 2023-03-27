function Employee(props) {
  async function deleteEmp(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/emp/${props.ssn}`, {
      method: "delete",
    });
    if (response.ok) {
      props.fetchData();
    }
  }

  return (
    <div>
      <p>
        <strong>Name:</strong>
        {props.name}
      </p>
      <p>SSN:{props.ssn}</p>
      <p>Age:{props.age}</p>
      <p>Email:{props.email}</p>
      <button onClick={deleteEmp}>Delete</button>
      <hr />
    </div>
  );
}

export default Employee;
