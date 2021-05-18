import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    root: { marginTop: "20px", marginBottom: "10px" },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="subtitle1" color="textSecondary" className={classes.root}>
                Made with ❤ by{" "}
                <b>
                    <Link color="textSecondary" href="https://dhruvchavda.github.io/me/" target="blank">
                        DMC
                    </Link>
                </b>
            </Typography>
        </div>
    );
};

export default Footer;
