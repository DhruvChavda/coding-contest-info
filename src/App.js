import "./App.css";
import { Component } from "react";
import SearchAppBar from "./components/app-bar";
import ContestList from "./components/contest-list";
import { Typography } from "@material-ui/core";
import Footer from "./components/footer";

class App extends Component {
    constructor() {
        super();
        this.state = { data: [], searchField: "", selectField: "" };
    }
    componentDidMount() {
        fetch("https://kontests.net/api/v1/all")
            .then((res) => res.json())
            .then((contests) => this.setState({ data: contests }))
            .catch((err) => console.log(err));
    }

    render() {
        const selectFilteredContest = this.state.data.filter((contest) =>
            contest.site.toLowerCase().includes(this.state.selectField.toLocaleLowerCase())
        );

        const searchFilteredContest = selectFilteredContest.filter((contest) =>
            contest.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        );

        const contestIn24 = searchFilteredContest.filter((contest) => contest.in_24_hours === "Yes");
        const notIn24 = searchFilteredContest.filter((contest) => contest.in_24_hours === "No");
        return (
            <div className="App">
                <SearchAppBar
                    handleChange={(e) => this.setState({ searchField: e.target.value })}
                    handleClick={(e) => {
                        let selectVal = "";
                        if (e.target.innerText !== "All") selectVal = e.target.innerText;
                        this.setState({ selectField: selectVal });
                    }}
                />
                {contestIn24.length !== 0 && (
                    <div style={{ textAlign: "center", padding: "5px", margin: "10px" }}>
                        <Typography variant="h3" color="textSecondary">
                            <b>Within 24 Hours</b>
                        </Typography>
                    </div>
                )}
                <ContestList contests={contestIn24} />
                {notIn24.length !== 0 && (
                    <div style={{ textAlign: "center", padding: "5px", margin: "10px" }}>
                        <Typography variant="h4" color="textSecondary">
                            <b>Other Upcoming Contests</b>
                        </Typography>
                    </div>
                )}
                <ContestList contests={notIn24} />
                {this.state.data.length!==0 && <Footer/>}
            </div>
        );
    }
}

export default App;
