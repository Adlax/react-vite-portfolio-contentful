import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contenful CMS</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit facilis laboriosam cupiditate aliquam, vero ipsum labore ea
						eveniet commodi sequi vel. Eveniet laborum voluptates necessitatibus in. Illo labore, blanditiis dignissimos quibusdam officiis
						laudantium dolorem quas unde provident quam doloremque et praesentium! Sit corrupti magni velit officia illum iusto nesciunt illo.
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman-browser" className="img" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
