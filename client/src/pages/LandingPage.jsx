import { useState } from "react";
import Layout from "../components/Layout";

export default function LandingPage() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);

	const handleSubmit = async () => {
		if (email === "") return;
		if (submitted) return;

		// Valdiation
		const checkEmailUrl =
			"https://emailvalidation.abstractapi.com/v1/?api_key=3b409c06e34a411f9b77db954dc51ffa&email=" +
			encodeURIComponent(email);

		try {
			const response = await fetch(checkEmailUrl);
			const data = await response.json();
			if (data.is_valid_format.value === false) {
				setErrorEmail(true);
				return;
			} else if (data.deliverability === "UNDELIVERABLE") {
				setErrorEmail(true);
				return;
			}
		} catch (error) {
			console.error("Error validating email:", error);
			return;
		}

		setSubmitted(true);
		console.log("Email submitted:", email);
		const url =
			"https://script.google.com/macros/s/AKfycbzW2oaEvU7fhLuzeDqmz14-fAX4zVgwm2R3iBjThlOKnLQYv3CoVC5EA1346z9aKzpa/exec?email=" +
			encodeURIComponent(email);

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded", // Apps Script handles this easily
			},
			body: new URLSearchParams({ email }), // serializes { email: 'something' }
		});
	};

	return (
		<Layout>
			<section className="px-4 py-20">
				<h1 className="text-5xl md:text-7xl font-semibold ">Her zaman</h1>
				<h1 className="text-5xl md:text-7xl font-semibold mb-4 ">odaklı kal</h1>

				<p className="text-gray-700 text-xl md:text-3xl mb-10">
					Ders takibini eğlenceli hâle getir. Başarıya doğru bir session başlat.
				</p>
				<img
					src="heroes1.svg"
					className=" mb-24 border-b-2 pb-6 border-gray-300 w-auto"
				/>

				<h1 className="text-3xl md:text-5xl font-semibold ">
					Başarılarını görselleştir,
				</h1>
				<h1 className="text-3xl md:text-5xl font-semibold mb-4 ">
					Gelişimini izle
				</h1>
				<p className="text-gray-700 text-xl md:text-3xl ">
					Ne kadar odaklandığını ve zamanını nereye harcadığını öğren. Bu sayede
					gelişimini takip eder, her seansla daha verimli hale gelirsin.
				</p>
				<div className="flex justify-center">
					<img src="app1.png" className=" mb-12 w-auto" />
				</div>

				<h1 className="text-3xl mt-4 md:text-5xl font-semibold ">
					Senin uygulaman,
				</h1>
				<h1 className="text-3xl md:text-5xl font-semibold mb-4 ">
					Senin kuralların
				</h1>
				<p className="text-gray-700 text-xl md:text-3xl ">
					Uygulamanı kişiselleştir, istediğin gibi ayarla. Hedeflerini belirle
					ve odaklanmak istediğin süreyi seç.
				</p>
				<div className="flex justify-center pb-4 border-b-2 mb-12 border-b-gray-300">
					<img src="app2.png" className=" w-auto" />
				</div>

				<div>
					<h1 className="text-3xl md:text-5xl font-semibold mb-4 ">
						Bize Katıl
					</h1>
					<p className="text-gray-400 text-xl md:text-3xl mb-2 ">
						İstek listesine adını yazdır ve ilk sen haber al. Bu sırada bizi
						takip edebilirsin.
					</p>
					<a
						href="https://www.linkedin.com/company/yustudy"
						className="cursor-pointer"
					>
						<div className="flex">
							<img src="linkedin.svg" className="w-12" />
							<img src="yustudy_logo.svg" className="h-18" />
						</div>
					</a>
					<br />
					<p className="text-gray-700 text-xl md:text-3xl mb-4 ">
						Uygulamamız hayata geçtiğinde ilk sen haberder ol.
					</p>
					<div className="flex flex-col gap-6 max-w-sm mx-auto">
						<div className="flex flex-col">
							<input
								type="email"
								placeholder="E-posta adresininiz"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setSubmitted(false);
									setErrorEmail(false);
								}}
								className={
									"border px-3 pt-2 rounded-lg outline-none  border-gray-300 focus:border-blue-500 " +
									(errorEmail ? " border-red-500" : "")
								}
							/>
							{errorEmail && (
								<p className="text-red-500 text-xs mt-2 md:text-sm  ">
									Geçerli bir email adresi giriniz.
								</p>
							)}
						</div>
						<button
							onClick={handleSubmit}
							className={
								"cursor-pointer text-white px-4 rounded-lg py-2 " +
								(submitted ? "bg-green-500" : "bg-blue-500")
							}
						>
							{submitted ? "Gönderildi" : "Gönder"}
						</button>
					</div>
				</div>
			</section>
		</Layout>
	);
}
