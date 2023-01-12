import React from "react";
import { defaultColor } from "../colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const Hair1 = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;
	return (
		<g id="hair_1" data-name="hair_1">
			<polygon
				fill={color1}
				points="460.94 80 460.94 70 450.94 70 440.94 70 440.94 80 430.94 80 420.94 80 410.94 80 400.94 80 400.94 90 390.94 90 380.94 90 370.94 90 360.94 90 360.94 100 350.94 100 350.94 110 350.94 120 350.94 120 350.94 130 350.94 130 340.94 130 340.94 140 340.94 150 340.94 160 340.94 170 340.94 180 340.94 190 350.94 190 360.94 190 360.94 180 360.94 170 370.94 170 370.94 160 370.94 150 370.94 140 380.94 140 380.94 130 390.94 130 400.94 130 410.94 130 420.94 130 430.94 130 440.94 130 450.94 130 450.94 140 460.94 140 460.94 130 470.94 130 470.94 120 470.94 110 470.94 100 470.94 90 470.94 80 460.94 80"
			/>
			<rect fill={color2} x="350.95" y="120" width="10" height="10" />
			<rect fill={color2} x="430.95" y="100" width="10" height="10" />
			<rect fill={color2} x="400.95" y="100" width="10" height="10" />
			<polygon
				fill={color2}
				points="340.95 130 340.95 140 340.95 150 340.95 160 340.95 170 340.95 180 340.95 190 350.95 190 360.95 190 360.95 180 360.95 170 350.95 170 350.95 160 350.95 150 350.95 140 360.95 140 360.95 130 350.95 130 340.95 130"
			/>
			<polygon
				fill={color2}
				points="400.95 120 400.95 110 390.95 110 390.95 120 380.95 120 370.95 120 370.95 110 370.95 100 370.95 90 360.95 90 360.95 100 350.95 100 350.95 110 350.95 120 360.95 120 360.95 130 370.95 130 380.95 130 390.95 130 400.95 130 410.95 130 420.95 130 420.95 120 410.95 120 400.95 120"
			/>
			<rect fill={color2} x="420.95" y="110" width="10" height="10" />
			<polygon
				fill={color3}
				points="360.95 130 360.95 140 350.95 140 350.95 150 350.95 160 350.95 170 360.95 170 370.95 170 370.95 160 370.95 150 370.95 140 380.95 140 380.95 130 370.95 130 360.95 130"
			/>
			<polygon
				fill={color3}
				points="430.95 120 420.95 120 420.95 130 430.95 130 440.95 130 450.95 130 450.95 120 440.95 120 430.95 120"
			/>
			<polygon
				fill={color3}
				points="400.95 90 390.95 90 380.95 90 370.95 90 370.95 100 370.95 110 370.95 120 380.95 120 390.95 120 390.95 110 390.95 100 400.95 100 400.95 90"
			/>
			<rect fill={color3} x="450.95" y="110" width="10" height="10" />
			<rect fill={color3} x="400.95" y="110" width="10" height="10" />
		</g>
	);
};

export default Hair1;