import styles from "./post.module.css";
import Comment from "../comment/comment.tsx";
import Avatar from "../avatar/avatar.tsx";

import { ptBR } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";
// biome-ignore lint/style/useImportType: <explanation>
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
	avatarUrl: string;
	name: string;
	role: string;
}

interface ContentPost {
	type: string;
	content: string;
}
interface PostProps {
	author: Author;
	content: ContentPost[];
	publishedAt: Date;
}

function Post(props: PostProps) {
	const [comments, setComments] = useState<string[]>([]);
	const [newCommentText, setNewCommentText] = useState<string>("");

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();
		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("Este campo é obrigatorio!");
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	}

	const dateTitle = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm", {
		locale: ptBR,
	});
	const publishedAtRelative = formatDistanceToNow(props.publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});
	function deleteComment(commentToDelete: string) {
		const commentWithoutDeleteOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentWithoutDeleteOne);
	}
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={props.author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{props.author.name}</strong>
						<span>{props.author.role}</span>
					</div>
				</div>

				<time title={dateTitle} dateTime={props.publishedAt.toISOString()}>
					{publishedAtRelative}
				</time>
			</header>
			<div className={styles.content}>
				{props.content.map((line) => {
					if (line.type === "paragraph") {
						return <p key={line.content}>{line.content}</p>;
						// biome-ignore lint/style/noUselessElse: <explanation>
					} else if (line.type === "link") {
						return (
							<p key={line.content}>
								<a href="/">{line.content}</a>
							</p>
						);
					}
				})}
			</div>
			<form className={styles.commentForm} onSubmit={handleCreateNewComment}>
				<strong>Deixei seu feedback</strong>
				<textarea
					name="comment"
					placeholder="Deixe um comentario"
					value={newCommentText}
					onChange={handleNewCommentChange}
					required
					onInvalid={handleNewCommentInvalid}
				/>
				<footer>
					<button type="submit" disabled={newCommentText.length === 0}>
						Publicar
					</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							content={comment}
							key={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}

export default Post;
