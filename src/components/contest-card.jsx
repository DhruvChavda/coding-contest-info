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

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}

function dateTimeStr(s) {
    let datStr = s.slice(0, 10);
    const date = datStr.split("-");
    let timStr = s.slice(11, 19);
    const time = timStr.split(":");
    return [...date, ...time];
}

const ContestCard = ({ contest }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [year, month, dat, hh, mm, ss] = dateTimeStr(contest.start_time);
    const conDate = convertTZ(`${year}/${month}/${dat} ${hh}:${mm}:${ss} +0000"`, "Asia/Calcutta");

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
                    On{" "}
                    <b>
                        {conDate.toLocaleString("en-IN", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                        })}
                    </b>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Starts at{" "}
                    <b>
                        {conDate.toLocaleString("en-IN", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}
                    </b>
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Duration: &nbsp;
                    <b>
                        {Number(contest.duration) / 3600 < 24 &&
                            `${(Number(contest.duration) / 3600).toFixed(2)} Hour(s)`}
                        {Number(contest.duration) / 3600 >= 24 &&
                            Number(contest.duration) / (3600 * 24) <= 31 &&
                            `${(Number(contest.duration) / (3600 * 24)).toFixed(2)} Day(s)`}
                        {Number(contest.duration) / (3600 * 24) > 31 && `> 1 Month`}
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
