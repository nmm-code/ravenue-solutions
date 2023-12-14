import styles from "./Box.module.scss";
import call from "@/assets/main/call.svg";
import database from "@/assets/main/database.svg";
import money from "@/assets/main/money.svg";
import { Language } from "@/types/Language";
import Image from "next/image";

function Box({ lang }: { lang: Language }) {
	const isGerman = lang === Language.DE;

	return (
		<section className={styles.section}>
			<section className={styles.box}>
				<article className={styles.nothing}>
					<h1>
						{isGerman
							? "Unsere Expertise im Dienste ihres Erfolgs"
							: "Our expertise in service of your success"}
					</h1>
					<p>
						{isGerman
							? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam at dolore natus optio numquam quia nam nemo explicabo tenetur. Veniam saepe laudantium dolorum quia repudiandae ipsa doloribus minus at!"
							: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam at dolore natus optio numquam quia nam nemo explicabo tenetur. Veniam saepe laudantium dolorum quia repudiandae ipsa doloribus minus at!"}
					</p>
				</article>
				<article className={`${styles.white} hidden`}>
					<Image
						src={call}
						width={40}
						height={40}
						alt="call logo"
					></Image>
					<h3>{isGerman ? "Consulting" : "Consulting"}</h3>
					<p>
						{isGerman
							? "Profitieren Sie von unserer Branchenexpertise, um maßgeschneiderte Strategien zu entwickeln, die auf Ihre spezifischen Geschäftsziele abgestimmt sind."
							: "Benefit from our industry expertise to develop tailored strategies that are tailored to your specific business goals."}
					</p>
				</article>
			</section>
			<section className={styles.box}>
				<article className={`${styles.trans} hidden`}>
					<Image
						src={database}
						width={40}
						height={40}
						alt="call logo"
					></Image>
					<h3>
						{isGerman
							? "Maßgeschneiderte Datenlösungen"
							: "Tailored data solutions"}
					</h3>
					<p>
						{isGerman
							? "Von der Automatisierung von CRM-Prozessen bis hin zur Bereitstellung maßgeschneiderter Datenlösungen - wir helfen Ihnen, effizienter zu arbeiten und Ihre Ergebnisse zu verbessern."
							: "From automating CRM processes to providing tailored data solutions - we help you work more efficiently and improve your results."}
					</p>
				</article>
				<article className={`${styles.trans} hidden`}>
					<Image
						src={money}
						width={40}
						height={40}
						alt="call logo"
					></Image>
					<h3>{isGerman ? "Leadgenerierung" : "Lead generation"}</h3>
					<p>
						{isGerman
							? "Steigern Sie Ihren Umsatz und erweitern Sie Ihre Geschäftsmöglichkeiten mit qualitativ hochwertigen, zielgerichteten Leads."
							: "Increase your revenue and expand your business opportunities with high-quality, targeted leads."}
					</p>
				</article>
			</section>
		</section>
	);
}

export default Box;
