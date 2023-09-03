import React, { useContext } from "react";
import { StockCartContext } from "../../Context";
import Layout from "../../components/Layout";
import OrderAccionCard from "../../components/OrderAccionCard";

function ReviewStocks() {
  const context = useContext(StockCartContext);

  if (!context.buyAccions || context.buyAccions.length === 0) {
    return <p className=" text-center m-28 font-serif font-medium">No hay acciones disponibles para revisar.</p>;
  }

  return (
    <Layout>
      <label className="font-bold font-serif mt-6 text-orange-500 ">Revisar Acciones</label>
      <div className="grid gap-2 grid-cols-3 w-full p-5 font-serif">
        <div className="border border-solid border-orange-400 rounded-lg mx-5">
          <p className="text-center mt-8 text-mybtn font-bold" >Datos Actuales</p>
          <div className="max-w-[650px] w-full mx-auto rounded-lg mt-6 p-3">
            <div className="grid grid-cols-3 gap-4 items-center place-items-center m-0 p-0">
              <div className="col-span-1">
                <img className="rounded-2xl h-20 w-20" src={context.foundUser.photo} alt="perfil de usuario" />
              </div>
              <div className="w-full col-span-2">
                <h1 className="font-serif text-orange-500 font-bold w-full">Nombre: {context.foundUser.fullName}</h1>
                <p className="font-serif text-orange-500">Usuario: {context.foundUser.userName}</p>
              </div>
            </div>
            <div className="m-10 grid grid-cols-1 gap-4 font-serif text-mybtn">
              <p>Fondo Actual: {context.userBalance}</p>
              <p>Cantidad de acciones: {context.count}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {context.buyAccions.map((buy, buyIndex) => (
            <div key={buyIndex}>
              <h2 className="text-xl font-semibold mt-8 mb-3">Compra {buyIndex + 1}</h2>
              {buy.accions.map((accion, accionIndex) => (
                <OrderAccionCard
                  key={accionIndex}
                  id={accion.id}
                  name={accion.name}
                  photo={accion.photo}
                  valueMonetary={accion.valueMonetary}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ReviewStocks;
