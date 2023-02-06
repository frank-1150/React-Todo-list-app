function App(props) {
  const [data, setData] = useState("");
  const [newName, setNewName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [post, setPost] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users";
  const getData = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(
        response.data.map((person, i) => (
          <div key={i}>
            <h2>{person.employee}</h2>
            <p>{person.department}</p>
          </div>
        ))
      );
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${newName}`);
    axios
      .post(url, {
        employee: newName,
        department: newDepartment,
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  return (
    <div className="App">
      {data}
      <div>
        <h2>New employee</h2>
        <form onSubmit={handleSubmit}>
          <label className="inputBox">
            Name:
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <label className="inputBox">
            Department:
            <input
              type="text"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
