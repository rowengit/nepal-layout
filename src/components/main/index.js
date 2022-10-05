import styled from "styled-components";
import { defColor } from "../../def";
import { Top } from "./top";
import pexels01 from "../../img/pexels-01.jpg";
import pexels02 from "../../img/pexels-02.jpg";
import pexels03 from "../../img/pexels-03.jpg";

import person01 from "../../img/pexels-person-01.jpg";
import person02 from "../../img/pexels-person-02.jpg";
import person03 from "../../img/pexels-person-03.jpg";

const Wrapper = styled.main`
	.what-we-do {
		> div:nth-child(2) {
			margin: 2rem 0;
			padding: 0 2rem;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
			grid-gap: 2rem;
			width: calc(100% - 4rem);

			img {
				max-width: 100%;
				object-fit: contain;
				width: fit-content;
			}
		}

		> div:nth-child(3) {
			display: grid;
			grid-template-columns: repeat(
				auto-fill,
				minmax(300px, max-content)
			);
			justify-content: center;
			grid-gap: 1rem;

			> div {
				display: grid;
				grid-template-columns: 30px 1fr;
				grid-gap: 1rem;

				span {
					text-align: right;
					color: ${defColor.red};
					font-size: 30px;
				}

				h3 {
					line-height: 30px;
					font-size: 18px;
					text-align: left;
				}

				p {
					font-size: 14px;
					text-align: left;
				}
			}

			@media (min-width: 1200px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}

	.who-are-we {
		padding: 3rem 2rem 2rem;
		> div {
			&:first-child {
				margin-bottom: 2rem;
			}
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 2rem;
			text-align: left;
			position: relative;

			.img03 {
				background-image: url(${pexels03});
				background-attachment: fixed;
				background-position: left center;
				background-repeat: no-repeat;
				background-size: cover;

				height: 300px;
			}

			p {
				text-align: left;
				margin-bottom: 1rem;
			}

			button {
				font-family: "Poppins", sans-serif;
				font-size: 14px;
				line-height: 3;
				background: black;
				color: white;
				padding: 0 2rem;
			}

			h2 {
				text-align: center;
			}

			@media (max-width: 900px) {
				grid-template-columns: none;

				.img03 {
					background-position: left -6rem center;

					&.second {
						display: none;
					}
				}
			}
		}
	}

	.our-team {
		background: black;

		> section {
			display: flex;
			overflow: scroll;
			justify-content: center;
			grid-gap: 2rem;

			> div {
				margin: 2rem 0;
				border: 1px solid grey;
				border-radius: 8px;
				padding: 1rem;
				h3,
				p {
					margin: 1rem 0;
				}

				a {
					margin: 0.5rem;
				}

				img {
					height: 200px;
					width: 200px;
					border-radius: 100%;
					object-fit: cover;
				}
			}

			@media (max-width: 900px) {
				justify-content: left;
			}
		}
	}
`;

export const Main = () => {
	return (
		<Wrapper>
			<Top />
			<section className="what-we-do">
				<h2>What We Do.</h2>
				<div>
					<img src={pexels01} alt="pexels01" />
					<img src={pexels02} alt="pexels02" />
				</div>
				<div>
					<div>
						<span>01.</span>
						<div>
							<h3>Creativity</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s.{" "}
							</p>
						</div>
					</div>
					<div>
						<span>02.</span>
						<div>
							<h3>Creativity</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s.{" "}
							</p>
						</div>
					</div>
					<div>
						<span>03.</span>
						<div>
							<h3>Creativity</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s.{" "}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="who-are-we">
				<div>
					<div>
						<h2>Who Are We</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged.
						</p>
						<button>Continue Reading</button>
					</div>
					<div className="img03"></div>
				</div>
				<div>
					<div className="img03 second"></div>
					<div>
						<h2>What We Do</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged.
						</p>
						<button>Continue Reading</button>
					</div>
				</div>
			</section>
			<section className="our-team">
				<h1>Our Team</h1>
				<section>
					<div>
						<img src={person01} alt="person01" />
						<h3>Briana Tozour</h3>
						<p>Grpahic Designer</p>
						<div className="social-media">
							<a href="#" className="fb">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a href="#" className="twitter">
								<i className="fa-brands fa-twitter"></i>
							</a>
							<a href="#" className="ig">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="#" className="yt">
								<i className="fa-brands fa-youtube"></i>
							</a>
						</div>
					</div>
					<div>
						<img src={person02} alt="person02" />
						<h3>Mike Herrera</h3>
						<p>Frontend Developer</p>
						<div className="social-media">
							<a href="#" className="fb">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a href="#" className="twitter">
								<i className="fa-brands fa-twitter"></i>
							</a>
							<a href="#" className="ig">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="#" className="yt">
								<i className="fa-brands fa-youtube"></i>
							</a>
						</div>
					</div>
					<div>
						<img src={person03} alt="person03" />
						<h3>Julia Nichols</h3>
						<p>Backend Developer</p>
						<div className="social-media">
							<a href="#" className="fb">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a href="#" className="twitter">
								<i className="fa-brands fa-twitter"></i>
							</a>
							<a href="#" className="ig">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="#" className="yt">
								<i className="fa-brands fa-youtube"></i>
							</a>
						</div>
					</div>
				</section>
			</section>
		</Wrapper>
	);
};
