import { useEffect, useState } from "react";
import CardsContent from "./CardsContent";
import ChartsContent from "./ChartsContent";
import { getCardsData } from "../js/Data";

const dummyCardsData = {
  data: [
    { wilaya: "ALGER", wilaya_count: 8850 },
    { produit: "NEWHAYLABEZZEF2000", produit_count: 16166 },
    [
      { wilaya: "ALGER", wilaya_count: 8850 },
      { wilaya: "SETIF", wilaya_count: 4162 },
      { wilaya: "ORAN", wilaya_count: 3478 },
      { wilaya: "MEDEA", wilaya_count: 2636 },
      { wilaya: "CONSTANTINE", wilaya_count: 2571 },
      { wilaya: "BLIDA", wilaya_count: 2190 },
      { wilaya: "MSILA", wilaya_count: 2005 },
      { wilaya: "DJELFA", wilaya_count: 1929 },
      { wilaya: "BEJAIA", wilaya_count: 1795 },
      { wilaya: "BOUMERDES", wilaya_count: 1782 },
      { wilaya: "AIN-DEFLA", wilaya_count: 1779 },
      { wilaya: "CHLEF", wilaya_count: 1558 },
      { wilaya: "TLEMCEN", wilaya_count: 1553 },
      { wilaya: "MOSTAGANEM", wilaya_count: 1547 },
      { wilaya: "BATNA", wilaya_count: 1375 },
      { wilaya: "RELIZANE", wilaya_count: 1254 },
      { wilaya: "MASCARA", wilaya_count: 1218 },
      { wilaya: "TIARET", wilaya_count: 1134 },
      { wilaya: "OUM EL-BOUAGHI", wilaya_count: 1089 },
      { wilaya: "BORDJ-BOU-ARRERID", wilaya_count: 1087 },
      { wilaya: "MILA", wilaya_count: 1016 },
      { wilaya: "SKIKDA", wilaya_count: 1014 },
      { wilaya: "BISKRA", wilaya_count: 999 },
      { wilaya: "TIZI-OUZOU", wilaya_count: 991 },
      { wilaya: "BOUIRA", wilaya_count: 952 },
      { wilaya: "SIDI-BELABBES", wilaya_count: 747 },
      { wilaya: "SAIDA", wilaya_count: 684 },
      { wilaya: "AIN-TEMOUCHENT", wilaya_count: 648 },
      { wilaya: "ANNABA", wilaya_count: 582 },
      { wilaya: "GUELMA", wilaya_count: 542 },
      { wilaya: "JIJEL", wilaya_count: 450 },
      { wilaya: "EL-OUED", wilaya_count: 408 },
      { wilaya: "TISSEMSILT", wilaya_count: 369 },
      { wilaya: "OUARGLA", wilaya_count: 283 },
      { wilaya: "undefined", wilaya_count: 277 },
      { wilaya: "TIPAZA", wilaya_count: 264 },
      { wilaya: "EL-TAREF", wilaya_count: 221 },
      { wilaya: "SOUK-AHRAS", wilaya_count: 215 },
      { wilaya: "TEBESSA", wilaya_count: 201 },
      { wilaya: "GHARDAIA", wilaya_count: 150 },
      { wilaya: "EL-BAYADH", wilaya_count: 150 },
      { wilaya: "OULED-DJELLAL", wilaya_count: 149 },
      { wilaya: "KHENCHELA", wilaya_count: 130 },
      { wilaya: "LAGHOUAT", wilaya_count: 120 },
      { wilaya: "NAAMA", wilaya_count: 105 },
      { wilaya: "TAMANRASSET", wilaya_count: 91 },
      { wilaya: "BORDJ-BOU-ARRERIDJ", wilaya_count: 64 },
      { wilaya: "BECHAR", wilaya_count: 49 },
      { wilaya: "ILLIZI", wilaya_count: 33 },
      { wilaya: "ADRAR", wilaya_count: 31 },
      { wilaya: "TOUGGOURT", wilaya_count: 25 },
      { wilaya: "EL-MGHAIER", wilaya_count: 20 },
      { wilaya: "TINDOUF", wilaya_count: 16 },
      { wilaya: "EL-MENIAA", wilaya_count: 4 },
      { wilaya: "BORDJ-BADJI-MOKHTAR", wilaya_count: 2 },
      { wilaya: "TIMIMOUN", wilaya_count: 2 },
      { wilaya: "BENI-ABBES", wilaya_count: 1 },
      { wilaya: "IN-SALAH", wilaya_count: 1 },
    ],
    [
      { produit: "NEWHAYLABEZZEF2000", produit_count: 16166 },
      { produit: "NULL", produit_count: 9659 },
      { produit: "#", produit_count: 3755 },
      { produit: "lowValue200", produit_count: 3706 },
      { produit: "NEWHAYLABEZZEF100", produit_count: 2578 },
      { produit: "HAYLA BEZZAF 2000", produit_count: 2205 },
    ],
    { count: 53748 },
    { count: 7823 },
  ],
};

export default function Overview() {
  const [data, setData] = useState(dummyCardsData.data);
  useEffect(() => {
    getCardsData().then((res) => {
      if (res.data) {
        setData(res.data);
      }
    });
  }, []);
  return (
    <div className="flex flex-col">
      <div id="description" className="mb-4">
        <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">Overview</h1>
        <p className="text-lg font-medium text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          deserunt rem voluptatem quis quam eveniet inventore in ut nam
          dignissimos?
        </p>
      </div>
      <div id="content">
        <CardsContent cardsData={data} />
        <ChartsContent cardsData={data} />
      </div>
    </div>
  );
}
