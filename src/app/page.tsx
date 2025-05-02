import { Reveal } from "@/components/fx/Motion";
import { useTranslations } from "next-intl";

export default function Home() {

	const t = useTranslations("HomePage");

	return (
		<main className="relative min-h-screen w-full flex flex-col overflow-hidden bg-main bg-cover">
			<div className="mt-96 text-start z-10">
                    <div className="flex flex-col items-start text-center ml-0 sm:ml-10">
						<Reveal>
							<h1 className="text-8xl font-extrabold text-yellow-600 font-mono ml-6">Cookiebot!</h1>
							<div className="ml-6 text-start w-96">
								<p className="text-4xl font-medium text-yellow-700 font-mono break-normal">
									{t("slogan")}
								</p>
							</div>
						</Reveal>
                        <Reveal className="ml-6 mt-4">
							<a href="https://t.me/CookieMWbot?startgroup=new">
								<button className="primary">
									{t("inviteme")}
									+
								</button>
							</a>
						</Reveal>
                    </div>
                </div>
		</main>
	);
}
