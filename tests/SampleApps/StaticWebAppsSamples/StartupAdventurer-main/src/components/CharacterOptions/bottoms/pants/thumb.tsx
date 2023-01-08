import React from "react";
import { defaultColor } from "./colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const PantsThumb = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;

	return (
		<svg id="pants" x="0px" y="0px" viewBox="0 0 182 182">
			<g>
				<g>
					<rect x="69.3" y="30.3" fill="none" width="4.3" height="0" />
					<rect x="65" y="8.7" fill="none" width="4.3" height="0" />
					<path
						fill={color1}
						d="M134.3,0H130h-4.3h-4.3v0h0v4.3H117h-4.3h-4.3H104h-4.3h-4.3H91h-4.3h-4.3H78h-4.3h-4.3H65v0h0v0h-4.3v4.3V13
			v4.3v4.3V26v4.3v4.3V39h0v4.3v4.3V52v4.3v4.3V65v4.3h-4.3v0h0v4.3V78v4.3v4.3V91v4.3H52v0h0v4.3v4.3v4.3v4.3h-4.3v0h0v4.3v4.3v4.3
			v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3H52v4.3h4.3h4.3H65h4.3v-4.3v-4.3V169v-4.3v-4.3V156v-4.3v-4.3V143v-4.3v-4.3
			h4.3V130v-4.3v-4.3H78V117v-4.3h4.3v-4.3V104v-4.3h4.3v-4.3V91v-4.3v-4.3H91V78v-4.3v-4.3h4.3V65v-4.3v-4.3V52v-4.3h4.3V52v4.3
			v4.3V65v4.3v4.3V78v4.3v4.3V91v4.3h4.3v4.3v4.3v4.3v4.3h-4.3v0h0v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3v4.3h4.3v4.3
			v4.3h4.3h4.3h4.3h4.3v-4.3V169v-4.3v-4.3V156v-4.3v-4.3V143v-4.3v-4.3V130v-4.3h4.3v-4.3V117v-4.3v-4.3V104h4.3v-4.3v-4.3V91v-4.3
			v-4.3V78h4.3v-4.3v-4.3V65v-4.3v-4.3V52v-4.3v-4.3V39v-4.3v-4.3V26v-4.3v-4.3V13V8.7V4.3v0h0V0z M69.3,30.3h4.3v0L69.3,30.3
			L69.3,30.3z M65,8.7h4.3v0L65,8.7L65,8.7z"
					/>
				</g>
				<g>
					<polygon
						fill={color2}
						points="112.7,30.3 112.7,26 112.7,21.7 108.3,21.7 108.3,26 108.3,30.3 108.3,34.7 108.3,39 108.3,43.3
			108.3,47.7 108.3,52 108.3,56.3 108.3,60.7 108.3,65 108.3,69.3 108.3,73.7 108.3,78 108.3,82.3 108.3,86.7 108.3,91 108.3,95.3
			108.3,99.7 108.3,104 108.3,108.3 104,108.3 104,112.7 108.3,112.7 108.3,117 104,117 104,121.3 104,125.7 104,130 104,134.3
			104,138.7 104,143 104,147.3 104,151.7 104,156 104,160.3 104,164.7 108.3,164.7 108.3,160.3 108.3,156 108.3,151.7 108.3,147.3
			108.3,143 108.3,138.7 108.3,134.3 108.3,130 108.3,125.7 108.3,121.3 112.7,121.3 112.7,117 112.7,112.7 112.7,108.3 117,108.3
			117,104 117,99.7 117,95.3 117,91 117,86.7 117,82.3 117,78 117,73.7 117,69.3 117,65 117,60.7 117,56.3 117,52 117,47.7
			117,43.3 117,39 117,34.7 112.7,34.7"
					/>
					<polygon
						fill={color2}
						points="108.3,173.3 108.3,177.7 112.7,177.7 112.7,173.3 112.7,169 108.3,169"
					/>
					<polygon
						fill={color2}
						points="112.7,4.3 108.3,4.3 104,4.3 99.7,4.3 95.3,4.3 91,4.3 86.7,4.3 82.3,4.3 78,4.3 73.7,4.3 69.3,4.3
			69.3,8.7 69.3,13 69.3,17.3 69.3,21.7 69.3,26 69.3,30.3 69.3,34.7 69.3,39 69.3,39 69.3,43.3 69.3,47.7 69.3,52 69.3,56.3
			69.3,60.7 65,60.7 65,65 65,69.3 65,73.7 60.7,73.7 60.7,78 60.7,82.3 60.7,86.7 60.7,91 60.7,95.3 56.3,95.3 56.3,99.7 56.3,104
			56.3,108.3 56.3,112.7 52,112.7 52,117 52,121.3 52,125.7 52,130 52,134.3 52,138.7 52,143 52,147.3 52,151.7 52,156 52,160.3
			52,164.7 52,169 52,173.3 52,177.7 56.3,177.7 56.3,182 60.7,182 60.7,177.7 60.7,173.3 60.7,169 60.7,164.7 56.3,164.7
			56.3,160.3 56.3,156 56.3,151.7 56.3,147.3 56.3,143 56.3,138.7 56.3,134.3 60.7,134.3 60.7,130 60.7,125.7 60.7,121.3 60.7,117
			60.7,112.7 60.7,108.3 65,108.3 65,104 65,99.7 69.3,99.7 69.3,95.3 69.3,91 69.3,86.7 69.3,82.3 73.7,82.3 73.7,78 73.7,73.7
			73.7,69.3 78,69.3 78,65 78,60.7 78,56.3 78,52 78,47.7 78,43.3 78,39 78,34.7 78,30.3 82.3,30.3 82.3,26 82.3,21.7 82.3,17.3
			82.3,13 86.7,13 86.7,8.7 91,8.7 95.3,8.7 99.7,8.7 104,8.7 108.3,8.7 112.7,8.7 117,8.7 121.3,8.7 121.3,4.3 117,4.3"
					/>
					<polygon
						fill={color2}
						points="130,0 125.7,0 121.3,0 121.3,4.3 125.7,4.3 130,4.3 134.3,4.3 134.3,0"
					/>
				</g>
				<g>
					<polygon
						fill={color3}
						points="52,99.7 52,104 52,108.3 52,112.7 56.3,112.7 56.3,108.3 56.3,104 56.3,99.7 56.3,95.3 52,95.3"
					/>
					<polygon
						fill={color3}
						points="104,21.7 104,26 104,30.3 104,34.7 99.7,34.7 99.7,39 99.7,43.3 99.7,47.7 99.7,52 99.7,56.3
			99.7,60.7 99.7,65 99.7,69.3 99.7,73.7 99.7,78 99.7,82.3 99.7,86.7 99.7,91 99.7,95.3 104,95.3 104,99.7 104,104 104,108.3
			108.3,108.3 108.3,104 108.3,99.7 108.3,95.3 108.3,91 108.3,86.7 108.3,82.3 108.3,78 108.3,73.7 108.3,69.3 108.3,65
			108.3,60.7 108.3,56.3 108.3,52 108.3,47.7 108.3,43.3 108.3,39 108.3,34.7 108.3,30.3 108.3,26 108.3,21.7"
					/>
					<rect x="52" y="177.7" fill={color3} width="4.3" height="4.3" />
					<polygon
						fill={color3}
						points="47.7,117 47.7,121.3 47.7,125.7 47.7,130 47.7,134.3 47.7,138.7 47.7,143 47.7,147.3 47.7,151.7
			47.7,156 47.7,160.3 47.7,164.7 47.7,169 47.7,173.3 47.7,177.7 52,177.7 52,173.3 52,169 52,164.7 52,160.3 52,156 52,151.7
			52,147.3 52,143 52,138.7 52,134.3 52,130 52,125.7 52,121.3 52,117 52,112.7 47.7,112.7"
					/>
					<polygon
						fill={color3}
						points="99.7,112.7 99.7,117 99.7,121.3 99.7,125.7 99.7,130 99.7,134.3 99.7,138.7 99.7,143 99.7,147.3
			99.7,151.7 99.7,156 99.7,160.3 99.7,164.7 99.7,169 104,169 104,173.3 104,177.7 108.3,177.7 108.3,173.3 108.3,169 108.3,164.7
			104,164.7 104,160.3 104,156 104,151.7 104,147.3 104,143 104,138.7 104,134.3 104,130 104,125.7 104,121.3 104,117 108.3,117
			108.3,112.7 104,112.7"
					/>
					<polygon
						fill={color3}
						points="69.3,13 69.3,8.7 73.7,8.7 73.7,4.3 69.3,4.3 69.3,4.3 65,4.3 65,4.3 65,4.3 60.7,4.3 60.7,8.7
			60.7,13 60.7,17.3 60.7,21.7 60.7,26 60.7,30.3 60.7,34.7 60.7,39 60.7,39 60.7,43.3 60.7,47.7 60.7,52 60.7,56.3 60.7,60.7
			60.7,65 60.7,69.3 56.3,69.3 56.3,73.7 56.3,78 56.3,82.3 56.3,86.7 56.3,91 56.3,95.3 60.7,95.3 60.7,91 60.7,86.7 60.7,82.3
			60.7,78 60.7,73.7 65,73.7 65,69.3 65,65 65,60.7 69.3,60.7 69.3,56.3 69.3,52 69.3,47.7 69.3,43.3 69.3,39 69.3,39 69.3,34.7
			69.3,30.3 69.3,26 69.3,26 69.3,26 69.3,21.7 69.3,21.7 69.3,17.3"
					/>
				</g>
			</g>
		</svg>
	);
};

export default PantsThumb;