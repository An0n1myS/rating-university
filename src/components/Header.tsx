import { Link } from "react-router-dom"

export const Header = () => {
	return (
		<header>
			<h1>Сторінка студентів</h1>
			<nav>
				<ul>
					<li><Link to="/">Головна</Link></li>
					<li><Link to="/students">Студенти</Link></li>
					<li><Link to="/teachers">Викладачі</Link></li>
					<li><Link to="/ranking_for_group">Рейтинг по групам</Link></li>
					<li><Link to="/ranking">Рейтинг</Link></li>
					<li><Link to="/students/add">Додавання студента</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
