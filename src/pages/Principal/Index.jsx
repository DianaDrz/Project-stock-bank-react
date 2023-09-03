import Layout from "../../components/Layout";
import { dataUsers } from "../../components/DataUsers/dataUsers";
import { useContext } from "react";
import { StockCartContext } from "../../Context";
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
function Principal({ fullName }) {
  const context = useContext(StockCartContext);
  const foundUser = dataUsers.find((user) => user.fullName === fullName);

  return (
    <Layout>
      <div className='grid gap-2 grid-cols-2 absolute inset-0 mt-[85px]'>
        <div>
          <div className="flex justify-center my-10 mt-20">
            <img className="rounded-xl w-24 h-24" src={foundUser.photo} alt="perfil de usuario" />
          </div>
          <div className="mx-auto flex flex-col gap-3 text-center">
            <h1 className="font-serif text-orange-500 font-bold text-xl w-full">Bienvenid@...! {fullName}</h1>
            <p className="font-serif text-orange-500 text-xl">Usuario: {foundUser.userName}</p>
         
           <p className="font-serif text-mybtn">  Fondo Actual: {context.userBalance}</p>
          
            <p className="font-serif text-mybtn">Cantidad de acciones: {context.count}</p>
          </div>
        </div>
        <div className="my-8">
          <img className="rounded-lg" src="https://img.freepik.com/vector-premium/ilustracion-vectorial-personaje-que-invierte-dinero-socio-comercial-rentable_675567-2645.jpg" alt="imagnes de personas con porcentaje" />
        </div>
      </div>
    </Layout>
  );
}

export default Principal;
