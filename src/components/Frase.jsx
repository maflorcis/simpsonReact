import React from 'react';
import { Container } from 'react-bootstrap';

const Frase = () => {
    return (
       <Container>
        <section className='fondoFrase mb-3'>
        <div className='row'>
            <section className='col-lg-6 col-md-12 col-sm-12'>
                <img src="/img/image2.png" alt="" />
            </section>
            <section className='col-lg-6 col-md-12 col-sm-12'>
                <h2>Homer Simpson</h2>
                <p> Facts are meaningless. You could use facts to prove anything that´s even remotely true</p>

            </section>

                        
        </div>
        </section>
        </Container>
        
    );
};

export default Frase;