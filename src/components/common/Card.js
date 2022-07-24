import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardActions } from "@material-ui/core";

function CustomCard(props) {
  const {
    title,
    imageUrl,
    imgAlt,
    children,
    leftBtn = {},
    rightBtn = {},
    imgStyle={}
  } = props;
  return (
    <Card>
      <CardContent>
        {!!imageUrl && (
          <div>
            <img src={imageUrl} alt={imgAlt} className="wd-100 temp-img" style={imgStyle}></img>
          </div>
        )}
        <div className="title">{title}</div>
        <div>{children}</div>
      </CardContent>
      <CardActions className="dsp-flex justify-content-end mr-t-1r">
        {leftBtn.required && (
          <button className="btn-secondary" onClick={leftBtn.onClick}>
            {leftBtn.label}
          </button>
        )}
        {rightBtn.required && (
          <button className="btn-primary" onClick={rightBtn.onClick}>
            {rightBtn.label}
          </button>
        )}
      </CardActions>
    </Card>
  );
}

export default CustomCard;