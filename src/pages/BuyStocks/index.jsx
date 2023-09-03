import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { accions } from "../../components/DataUsers/dataUsers";
function BuyStocks() {
    return (
      <Layout>
        <label className="font-bold font-serif mt-6 text-orange-500 mb-2">Comprar Acciones</label>
        <p className='font-normal font-serif text-mybtn mb-6'>Selecciona las acciones que deseas comprar</p>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {accions.map((accion,index) => (
        <Card
          key={index} data={accion}
        />
      ))}
      </div>
      </Layout>
    );
  }
  
  export default BuyStocks;