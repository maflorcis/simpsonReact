import React from 'react';
import { Container } from 'react-bootstrap';

const Frase = ({personaje}) => {
    return (
       <Container>
        <section className='fondoFrase mb-3'>
        <div className='row'>
            <section className='col-lg-6 col-md-12 col-sm-12'>
                <img src={personaje.image} alt={personaje.character} />
            </section>
            <section className='col-lg-6 col-md-12 col-sm-12'>
                <h2>{personaje.character}</h2>
                <p> {personaje.quote}</p>

            </section>

                        
        </div>
        </section>
        </Container>
        
    );
};

export default Frase;