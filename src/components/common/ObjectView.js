function ObjectView(props) {
  const { objs, boxStyle = {} } = props;

  return (
    <div style={boxStyle}>
      {objs.map((elem) => (
        <div className="dsp-flex" key={elem.key}>
          <div>{elem.key}:</div>
          <div className="mr-l-1r">{elem.value}</div>
        </div>
      ))}
    </div>
  );
}

export default ObjectView;
