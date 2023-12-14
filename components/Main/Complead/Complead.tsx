import Button from "@/components/utils/Button";
import styles from "./Complead.module.scss";
import complead from "@/assets/main/complead.svg";
import complead2 from "@/assets/main/complead2.svg";
import Image from "next/image";
import { Language } from "@/types/Language";

export default function Complead({ lang }: { lang: Language }) {
	return (
		<div className={styles.complead}>
			<div>
				<h1 className="hidden">
					CompLead <br />
					{lang == Language.EN
						? "Reach the Amazon Sellers in one click"
						: "Erreichen Sie die Amazon-Verkäufer mit einem Klick"}
				</h1>
				<p className="hidden">
					{lang === Language.DE ? (
						<>
							Mit unserem Tool CompLead bieten wir nicht nur
							maßgeschneiderte Lösungen zur Leadgenerierung,
							sondern auch zur automatisierten Datenpflege und
							CRM-Automatisierung an. CompLead kann automatisch
							neue Leads in Ihrem CRM-System erstellen, bereits
							existierende Leads im System aktualisieren und
							Aufgaben für Ihr Vertriebs- oder Marketingteam
							generieren. Dadurch optimieren wir Ihre CRM-Prozesse
							und ermöglichen eine effiziente und effektive
							Kundenbeziehungsverwaltung.
						</>
					) : (
						<>
							With our tool CompLead, we offer not only customized
							solutions for lead generation, but also for
							automated data maintenance and CRM automation.
							CompLead can automatically create new leads in your
							CRM system, update existing leads in the system, and
							generate tasks for your sales or marketing team.
							This optimizes your CRM processes and enables
							efficient and effective customer relationship
							management.
						</>
					)}
				</p>
				<Button href={"#contact"}>
					{lang == Language.DE ? "Jetzt loslegen" : "Start today"}
				</Button>
			</div>
			<Image src={complead} alt={"logo"} width="526" height="553" />
			<Image src={complead2} alt={"logo"} width="481" height="368" />
			<div>
				<h1 className="hidden">
					How it Works: <br />{" "}
					{lang == Language.DE
						? "Revolutionieren Sie Ihr CRM"
						: "Revolutionize your CRM"}
				</h1>
				<p className="hidden">
					{lang === Language.DE ? (
						<>
							Mit unserem Tool CompLead bieten wir nicht nur
							maßgeschneiderte Lösungen zur Leadgenerierung,
							sondern auch zur automatisierten Datenpflege und
							CRM-Automatisierung an. CompLead kann automatisch
							neue Leads in Ihrem CRM-System erstellen, bereits
							existierende Leads im System aktualisieren und
							Aufgaben für Ihr Vertriebs- oder Marketingteam
							generieren. Dadurch optimieren wir Ihre CRM-Prozesse
							und ermöglichen eine effiziente und effektive
							Kundenbeziehungsverwaltung.
						</>
					) : (
						<>
							With our tool CompLead, we offer not only customized
							solutions for lead generation, but also for
							automated data maintenance and CRM automation.
							CompLead can automatically create new leads in your
							CRM system, update existing leads in the system, and
							generate tasks for your sales or marketing team.
							This optimizes your CRM processes and enables
							efficient and effective customer relationship
							management.
						</>
					)}
				</p>
				<Button href={"#contact"}>
					{lang == Language.DE ? "Beginnen Sie jetzt" : "Reserve your place now"}
				</Button>
			</div>
		</div>
	);
}
