import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleCourseDetails.css";
import { Row, Col, Button } from "react-bootstrap";

const SingleCourseDetails = () => {
	const { courseId } = useParams();
	const [singlecourse, setCourse] = useState([]);

	useEffect(() => {
		fetch("/courses.json")
			.then((res) => res.json())
			.then((data) => {
				setCourse(data);
			});
	}, []);

	const filteredCourse = singlecourse.filter(
		(allData) => allData.id == courseId
	);
	console.log(singlecourse);

	return (
		<div className="singleCourse">
			<div className="inside_container">
				<Row>
					<Col sm={12} md={6}>
						<div className="leftSide">
							<img src={filteredCourse[0]?.img} alt="" />
						</div>
					</Col>
					<Col sm={12} md={6}>
						<div className="rightside  p-5">
							<h3>Header:{filteredCourse[0]?.courseTitle}</h3>
							<h4>${filteredCourse[0]?.price}</h4>
							<p>
								Web development is the work involved in developing a website for
								the Internet or an intranet. Web development can range from
								developing a simple single static page of plain text to complex
								web applications, electronic businesses, and social network
								services.
							</p>
							<Link to="/checkout">
								<Button type="submit" style={{ backgroundColor: "#1C2A44" }}>
									Enroll Now
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default SingleCourseDetails;
