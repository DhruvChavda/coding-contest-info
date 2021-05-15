import { Grid } from "@material-ui/core";
import React from "react";
import ContestCard from "./contest-card";

const ContestList = ({ contests }) => {
    return (
        <div style={{ margin: "10px" }}>
            <Grid container spacing={2} justify="center">
                {contests.map((contest, ind) => {
                    return (
                        <Grid item lg={3} md={4} sm={6} xs={11} key={ind}>
                            {/* {console.log(contest)} */}
                            <ContestCard contest={contest} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default ContestList;
