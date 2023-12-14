import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImage from "@/assets/main/hero.png";

import Button from "@/components/utils/Button";
import { Language } from "@/types/Language";
function Hero({ lang }: { lang: Language }) {
	return (
		<div className={styles.hero}>
			<header>
				<h1 className="hidden">
					Nordic Flow,
					<br /> Ravenue{"'"}s Glow
				</h1>
				<p className="hidden">
					{lang == Language.DE ? (
						<>
							Mit Ravenue Solutions haben Sie einen Partner an
							Ihrer Seite, der sich für Ihre Ziele einsetzt, um
							sicherzustellen, dass Ihre digitale Strategie ein
							Erfolg wird.
						</>
					) : (
						<>
							With Ravenue Solutions you have a partner at your
							side who is committed to your goals to ensure that
							your digital strategy is a success.
						</>
					)}
				</p>
				<h2 className="hidden">
					{lang == Language.DE ? (
						<>Wachsen Sie noch heute besser mit Ravenue!</>
					) : (
						<>Grow better with Ravenue today!</>
					)}
				</h2>
				<div className="hidden">
					<Button href={"#complead"}>
						{lang == Language.DE ? (
							<>Mehr erfahren</>
						) : (
							<>Learn more</>
						)}
					</Button>
					<Button href={"#contact"} color={true}>
						{lang == Language.DE ? "Kontakt" : "Contact"}
					</Button>
				</div>
			</header>
			<div>
				<Image
					priority={true}
					src={HeroImage}
					width={750}
					height={650}
					alt="hero image"
				></Image>
			</div>
		</div>
	);
}

export default Hero;
