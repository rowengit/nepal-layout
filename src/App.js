import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { Profile } from "./components/profile";
import { PageNotFound } from "./components/404";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { defColor } from "./def";

const GlobalStyle = createGlobalStyle`
		main{
			h2 {
				margin: 2rem 1.5rem;
			}
			padding-top: 70px;

			> section {
			border-radius: 0 0 18px 18px;
			text-align: center;
			background: ${defColor.lightGrey};
			padding: 1rem 1rem 2rem;
			margin: 0 2rem;

			.block {
				border-radius: 18px;
				text-align: center;
				background: ${defColor.lightGrey};
				padding: 1rem 1rem 2rem;
				margin: 0 2rem;
			}

			:not(section.bottom-only) {
				margin: 2rem;
				border-radius: 18px;
			}

				:not(:last-child) {
					margin-bottom: 2rem;
				}
			}
		}
		
		.social-media {
		display: flex;
		justify-content: center;

		a {
			display: block;
			height: 42px;
			width: 42px;
			border-radius: 100%;
			margin: 0 1rem;

			position: relative;

			i {
				font-size: 20px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}

		a.fb:hover {
			background: #4267b2;
		}

		a.twitter:hover {
			background: #1da1f2;
		}

		a.yt:hover {
			background: #ff0000;
		}

		a.ig:hover {
			background: radial-gradient(
					circle farthest-corner at 35% 90%,
					#fec564,
					transparent 50%
				),
				radial-gradient(
					circle farthest-corner at 0 140%,
					#fec564,
					transparent 50%
				),
				radial-gradient(
					ellipse farthest-corner at 0 -25%,
					#5258cf,
					transparent 50%
				),
				radial-gradient(
					ellipse farthest-corner at 20% -50%,
					#5258cf,
					transparent 50%
				),
				radial-gradient(
					ellipse farthest-corner at 100% 0,
					#893dc2,
					transparent 50%
				),
				radial-gradient(
					ellipse farthest-corner at 60% -20%,
					#893dc2,
					transparent 50%
				),
				radial-gradient(
					ellipse farthest-corner at 100% 100%,
					#d9317a,
					transparent
				),
				linear-gradient(
					#6559ca,
					#bc318f 30%,
					#e33f5f 50%,
					#f77638 70%,
					#fec66d 100%
				);
		}
	}
`;

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<RouterList />
			<Footer />
		</BrowserRouter>
	);
}

const RouterList = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default App;
