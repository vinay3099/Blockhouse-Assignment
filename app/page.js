import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import CandlestickChart from "./components/Candlestickchart";
export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]" >
        <GridItem title="Pie Chart">
        <PieChart/>
        </GridItem>

        <GridItem title="Bar Chart">
         <BarChart/>
        </GridItem>
       
        <GridItem title="Line Chart">
        <LineChart/>
        </GridItem>
        <GridItem title="Candlestick Chart">
        <CandlestickChart/>
          
        </GridItem>
      </div>
    </main>

  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-white-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
      {children}
    </div>
  );
}