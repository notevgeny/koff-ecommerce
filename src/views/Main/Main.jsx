import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";

const data = [];

export const Main = () => (
  <main>
    <Catalog />
    <Goods data={data} />
  </main>
);
