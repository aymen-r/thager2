import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 200,
  // },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    height: 250,
    width: 250,
  },
  actions: {
    justifyContent: "space-between",
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card>
      <CardContent>
        <img className={classes.image} src="/img-1.jpg" alt="" />
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small">Add to Cart</Button>
        <Button size="small">Document</Button>
      </CardActions>
    </Card>
  );
}
