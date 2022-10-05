import styled from "styled-components";

const Wrapper = styled.main`
	align-items: center;
	text-align: center;

	i {
		font-size: 48px;
		margin: 1rem;
	}
`;

export const PageNotFound = () => {
	return (
		<Wrapper>
			<i className="fa-regular fa-face-tired"></i>
			<h2>Oops! Page Not Found.</h2>
		</Wrapper>
	);
};
