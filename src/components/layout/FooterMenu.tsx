import { Link } from "react-router-dom";

const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "Métier", path: "/metier" },
  { label: "Métier 2", path: "/metier-2" },
  { label: "À propos", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Contrôle Technique", path: "/controle-technique" },
  { label: "Performance Énergétique", path: "/performance-energetique" },
  { label: "Ressources", path: "/ressources" },
  { label: "Bureau d'Étude", path: "/bureau-etude" },
  { label: "Diagnostics", path: "/diagnostics" },
  { label: "Article", path: "/article" },
  { label: "Actualités", path: "/actualites" },
  { label: "Projet", path: "/projet" },
  { label: "Services", path: "/services" },
  { label: "Ville", path: "/ville" },
];

export const FooterMenu = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#f3f1f7] border-t border-[#aa7ffb] py-6 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex flex-wrap gap-4 justify-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-sm text-[#5d3ca4] hover:text-[#1c1b1b] hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 text-center text-sm text-[#5d3ca4]">
          © 2025 SDIExpertise® - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};
