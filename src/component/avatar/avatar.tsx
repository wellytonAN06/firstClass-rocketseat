import type { ImgHTMLAttributes } from "react";
import styles from "./avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
}

function Avatar({ hasBorder = true, ...props }: AvatarProps) {
	return (
		// biome-ignore lint/a11y/useAltText: <explanation>
		<img
			{...props}
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
		/>
	);
}

export default Avatar;
