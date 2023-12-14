"use client";
import { Language } from "@/types/Language";
import styles from "./Contact.module.scss";
import { scrollToElement } from "@/components/Nav/RawHTML/RawNav";
import Image from "next/image";
import home from "@/assets/home.png";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";

export default function Contact({ lang }: { lang: Language }) {
	const translatedMailLink = lang === Language.DE ? "/mail" : "/en/mail";

	return (
		<section className={styles.container}>
			<main className={styles.main}>
				<h2>
					{lang === Language.DE
						? "Kontaktieren Sie uns noch heute und erweitern Sie Ihren Markt nahtlos!"
						: "Contact us today and seamlessly expand your market!"}
				</h2>
				<p>
					{lang === Language.DE
						? "Wir sind hier, um Ihrem gesamten Team dabei zu helfen, auch bei Ihrem Wachstum immer einen Schritt voraus zu sein."
						: "We are here to help your entire team stay one step ahead, even as you grow."}
				</p>
				<ul>
					<li>
						<a href="#home" onClick={scrollToElement}>
							<Image
								src={home}
								alt="home icon"
								width={50}
								height={50}
							></Image>
						</a>
					</li>
					<li>
						<a href="tel:+491792273979">
							<Image
								src={phone}
								alt="phone icon"
								width={50}
								height={50}
							></Image>
						</a>
					</li>
					<li>
						<a href={translatedMailLink}>
							<Image
								src={mail}
								alt="mail icon"
								width={50}
								height={50}
							></Image>
						</a>
					</li>
				</ul>
			</main>
		</section>
	);
}
