import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/Notes/About";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";
import SingleCourseDetails from "./Pages/SingleCourseDetails/SingleCourseDetails";
import CheckOut from "./Components/CheckOut/CheckOut";
import Notes from "./Pages/Notes/Notes/NotePages";
import Thanks from "./Pages/Contact/Thanks";

const override = css``;

function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{loading ? (
				<div className="animation-box">
					<ClockLoader
						loading={loading}
						size={50}
						color="#f7d919"
						css={override}
					/>
				</div>
			) : (
				<div>
					<Router>
						<Header />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/home">
								<Home />
							</Route>
							<Route path="/courses">
								<Courses />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="/courseDetails/:courseId">
								<SingleCourseDetails />
							</Route>
							<Route path="/checkout">
								<CheckOut />
							</Route>
							<Route path="/notes">
								<Notes />
							</Route>
							<Route path="/thanks">
								<Thanks />
							</Route>
						</Switch>
						<Footer />
					</Router>
				</div>
			)}
		</>
	);
}

export default App;
