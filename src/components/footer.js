import styled from "styled-components";
import { defColor } from "../def";

const Wrapper = styled.footer`
	> section {
		background: ${defColor.lightGrey};

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, max-content));
		grid-gap: 2rem;

		padding: 2rem;

		@media (min-width: 1200px) {
			grid-template-columns: repeat(4, 1fr);
		}

		p,
		li,
		span,
		i,
		label {
			color: ${defColor.font};
			font-size: 14px;
		}

		.footer-title {
			margin: 20px 0;
			border-left: 2px solid red;
			padding: 0 1rem;
			font-size: 18px;
			text-transform: uppercase;
		}

		p {
			margin: 1rem 0;
		}

		.social-media {
			justify-content: left;
			i {
				color: white;
				font-size: 18px;
			}
		}

		section {
			&:first-child {
				> div {
					margin: 0.5rem 0;
					span:first-child {
						display: inline-block;
						width: 32px;
						height: 32px;
					}
				}
			}

			&:nth-child(2) {
				ul {
					li {
						border-bottom: 1px solid rgba(255, 255, 255, 0.3);
						line-height: 40px;
					}
				}
			}

			&:nth-child(4) {
				> div {
					display: flex;
					flex-direction: column;

					input,
					textarea {
						border-radius: 8px;
						background: white;
						font-size: 14px;
						padding: 0.5rem 0.75rem;
					}

					input {
						margin: 0.75rem 0;
						line-height: 2;
					}

					textarea {
						margin: 0.75rem 0;
						line-height: 2;
					}
				}

				button {
					margin-top: 0.5rem;
					color: ${defColor.green};
					background: ${defColor.bgDark};
					border: 2px solid ${defColor.green};
					border-radius: 8px;
					width: 100%;
					font-size: 16px;
					padding: 0.5rem 2rem;
				}
			}
		}
	}

	> p {
		text-align: center;
		color: ${defColor.font};
		line-height: 3;
		font-size: 14px;
	}
`;

export const Footer = () => {
	return (
		<Wrapper>
			<section>
				<section>
					<h2>Nepal</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quod error enim laudantium, animi veniam libero
						eveniet.
					</p>
					<div>
						<span>
							<i className="fa-solid fa-location-dot"></i>
						</span>
						<span>Kathmandu,Nepal</span>
					</div>
					<div>
						<span>
							<i className="fa-solid fa-phone"></i>
						</span>
						<span>+999-9999999999</span>
					</div>
					<div>
						<span>
							<i className="fa-regular fa-envelope"></i>
						</span>
						<span>abc@example.com</span>
					</div>
				</section>
				<section>
					<h3 className="footer-title">Nepal</h3>
					<ul>
						<li>Event</li>
						<li>Support</li>
						<li>Hosting</li>
						<li>Blog</li>
						<li>Design</li>
					</ul>
				</section>
				<section>
					<h3 className="footer-title">Follow us</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quod error enim laudantium, animi veniam libero
						eveniet.
					</p>
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
				</section>
				<section>
					<h3 className="footer-title">Contact Us</h3>
					<div>
						<label>Email*</label>
						<input />
					</div>
					<div>
						<label>Message*</label>
						<textarea />
					</div>
					<button>Send</button>
				</section>
			</section>
			<p>All Copyrights Reserved.</p>
		</Wrapper>
	);
};
