import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css"; //importing css style
import Notes from "./Notes/Notes";
import { NavLink } from "react-router-dom";

const About = () => {
	const [members, setMembers] = useState([]);
	useEffect(() => {
		fetch("./notes.json")
			.then((res) => res.json())
			.then((data) => setMembers(data));
	}, []);
	return (
		<main>
			<section className="about">
				<div className="about-header">
					<h1>
						<span className="heading-about-primary">Improving Lives</span>{" "}
						<br />
						<span className="heading-about-secondary">Through Learning..</span>
					</h1>
				</div>
				<div className="about-team container py-5">
					<h2 className="text-center mb-3 pb-2">Notes by our faculty</h2>
					<hr className="line" />
					<Row xs={1} md={4} className="g-3">
						{members.map((member) => (
							<Col>
								<NavLink to="/notes">
									<Notes key={member.id} member={member}></Notes>
								</NavLink>
							</Col>
						))}
					</Row>
				</div>
			</section>
		</main>
	);
};

export default About;
