import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Portfolio - akastler",
  description: "written by akastler with Next.js",
};

export default function LegalMentions() {
  return (
    <div className="flex-1">
        <h1 className="text-4xl font-bold mb-5">Mentions Légales</h1>
        <ol className="list-decimal list-inside space-y-2">
            <li>
                Éditeur du site
                <div className="text-sm ml-10">
                    <p className="">Nom : Kastler Axel</p>
                    <p className="">
                        Email : <a href="mailto:axel.kastler@outlook.fr" className="underline hover:text-blue-500">axel.kastler@outlook.fr</a>
                    </p>
                </div>
            </li>
            <li>
                Hébergeur
                <div className="text-sm ml-10">
                    <p className="">Le site est hébergé par <span className="font-[1000] !important">Hostinger International Ltd.</span></p>
                    <p className="">Adresse : Hostinger, 61 Lordou Vironos Street, Larnaca, 6023 Larnaca, Chypre</p>
                    <p className="">Site web : <a href="https://www.hostinger.fr/" className="underline hover:text-blue-500">www.hostinger.fr</a></p>
                </div>
            </li>
            <li>
                Propriété intellectuelle
                <div className="text-sm ml-10">
                    <p className="">L'ensemble des contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de Kastler Axel sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
                </div>
            </li>
            <li>
                Protection des données personnelles
                <div className="text-sm ml-10">
                    <p className="">Ce site ne collecte pas de données personnelles sans le consentement explicite de l'utilisateur. Pour toute demande de suppression ou d'accès aux données, contactez-moi à <a href="mailto:axel.kastler@outlook.fr" className="underline hover:text-blue-500">axel.kastler@outlook.fr</a>.</p>
                </div>
            </li>
            <li>
                Limitation de responsabilité
                <div className="text-sm ml-10">
                    <p className="">Les informations présentes sur ce site sont fournies à titre indicatif. L'éditeur ne saurait être tenu responsable des erreurs ou omissions.</p>
                </div>
            </li>
            <li>
                Contact
                <div className="text-sm ml-10">
                    <p className="">Pour toute question, vous pouvez me contacter à : <a href="mailto:axel.kastler@outlook.fr" className="underline hover:text-blue-500">axel.kastler@outlook.fr</a></p>
                </div>
            </li>
        </ol>
    </div>
  );
}