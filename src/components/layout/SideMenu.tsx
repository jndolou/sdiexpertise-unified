import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Home, Star, ShoppingCart, User, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ServicesMenu } from "./ServicesMenu";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const [isPro, setIsPro] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[340px] bg-[#faf8fc] shadow-[0px_0px_30px_rgba(0,0,0,0.1)] z-[70] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {showServicesMenu ? (
          <div className="h-full p-6">
            <ServicesMenu onBack={() => setShowServicesMenu(false)} />
          </div>
        ) : (
          <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#aa7ffb] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded" />
              </div>
              <span className="font-[Ubuntu] font-bold text-[#1c1b1b] text-lg">
                SDIExpertise
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#ebebeb] transition-colors"
            >
              <X className="w-6 h-6 text-[#1c1b1b]" />
            </button>
          </div>

          <div className="flex gap-2 mb-6">
            <Link
              to="/"
              onClick={() => setIsPro(false)}
              className={`flex-1 h-12 px-4 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all ${
                !isPro
                  ? "bg-[#aa7ffb] text-white"
                  : "bg-white border border-[#ebebeb] text-[#1c1b1b]"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-[Ubuntu] font-medium text-sm">
                Page principale
              </span>
            </Link>
            <Link
              to="/pro"
              onClick={() => setIsPro(true)}
              className={`flex-1 h-12 px-4 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all ${
                isPro
                  ? "bg-[#7fdb9f] text-[#1c1b1b]"
                  : "bg-white border border-[#ebebeb] text-[#1c1b1b]"
              }`}
            >
              <Star className="w-5 h-5" />
              <span className="font-[Ubuntu] font-medium text-sm">
                Accès pro
              </span>
            </Link>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            <button
              onClick={() => setShowServicesMenu(true)}
              className="flex items-center justify-between h-14 px-4 rounded-xl hover:bg-white/50 transition-colors group"
            >
              <span className="font-[Ubuntu] font-normal text-[#1c1b1b] text-base">
                Tous les services
              </span>
              <ChevronRight className="w-5 h-5 text-[#1c1b1b] group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/ressources"
              className="flex items-center justify-between h-14 px-4 rounded-xl hover:bg-white/50 transition-colors"
            >
              <span className="font-[Ubuntu] font-normal text-[#1c1b1b] text-base">
                {isPro ? "Ressources pro" : "Ressources"}
              </span>
            </Link>

            <Link
              to="/actualites"
              className="flex items-center justify-between h-14 px-4 rounded-xl hover:bg-white/50 transition-colors"
            >
              <span className="font-[Ubuntu] font-normal text-[#1c1b1b] text-base">
                Actualités
              </span>
            </Link>

            <button className="flex items-center justify-between h-14 px-4 rounded-xl hover:bg-white/50 transition-colors">
              <span className="font-[Ubuntu] font-normal text-[#1c1b1b] text-base">
                Qui sommes-nous ?
              </span>
            </button>

            <button className="flex items-center gap-3 h-14 px-4 rounded-xl hover:bg-white/50 transition-colors mt-4">
              <User className="w-5 h-5 text-[#1c1b1b]" />
              <span className="font-[Ubuntu] font-normal text-[#1c1b1b] text-base">
                {isPro ? "Mon espace pro" : "Mon espace"}
              </span>
            </button>

            <button className="flex items-center gap-3 h-14 px-4 rounded-xl hover:bg-white/50 transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#1c1b1b]" />
              <span className="font-[Ubuntu] font-normal text-[#1c1b1b] text-base">
                Mon panier
              </span>
            </button>
          </nav>

          <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-[#ebebeb]">
            {!isPro ? (
              <>
                <Button
                  variant="outline"
                  className="h-12 rounded-[62px] border-[#aa7ffb] text-[#aa7ffb] hover:bg-[#aa7ffb]/10"
                >
                  <span className="font-[Ubuntu] font-bold text-sm">
                    Contactez-nous
                  </span>
                </Button>
                <Button className="h-12 rounded-[62px] bg-[#faf8fc] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0ebf5]">
                  <span className="font-[Ubuntu] font-bold text-[#1c1b1b] text-sm">
                    Obtenir un devis
                  </span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="h-12 rounded-[62px] border-[#aa7ffb] text-[#aa7ffb] hover:bg-[#aa7ffb]/10"
                >
                  <span className="font-[Ubuntu] font-bold text-sm">
                    Devenir partenaire
                  </span>
                </Button>
                <Button className="h-12 rounded-[62px] bg-[#1c1b1b] text-white hover:bg-[#1c1b1b]/90">
                  <span className="font-[Ubuntu] font-bold text-sm">
                    Créer un compte pro
                  </span>
                </Button>
              </>
            )}

            <div className="flex items-center justify-between pt-4">
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mb-1">
                  <span className="text-lg">👍</span>
                </div>
                <span className="text-[10px] text-[#1c1b1b] text-center leading-tight">
                  Simuler<br />mon bilan<br />énergétique
                </span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-[10px] text-[#1c1b1b] text-center leading-tight">
                  Estimer la<br />valeur de<br />mon bien
                </span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mb-1">
                  <span className="text-lg">⚡</span>
                </div>
                <span className="text-[10px] text-[#1c1b1b] text-center leading-tight">
                  Simuler<br />mon DPE
                </span>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  );
};
