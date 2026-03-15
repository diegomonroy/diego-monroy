import React, { useState } from "react";

const CategoryIcons = {
	"Desarrollo Web (Frontend)": (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6 text-[var(--sec)] opacity-70"
		>
			<path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
		</svg>
	),
	"Desarrollo Web (Backend)": (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6 text-[var(--sec)] opacity-70"
		>
			<path d="M4 1H20C20.5523 1 21 1.44772 21 2V6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6V2C3 1.44772 3.44772 1 4 1ZM4 9H20C20.5523 9 21 9.44772 21 10V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V10C3 9.44772 3.44772 9 4 9ZM4 17H20C20.5523 17 21 17.4477 21 18V22C21 22.5523 20.5523 23 20 23H4C3.44772 23 3 22.5523 3 22V18C3 17.4477 3.44772 17 4 17ZM6 4V5H8V4H6ZM6 12V13H8V12H6ZM6 20V21H8V20H6ZM17 4.5C17 5.05228 16.5523 5.5 16 5.5C15.4477 5.5 15 5.05228 15 4.5C15 3.94772 15.4477 3.5 16 3.5C16.5523 3.5 17 3.94772 17 4.5ZM19 4.5C19 5.05228 18.5523 5.5 18 5.5C17.4477 5.5 17 5.05228 17 4.5C17 3.94772 17.4477 3.5 18 3.5C18.5523 3.5 19 3.94772 19 4.5Z"/>
		</svg>
	),
	"Desarrollo Móvil": (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6 text-[var(--sec)] opacity-70"
		>
			<path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
		</svg>
	),
	"Desarrollo de Escritorio": (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6 text-[var(--sec)] opacity-70"
		>
			<path d="M4 16H20V5H4V16ZM2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V17C22 17.5523 21.5523 18 21 18H13V20H16V22H8V20H11V18H3C2.44772 18 2 17.5523 2 17V4Z"/>
		</svg>
	),
	"Infraestructura y Despliegue": (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6 text-[var(--sec)] opacity-70"
		>
			<path d="M17 8C17 8 17 8 17 8C16.4773 5.17107 13.9948 3 11 3C8.23956 3 5.9069 4.96123 5.17107 7.58985C3.33646 8.17056 2 9.93038 2 12C2 14.7614 4.23858 17 7 17H17C19.2091 17 21 15.2091 21 13C21 10.9483 19.4345 9.26381 17.4127 9.03011C17.1518 8.69045 17 8.36584 17 8ZM9 16V19H7L10 22L13 19H11V16H9Z"/>
		</svg>
	),
	"Herramientas": (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6 text-[var(--sec)] opacity-70"
		>
			<path d="M7.10508 5.5C7.45179 4.9022 8.17906 4.5 9 4.5C10.2426 4.5 11.25 5.50736 11.25 6.75C11.25 7.85058 10.5038 8.77801 9.5 9.07V14.93C10.5038 15.222 11.25 16.1494 11.25 17.25C11.25 18.4926 10.2426 19.5 9 19.5C7.75736 19.5 6.75 18.4926 6.75 17.25C6.75 16.1494 7.49614 15.222 8.5 14.93V9.07C7.49614 8.77801 6.75 7.85058 6.75 6.75C6.75 6.3023 6.87888 5.8787 7.10508 5.5ZM15 6.75C15 5.50736 16.0074 4.5 17.25 4.5C18.4926 4.5 19.5 5.50736 19.5 6.75C19.5 7.85058 18.7538 8.77801 17.75 9.07V11C17.75 12.5188 16.5188 13.75 15 13.75H12V14.93C13.0038 15.222 13.75 16.1494 13.75 17.25C13.75 18.4926 12.7426 19.5 11.5 19.5C10.2574 19.5 9.25 18.4926 9.25 17.25C9.25 16.1494 9.99614 15.222 11 14.93V13.07C9.99614 12.778 9.25 11.8506 9.25 10.75C9.25 9.50736 10.2574 8.5 11.5 8.5H15V9.07C14.4962 9.2094 14.0617 9.5251 13.7679 9.9514C13.4741 10.3777 13.3427 10.8866 13.3976 11.3931C13.4525 11.8997 13.6901 12.3699 14.0661 12.7185C14.4422 13.0671 14.9318 13.2708 15.4399 13.2945C15.948 13.3181 16.4549 13.1601 16.8623 12.8483C17.2697 12.5366 17.5505 12.0913 17.6537 11.5919C17.7568 11.0924 17.6754 10.5721 17.4246 10.1271C17.1739 9.68215 16.771 9.34122 16.29 9.16L15 6.75Z"/>
		</svg>
	),
};

const SkillsList = () => {
	const [openItem, setOpenItem] = useState<string | null>(null);
	const skills = {
		"Desarrollo Web (Frontend)": [
			"Lenguajes Core: HTML5, CSS3, JavaScript, TypeScript.",
			"Frameworks y Librerías: jQuery, Astro, Vue, React, Next.js.",
			"Estilos y Diseño: Bootstrap, Foundation, TailwindCSS.",
		],
		"Desarrollo Web (Backend)": [
			"Lenguajes y Entornos: PHP, Python, Node.js.",
			"Frameworks: Laravel, Django.",
			"Bases de Datos: MySQL.",
			"Gestión de Contenidos (CMS): Joomla, WordPress, Shopify.",
		],
		"Desarrollo Móvil": [
			"Aplicaciones Híbridas / Multiplataforma: Ionic.",
		],
		"Desarrollo de Escritorio": [
			"Aplicaciones Nativas: Electron.",
		],
		"Infraestructura y Despliegue": [
			"Servidores y Cloud: AWS, DigitalOcean.",
			"Plataformas de Despliegue Rápido: Cloudflare, Netlify, Railway, Vercel.",
		],
		"Herramientas": [
			"Sistemas y Consola: Bash.",
			"Control de Versiones: Git.",
			"IA: Claude, Gemini.",
		],
	};
	const toggleItem = (item: string) => {
		setOpenItem(openItem === item ? null : item);
	};
	return (
		<div className="text-left py-8">
			<h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
				¿Qué hago?
			</h3>
			<ul className="space-y-4 mt-4 text-lg">
				{Object.entries(skills).map(([category, items]) => (
					<li key={category} className="w-full">
						<div
							onClick={() => toggleItem(category)}
							className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
						>
							<div className="flex items-center gap-3 p-4">
								{CategoryIcons[category]}
								<div className="flex items-center gap-2 flex-grow justify-between">
									<div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
										<span className="block truncate text-[var(--white)] text-lg">
											{category}
										</span>
									</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
											openItem === category ? "rotate-180" : ""
										}`}
									>
										<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
									</svg>
								</div>
							</div>
							<div
								className={`transition-all duration-300 px-4 ${
									openItem === category
										? "max-h-[500px] pb-4 opacity-100"
										: "max-h-0 opacity-0"
									}`}
							>
								<ul className="space-y-2 text-[var(--white-icon)] text-sm">
									{items.map((item, index) => (
										<div key={index} className="flex items-center">
											<span className="pl-1">•</span>
											<li className="pl-3">
												{item.includes(":") ? (
													<>
														<strong>{item.split(":")[0]}:</strong>
														{item.split(":").slice(1).join(":")}
													</>
												) : (
													item
												)}
											</li>
										</div>
									))}
								</ul>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsList;
