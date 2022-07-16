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
  } = props;
  return (
    <Card>
      <CardContent>
        {!!imageUrl && (
          <div>
            <img src={imageUrl} alt={imgAlt}></img>
          </div>
        )}
        <div className="title">{title}</div>
        <div>{children}</div>
      </CardContent>
      <CardActions className="dsp-flex justify-content-end">
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
