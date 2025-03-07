import styles from "./comment.module.css";
import imgProfile from "../../assets/profile.jpg";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import Avatar from "../avatar/avatar.tsx";
import { useState } from "react";
interface commentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

function Comment(props: commentProps) {
	const [likeCount, setLikeCount] = useState(0);
	function handleDeleteComment() {
		props.onDeleteComment(props.content);
	}
	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1;
		});
	}
	return (
		<div className={styles.comment}>
			<Avatar src={imgProfile} hasBorder={false} />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Wellyton Andrade</strong>
							<time dateTime="2022-05-11 08:12:12" title="11 de maio as 2025">
								Cerca de 1h atrás
							</time>
						</div>
						<button
							title="deletar comentario"
							type="button"
							onClick={handleDeleteComment}
						>
							<Trash size={24} />
						</button>
					</header>
					<p>{props.content}</p>
				</div>
				<footer>
					<button type="button" onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
export default Comment;
