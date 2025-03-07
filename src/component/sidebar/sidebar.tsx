import styles from "./sidebar.module.css";
import backgroudImg from "../../assets/developer.jpeg";
import profileimg from "../../assets/profile.jpg";
import { PencilLine } from "@phosphor-icons/react";
import Avatar from "../avatar/avatar.tsx";
function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img src={backgroudImg} alt="background img" className={styles.cover} />
			<div className={styles.profile}>
				<Avatar src={profileimg} />
				<strong>Wellyton Andrade</strong>
				<span>Web Developer</span>
			</div>
			<footer>
				<a href="/">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
export default Sidebar;
