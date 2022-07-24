function ObjectView(props) {
  const { objs, objStyle = { box: {}, key: {} } } = props;

  return (
    <div style={objStyle.box}>
      {objs.map((elem) => (
        <div className="dsp-flex" key={elem.key}>
          <div style={objStyle.key} className="font-bold">{elem.key}:</div>
          <div className="mr-l-1r">{elem.value}</div>
        </div>
      ))}
    </div>
  );
}

export default ObjectView;
