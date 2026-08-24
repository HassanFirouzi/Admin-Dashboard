import Card from "@/components/home/card";
import CategoryChart from "@/components/home/category-chart";
import SalesChart from "@/components/home/sales-chart";
import { cards } from "@/utils/constants";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="page">
      <div className="mb-6">
        <h1 className="title">Admin Paneli</h1>
        <p className="text-zinc-500 mt-1">Genel bakış ve performans göstergeleri</p>
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {cards.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5">
        {/* below lg the grid row has no explicit height, so these need a
        fixed height of their own — size-full's height:100% has nothing to
        resolve against there and collapses to 0, hiding the charts */}
        <div className="lg:col-span-9 w-full h-95 lg:h-full overflow-hidden">
          <SalesChart />
        </div>

        <div className="lg:col-span-5 w-full h-95 lg:h-full overflow-hidden">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
};

export default Page;
