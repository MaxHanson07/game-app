function ListGroup() {
  const items = ["New York", "Seattle", "San Francisco", "London", "Paris"];
  let selectedIndex = 0;

  return (
    <>
      <h1>List</h1>
      { items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className={"list-group-item" }key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
