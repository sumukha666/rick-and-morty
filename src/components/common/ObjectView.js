function ObjectView(props) {
  const { objs } = props;

  return (
    <>
      {objs.map((elem) => (
        <div className="dsp-flex" key={elem.key}>
          <div>{elem.key}:</div>
          <div className="mr-l-1r">{elem.value}</div>
        </div>
      ))}
    </>
  );
}

export default ObjectView;
