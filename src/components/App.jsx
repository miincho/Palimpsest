import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import C001 from "../sauce/C001.jsx";
import M001 from "../sauce/M001.jsx";
import C002 from "../sauce/C002.jsx";
import M002 from "../sauce/M002.jsx";
import C003 from "../sauce/C003.jsx";
import M003 from "../sauce/M003.jsx";
import C004 from "../sauce/C004.jsx";
import M004 from "../sauce/M004.jsx";
import "./App.css";

const articles = [
	{ path: "/sauce/C001", label: "C001.html" },
	{ path: "/sauce/M001", label: "M001.html" },
	{ path: "/sauce/C002", label: "C002.html" },
	{ path: "/sauce/M002", label: "M002.html" },
	{ path: "/sauce/C003", label: "C003.html" },
	{ path: "/sauce/M003", label: "M003.html" },
	{ path: "/sauce/C004", label: "C004.html" },
	{ path: "/sauce/M004", label: "M004.html" },
];

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<div className="workspace">
					<ArticleColumn />
					<div id="content" className="reader">
						<Routes>
							<Route path="/" element={null} />
							<Route path="/sauce/C001" element={<C001 />} />
							<Route path="/sauce/M001" element={<M001 />} />
							<Route path="/sauce/C002" element={<C002 />} />
							<Route path="/sauce/M002" element={<M002 />} />
							<Route path="/sauce/C003" element={<C003 />} />
							<Route path="/sauce/M003" element={<M003 />} />
							<Route path="/sauce/C004" element={<C004 />} />
							<Route path="/sauce/M004" element={<M004 />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

function ArticleColumn() {
	return (
		<aside className="article-column">
			<nav className="article-list">
				{articles.map((article) => (
					<NavLink
						key={article.path}
						to={article.path}
						className={({ isActive }) =>
							isActive ? "article-card active" : "article-card"
						}
					>
						<span className="article-rect" aria-hidden="true" />
						<span className="article-name">{article.label}</span>
					</NavLink>
				))}
			</nav>
			<NavLink
				id="homepage"
				to="/"
				className="site-title"
			>
				Palimpsest
			</NavLink>
		</aside>
	);
}

export default App;
