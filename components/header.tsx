import clsx from "clsx";
import { subtitle } from "./primitives";

const header = () => {
  return (
    <div className='hidden lg:block  justify-center p-3 bg-gray-300'>
        <p className={clsx(subtitle
        )}>Toutes les commandes supérieures à 800 dhs seront livrées gratuitement</p>
    </div>
  )
}

export default header