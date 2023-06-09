import { Typography } from "@material-tailwind/react";
import image from "../assets/download.jpg";
import logo from "../assets/logoLightMode.png";

export default function AdsSection() {
  return (
    <div className="bg-white dark:bg-[#0a0c0f] py-16 lg:py-24 relative">
      <div className="relative mb-52 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl py-24 px-8 shadow-md lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="absolute inset-0">
            <div className="w-full h-full absolute bg-black/20" />
            <div className="h-full w-1/2 bg-gradient-to-r from-black/90 to-transparent absolute" />
            <img
              src={image}
              alt="location de voiture ads"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1">
            <img className="h-12 opacity-95 w-auto" src={logo} alt="" />
            <blockquote className="mt-6 text-white">
              <Typography variant="lead">
                Notre véhicule est à votre disposition 7j/7j, si vous avez
                besoin de plus d’information vous pouvez nous contacter.
                <br /> vous pouvez nous visiter sur l’adresse suivante:
                Boulevard Mekka, 70 000 Laayoune – Maroc
              </Typography>
              <footer className="mt-6">
                <Typography variant="small">
                  <span className="block">Location de Voiture Laayoune</span>
                  <span>Laayoune, Morocco</span>
                </Typography>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
