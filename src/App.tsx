import { Header } from "./component/header/header.tsx";
import Sidebar from "./component/sidebar/sidebar.tsx";
import Post from "./component/post/post.tsx";

import "./Global.css";
import style from "./App.module.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO @ Rocketseat",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },

			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2025-03-06 05:33:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "Mayk Brito",
			role: "Educator @ Rocketseat",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },

			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2025-03-06 05:33:00"),
	},
];

function App() {
	return (
		<>
			<Header />
			<div className={style.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</>
	);
}

export default App;
