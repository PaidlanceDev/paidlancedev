import { Component } from '@angular/core';
import { MatExpansionModule } from "@angular/material/expansion";

@Component({
  selector: 'app-fqa',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './fqa.component.html',
  styleUrl: './fqa.component.scss'
})
export class FqaComponent {
  fqas = [
		{
			question: "Is it free to register?",
			answer:
				"Absolutely, yes! Registration on PaidlanceDev is completely free.",
		},
		{
			question: "What is the purpose of PaidlanceDev?",
			answer:
				"The purpose of PaidlanceDev is to provide a secure and fair platform where freelancers can connect with clients, confident in receiving fair compensation and payment protection for their work.",
		},
		{
			question: "How is PaidlanceDev better than other platforms?",
			answer:
				"PaidlanceDev distinguishes itself by being the only platform that genuinely protects and cares about freelancers. While other platforms prioritize client satisfaction, PaidlanceDev prioritizes the welfare of both freelancers and clients, creating a balanced and fair ecosystem.",
		},
		{
			question: "How does PaidlanceDev verify it's users?",
			answer:
				"PaidlanceDev verifies its users through multiple methods, including identity, phone, or payment verifications, and other security measures. Users who successfully complete the verification process receive a badge displayed prominently on their profiles, indicating their verified status.",
		},
		{
			question: "What percentage does PaidlanceDev take from each completed job?",
			answer:
				"For a limited time, PaidlanceDev only takes a nominal 5% commission from freelancers and clients. This fee is a small investment in exchange for real payment protection, including our no-backdate refund policy.",
		},
		{
			question: "Why should we pay PaidlanceDev those 5%?",
			answer:
				"Compared to other platforms that often take upwards of 10% commission, PaidlanceDev's 5% fee is a small price to pay for genuine protection and support. Other platforms may claim to offer protection, but in reality, they often leave freelancers vulnerable to unforeseen circumstances, whereas PaidlanceDev ensures fair treatment and payment security for all users.",
		},
		{
			question: "How does PaidlanceDev ensure payment protection for freelancers?",
			answer:
				"PaidlanceDev implements a strict no-backdate refund policy, allowing clients to request refunds within 24 hours of the transaction. This ensures that freelancers receive payment for their completed work without the risk of retroactive disputes.",
		},
		{
			question: "Why does PaidlanceDev offer refunds within the 24h window?",
			answer:
				"At PaidlanceDev, we believe in empowering both clients and freelancers with a fair and transparent process. Offering refunds allows clients the opportunity to evaluate the work delivered and ensure it meets their expectations. We understand that satisfaction is paramount, and providing this option fosters trust and confidence in our platform for both clients and freelancers alike.",
		},
		{
			question: "Does PaidlanceDev offer dispute resolution services?",
			answer:
				"Instead of offering dispute resolution services, we chose to focus on creating an environment that minimizes the chances of disputes arising in the first place. Clients pay for services offered by freelancers, and they have a limited window of time in which they could request refunds, that is all.",
		},
		{
			question: "Can clients and freelancers communicate directly on PaidlanceDev?",
			answer:
				"Yes, PaidlanceDev provides a secure messaging system for direct communication.",
		},
		{
			question: "What prevents users from conducting business off-platform?",
			answer:
				"We believe in empowering our users with freedom of choice. While freelancers and clients are free to match and conduct business outside the platform to avoid the 5% fee, we emphasize that transactions on PaidlanceDev are protected and secure, offering peace of mind that transactions elsewhere may not provide.",
		},
	];
}
