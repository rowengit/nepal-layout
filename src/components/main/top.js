import styled from "styled-components";

const Wrapper = styled.section`
	p {
		padding: 0 0.5rem;
		text-align: center;
	}
`;

export const Top = () => {
	return (
		<Wrapper className="bottom-only">
			<h2>Creative agency, corporate and portfolio HTML Template</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
				error enim laudantium, animi veniam libero eveniet culpa unde
				perferendis illo fugit corporis, voluptatibus totam dolorum,
				maiores magnam officia. Ab, delectus.
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
		</Wrapper>
	);
};
