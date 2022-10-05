import { useState } from "react";
import styled from "styled-components";
import { defColor } from "../../def";
import brand01 from "../../img/pexels-brand-01.jpg";
import design01 from "../../img/pexels-design-01.jpg";
import design02 from "../../img/pexels-design-02.jpg";
import graphic01 from "../../img/pexels-graphic-01.jpg";

import person01 from "../../img/pexels-person-01.jpg";
import person02 from "../../img/pexels-person-02.jpg";
import person03 from "../../img/pexels-person-03.jpg";

const defCategory = {
	brand: "brand",
	design: "design",
	graphic: "graphic"
};

const defProducts = [
	{
		category: defCategory.brand,
		img: brand01
	},
	{
		category: defCategory.design,
		img: design01
	},
	{
		category: defCategory.design,
		img: design02
	},
	{
		category: defCategory.graphic,
		img: graphic01
	}
];

const Wrapper = styled.main`
	.gallery {
		ul {
			background: ${defColor.black};
			height: 48px;
			border-radius: 8px;
			margin: 1rem 1rem 2rem;
			display: flex;
			justify-content: center;
			li {
				margin: auto 0.5rem;
				min-width: 84px;
				line-height: 2;

				&.active {
					background: ${defColor.red};
				}
			}
		}

		div {
			padding: 0 1rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 1rem 2rem;
			img {
				width: 100%;
			}
		}

		@media (max-width: 900px) {
			div {
				grid-template-columns: repeat(2, 1fr);
			}
		}

		@media (max-width: 400px) {
			ul {
				overflow: scroll;
				justify-content: left;
				margin: 1rem 0rem 2rem;
			}

			div {
				grid-template-columns: none;
			}
		}
	}

	.review {
		width: 80%;
		margin: auto;
		margin-bottom: 2rem;
		background: ${defColor.black};

		@media (max-width: 900px) {
			overflow: scroll;
		}

		> section {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			align-items: center;
			justify-content: center;

			grid-gap: 1rem;
			width: 80%;
			margin: auto;
			min-width: 790px;

			div {
				margin: auto;
				background: white;
				max-width: 260px;
				img {
					width: 100%;
					height: 300px;
					object-fit: cover;
					display: block;
				}

				.info {
					margin: auto;
					padding: 1rem;
					text-align: left;
					h3,
					h4 {
						color: ${defColor.btnRed};
					}

					h3 {
						line-height: 2;
						font-weight: 500;
					}

					h4 {
						font-weight: 600;
					}

					p {
						margin: 1rem 0;
						color: ${defColor.black};
					}

					button {
						background: ${defColor.btnRed};
						color: white;
						font-size: 14px;
						padding: 0.5rem 1rem;
						border-radius: 8px;
					}
				}
			}
		}
	}
`;

export const Profile = () => {
	const [category, setCategory] = useState(null);
	const rows = defProducts
		.filter(d => !category || d.category === category)
		.map((d, dIdx) => <img key={dIdx} src={d.img} alt={d.category} />);

	return (
		<Wrapper>
			<section className="gallery">
				<h2>Our Gallery</h2>
				<ul>
					<li
						className={category ? "" : "active"}
						onClick={() => setCategory(null)}>
						All
					</li>
					<li
						className={
							category === defCategory.brand ? "active" : ""
						}
						onClick={() => setCategory(defCategory.brand)}>
						Brand
					</li>
					<li
						className={
							category === defCategory.design ? "active" : ""
						}
						onClick={() => setCategory(defCategory.design)}>
						Design
					</li>
					<li
						className={
							category === defCategory.graphic ? "active" : ""
						}
						onClick={() => setCategory(defCategory.graphic)}>
						Graphic
					</li>
				</ul>
				<div>{rows}</div>
			</section>
			<section className="review">
				<h2>Our Reviews</h2>
				<section className="block">
					<div>
						<img src={person01} alt="person01" />
						<div className="info">
							<h3>Briana Tozour</h3>
							<h4>Graphic Designer</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Odit modi dolorem quis quae
								animi nihil minus sed unde voluptas cumque.
							</p>
							<button>Read More</button>
						</div>
					</div>
					<div>
						<img src={person02} alt="person02" />
						<div className="info">
							<h3>Briana Tozour</h3>
							<h4>Graphic Designer</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Odit modi dolorem quis quae
								animi nihil minus sed unde voluptas cumque.
							</p>
							<button>Read More</button>
						</div>
					</div>
					<div>
						<img src={person03} alt="person03" />
						<div className="info">
							<h3>Briana Tozour</h3>
							<h4>Graphic Designer</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Odit modi dolorem quis quae
								animi nihil minus sed unde voluptas cumque.
							</p>
							<button>Read More</button>
						</div>
					</div>
				</section>
			</section>
		</Wrapper>
	);
};
