import style from "./header.module.css";
import logo from "../../assets/ignite-logo.svg";
export function Header() {
	return (
		<header className={style.header}>
			<img src={logo} alt="Logo ignite" />
		</header>
	);
}
