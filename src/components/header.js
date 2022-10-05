import styled from "styled-components";
import { defColor } from "../def";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
	display: flex;
	align-items: center;

	background: ${defColor.grey};
	padding: 0 1rem;
	height: 70px;
	position: fixed;
	width: calc(100% - 2rem);
	z-index: 1;
	.mobile {
		display: none;
	}

	.desktop {
		display: flex;
		justify-content: space-between;
		width: 100%;

		div:first-child {
			h2 {
				font-weight: 600;
			}
			display: flex;
			align-items: center;
			grid-gap: 3rem;
			ul {
				display: flex;
				li {
					margin: auto 1rem;
					font-size: 18px;
					font-weight: 400;

					&:hover {
						color: ${defColor.red};
					}
				}
			}
		}

		div:last-child {
			display: flex;
			align-items: center;
			div {
				border: 1px solid rgba(155, 155, 155, 0.2);
				display: flex;

				input {
					padding: 0.5rem;
					font-size: 18px;
					font-weight: 500;
				}

				input {
					color: #fff;
					font-size: 18px;
				}

				i {
					font-size: 16px;
				}

				button {
					background: ${defColor.red};
					height: 45px;
					width: 45px;
					border: 1px solid ${defColor.red};
				}
			}
		}
	}

	@media (max-width: 900px) {
		.desktop {
			display: none;
		}

		.mobile {
			display: flex;
			justify-content: space-between;
			width: 100%;

			i {
				font-size: 18px;
			}
		}
	}
`;

export const Header = () => {
	return (
		<Wrapper>
			<div className="desktop">
				<div>
					<h2>Nepal</h2>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<li>Account</li>
						<li>Contact</li>
						<li>About</li>
					</ul>
				</div>

				<div>
					<div>
						<input placeholder="Search" />
						<button>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>
				</div>
			</div>

			<div className="mobile">
				<button>
					<i className="fa-solid fa-bars"></i>
				</button>
				<h2>Nepal</h2>
				<button>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</Wrapper>
	);
};
