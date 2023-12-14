import { Language } from "@/types/Language";
import styles from "./Main.module.scss";
import Hero from "./Hero";
import Box from "./Box";
import Complead from "./Complead";
import About from "./About";
import Ratings from "./Ratings";
import Crm from "./Crm";
import Contact from "./Contact";

export function Main({ lang }: { lang: Language }) {
	return (
		<>
			<main className={styles.main}>
				<section id="home" className={`${styles.section}  sec`}>
					<Hero lang={lang} />
				</section>

				<div className={styles.blue}>
					<section id="home" className={`${styles.section}  sec`}>
						<Box lang={lang} />
					</section>
				</div>

				<section id="complead" className={`${styles.section}  sec`}>
					<Complead lang={lang} />
				</section>

				<div className={styles.blue}>
					<section id="complead" className={`${styles.section}  sec`}>
						<Crm lang={lang} />
					</section>
				</div>

				<section id="aboutus" className={`${styles.section}  sec`}>
					<About lang={lang} />
				</section>

				<section id="aboutus" className={`${styles.section}  sec`}>
					<Ratings lang={lang} />
				</section>
			</main>
			<div id="contact" className={`${styles.padding} sec`}></div>
			<section className={`${styles.contact}`}>
				<Contact lang={lang} />
			</section>
			<div className={styles.padding2}></div>
		</>
	);
}
