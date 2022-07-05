import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function CommonCard(props) {
  const { title, imageUrl,imgAlt, children } = props;
  return (
    <Card className="card">
      <CardContent>
        {!!imageUrl && (
          <div>
            <img src={imageUrl} alt={imgAlt}></img>
          </div>
        )}
        <div className="title">{title}</div>
       <div>{children}</div>
      </CardContent>
    </Card>
  );
}

export default CommonCard;
