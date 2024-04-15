function Display({ item }) {
  return (
    <>
      <div className="d-flex gap-5">
        <p className="w-50">name:{item.name}</p>
        <p className="w-50">date:{item.date}</p>
      </div>
    </>
  );
}

export default Display;
