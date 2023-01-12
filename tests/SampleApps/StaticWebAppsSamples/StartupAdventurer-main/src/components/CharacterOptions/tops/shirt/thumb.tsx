import React from "react";
import { defaultColor } from "./colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const ShirtThumb = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;

	return (
		<svg version="1.1" data-id="clothes-top-thumb" x="0px" y="0px" viewBox="0 0 182 182">
			<path d="m29.4 146.8v-5.9-5.9-5.8-5.9-5.9h-5.9v5.9 5.9 5.8 5.9 5.9 5.8 5.9h5.9v-5.9z" fill="none" />
			<path
				d="m182 93.9h-5.9v-5.9h-5.9v-5.9h-5.9v5.9 5.9h-5.9v5.9h-5.9v5.9h-5.9v5.9h-5.9v-5.9-5.9-5.9-5.9-5.9h-5.7v-5.9-5.9-5.9-5.9-5.9h-5.9v-5.6-5.9-5.9h-5.9v-5.9h-5.9v-5.9h-5.9-5.9v-5.9h-5.9v-5.9h-5.9v-5.7h-5.9-5.9v-5.9h-5.9-5.9-5.9-5.9-5.9v5.9 5.9h-5.4v5.9h-5.9-5.9v5.9h-5.9-5.9v5.9h-5.9v5.9h-5.9v5.9h-5.7v5.7 5.9h-5.9v5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9h5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.7 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9v-5.9h5.9 5.9 5.9v-5.9-5.9-5.9h-5.9v-5.9-5.9-5.9-6.4-5.9-5.9-5.9-5.9-5.9h5.9v5.9 5.9 5.9h5.9v5.9h5.9v5.9h5.9v5.9h5.9v5.9h5.9v-5.9h5.9v-5.9h5.9v-5.9h5.9v-5.9h5.9v-5.9h5.9v-5.9h5.9v-5.9-5.9zm-158.5 64.6v-5.9-5.9-5.9-5.8-5.9-5.9-5.9h5.9v5.9 5.9 5.9 5.9 5.9 5.9 5.9h-5.9z"
				fill={color1}
			/>
			<path
				d="m176.1 93.9h-5.8v5.9h-5.9v5.9 5.8h-5.9v5.9h-5.9v5.9h-5.8v5.9h-5.9v-5.9h-5.9v-5.9-5.9h-5.8v-5.8-5.9-5.9-5.8h-5.9v-5.9-5.9-5.8-5.9-5.9h-5.9v5.9 5.9 5.8 5.9 5.9 5.8h5.9v5.9 5.9 5.8 5.9h5.9v5.9 5.9h5.8v5.8h5.9v5.9h5.9 5.8v-5.9h5.9v-5.8h5.9v-5.9h5.9v-5.9h5.8v-5.9h5.9v-5.8-5.9-5.9z"
				fill={color2}
			/>
			<path d="m117.4 47h-5.9v5.8 5.9h5.9v-5.9z" fill={color2} />
			<path d="m99.8 23.5h5.9v5.9h-5.9z" fill={color2} />
			<path d="m58.7 11.7v5.9h5.9v-5.9-5.8h-5.9z" fill={color2} />
			<path
				d="m52.8 99.8v-5.9-5.8h-5.8v-5.9-5.9-5.8-5.9h-5.9-5.9v5.9 5.8 5.9h5.9v5.9 5.8h-5.9v5.9 5.9 5.8h5.9v5.9 5.9 5.9 5.8 5.9 5.9 5.8h-5.9v5.9 5.9 5.9 5.8 5.9h5.9 5.9 5.8 5.9v-5.9-5.8-5.9-5.9-5.9-5.8-5.9-5.9-5.8-5.9-5.9-5.9-5.8h-5.9z"
				fill={color2}
			/>
			<path
				d="m41.1 35.2v-5.8h5.9 5.8v-5.9h-5.8-5.9-5.9v5.9h-5.8-5.9v5.8 5.9h-5.9v5.9h-5.9v5.8 5.9h-5.8v5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9 5.9 5.8 5.9h5.8v-5.9-5.8-5.9-5.9-5.9-5.8-5.9-5.9-5.8-5.9-5.9-5.9-5.8-5.9-5.9-5.8-5.9-5.9h5.9v-5.8-5.9-5.9h5.9v-5.9-5.8h5.9v-5.9-5.9h5.8z"
				fill={color2}
			/>
			<path d="m82.2 0h-5.9-5.8-5.9v5.9h5.9 5.8v5.8h5.9 5.9v-5.8h-5.9z" fill={color2} />
			<g fill={color3}>
				<path d="m164.4 82.2v5.9 5.8h5.9v-5.8-5.9z" />
				<path d="m158.5 93.9h5.9v5.9h-5.9z" />
				<path d="m152.6 99.8h5.9v5.9h-5.9z" />
				<path d="m146.8 105.7h5.9v5.9h-5.9z" />
				<path d="m140.9 140.9h5.9v5.9h-5.9z" />
				<path d="m140.9 111.5h5.9v5.9h-5.9z" />
				<path d="m135 135h5.9v5.9h-5.9z" />
				<path d="m129.2 129.2h5.9v5.9h-5.9z" />
				<path d="m129.2 117.4h-5.9v-5.9-5.8-5.9-5.9h-5.9v-5.8-5.9-5.9-5.8-5.9-5.9h-5.9v5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9h5.9v5.8 5.9 5.9h5.9v5.9h5.9v-5.9z" />
				<path d="m93.9 23.5h-5.8v-5.9-5.9h-5.9-5.9v5.9h5.9v5.9h-5.9v5.9h5.9 5.9v5.8h5.8v5.9h5.9v-5.9-5.8h-5.9z" />
				<path d="m82.2 164.4h5.9v5.9h-5.9z" />
				<path d="m82.2 140.9h5.9v5.9h-5.9z" />
				<path d="m82.2 117.4h5.9v5.9h-5.9z" />
				<path d="m82.2 93.9h5.9v5.9h-5.9z" />
				<path d="m82.2 70.5h5.9v5.9h-5.9z" />
				<path d="m82.2 47h5.9v5.9h-5.9z" />
				<path d="m35.2 76.3h-5.8v5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9 5.9 5.8 5.9 5.9 5.8 5.9h-5.9v5.9 5.9 5.8 5.9h5.9 5.8v-5.9-5.8-5.9-5.9-5.9h5.9v-5.8-5.9-5.9-5.8-5.9-5.9-5.9h-5.9v-5.8-5.9-5.9h5.9v-5.8-5.9h-5.9z" />
				<path d="m23.5 23.5v5.9h5.9 5.8v-5.9h-5.8z" />
				<path d="m17.6 35.2h-5.9v5.9h-5.8v5.9 5.8h-5.9v5.9 5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9 5.9 5.8 5.9 5.9 5.8 5.9 5.9 5.9 5.8 5.9h5.9v-5.9-5.8-5.9-5.9-5.9-5.8-5.9-5.9-5.8-5.9-5.9-5.9-5.8-5.9-5.9-5.8-5.9-5.9-5.8-5.9-5.9h5.8v-5.9-5.8h5.9v-5.9h5.9v-5.9-5.8h-5.9z" />
				<path d="m88.1 5.9h5.9v5.9h-5.9z" />
				<path d="m70.5 5.9h-5.9v5.8h5.9 5.8v-5.8z" />
				<path d="m70.5 29.4v-5.9h-5.9v-5.9h-5.9v-5.9-5.8h5.9v-5.9h-5.9-5.9v5.9 5.8h-5.8v5.9h-5.9-5.9v5.9h5.9 5.9 5.8 5.9v5.9h5.9v5.8h5.9v5.9h5.8v-5.9-5.8z" />
			</g>
		</svg>
	);
};

export default ShirtThumb;