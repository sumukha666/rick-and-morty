function ObjectView(props) {
  const { objs, objStyles = { box: {}, key: {} } } = props;

  return (
    <div style={objStyles.box}>
      {objs.map((elem) => (
        <div className="dsp-flex" key={elem.key}>
          <div style={objStyles.key} className="font-bold">
            {elem.key}:
          </div>
          <div className="mr-l-1r">{elem.value}</div>
        </div>
      ))}
    </div>
  );
}

export default ObjectView;
