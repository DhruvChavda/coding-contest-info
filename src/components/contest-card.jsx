import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 240,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(2.5)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ContestCard = ({ contest }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                {contest.status === "CODING" && (
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <span style={{ color: "green" }}>{bull} Live</span>
                    </Typography>
                )}
                <Typography variant="h6" component="h2">
                    <b>{contest.name}</b>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    ({contest.site})
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    <b>Duration (Dates)</b>
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Duration: &nbsp;
                    <b>
                        {Number(contest.duration) / 3600 < 24 &&
                            `${(Number(contest.duration) / 3600).toFixed(2)} Hour(s)`}
                        {Number(contest.duration) / 3600 >= 24 &&
                            `${(Number(contest.duration) / (3600 * 24)).toFixed(2)} Day(s)`}
                    </b>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" href={contest.url} target="blank">
                    Contest Link
                </Button>
            </CardActions>
        </Card>
    );
};

export default ContestCard;
