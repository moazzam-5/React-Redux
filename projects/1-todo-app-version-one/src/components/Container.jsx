function Container(props) {
  return (
    <>
      <div className="mt-5 text-center bg-info">{props.children}</div>
    </>
  );
}

export default Container;
