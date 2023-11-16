import React from 'react'
import Products from './Products'

const Title = () => {
  return (
    <div className='title_container'>
        <div className='title_name'>
            <span className='active_title_name'>Smartfonlar</span>
            <span>Notbuklar, personal komputerlər</span>
            <span>Smartfonlar, planşetlər</span>
            <span>TV və audio</span>
            <span>Foto və video</span>
            <span>Avtomobil texnikası</span>
            <span>Əyləncə və istirahət</span>
            <span>Mətbəx  texnikası</span>
            <span>Printerlər</span>
            <span>Təmir və tikinti</span>
            <span>Ofis avadanlıqları</span>
        </div>
        <Products/>
    </div>
  )
}

export default Title