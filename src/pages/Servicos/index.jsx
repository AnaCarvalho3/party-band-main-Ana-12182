import axios from 'axios'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Menu } from './../../components/Menu'
import { Card } from './../../components/Card'
import banner from './../../imagens/banner.jpg'
import './style.css'

export const Servicos = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/servicos?_limit=6')
            .then((resposta) => {
                setCards(resposta.data)
            })

    }, [])

    return (
        <>
            <Menu paginaAtual={"Home"} />
            <div
                className='divImageHome'
            >
                <img
                    className='imgHome'
                    src={banner}
                />
            </div>

            <div
                className='container'
            >
                

                <div
                    className='d-flex justify-content-around'
                >
                    
                    <div
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                        }}
                    >             
                    
                    
                    {
                        cards.map((element, index) => {
                            return (
                                
                                <Card
                                    key={element.id}
                                    titulo={element.titulo}
                                    img={element.imagem} 
                                />

                            )
                        })
                    }
                    </div>

                </div>

            </div>

            

            <Footer />
        </>
    )
}