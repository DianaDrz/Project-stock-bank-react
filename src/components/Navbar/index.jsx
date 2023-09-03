import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { StockCartContext } from '../../Context'


const Navbar = (fullName, onLogout, onSelectAction) => {
    const activeStyle = 'underline underline-offset-8 text-orange-600'
    const context =useContext(StockCartContext)

    return (
        <nav className='flex justify-between items-center fize z-10 w-full py-5 px-8 top-0 text-sm font-light shadow-md'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg text-mybtn font-serif font-bold'>
                    <NavLink to='/'>Latinas Stock Bank</NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3 font-serif '>
                <li>
                    <NavLink to='/change-pin' className={({ isActive }) => isActive ? activeStyle : undefined}>Cambiar PIN</NavLink>
                </li>
                <li>
                    <NavLink to='/review-stocks' className={({ isActive }) => isActive ? activeStyle : undefined}>Revisar Acciones </NavLink>
                </li>
                <li>
                    <NavLink to='/buy-stocks' className={({ isActive }) => isActive ? activeStyle : undefined}>Comprar Acciones</NavLink>
                </li>
                <li>
                    <NavLink to='/sell-stocks' className={({ isActive }) => isActive ? activeStyle : undefined}>Vender Acciones</NavLink>
                </li>
                <li>
                    <NavLink to='/deposit-funds' className={({ isActive }) => isActive ? activeStyle : undefined}>Depositar Fondo</NavLink>
                </li>
                <li>
                    <NavLink to='/generate-statement' className={({ isActive }) => isActive ? activeStyle : undefined}>Generar Estado</NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined} onClick={onLogout}>Finalizar Sesion</NavLink>
                </li>
                <li>
                    Fondos {context.userBalance}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;