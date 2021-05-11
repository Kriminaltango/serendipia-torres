import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

import firebase from 'firebase/app'
import 'firebase/firestore'

import {getFirestore} from '../../firebase'


function Field({name, inputLabel, nameField, style, type, id, placeholder, valueInput, onChange}) {
    return (
        <>
            <div className='col-sm-6'>
                <label htmlFor={inputLabel} name={name} className='form-label' style={style}>{nameField}</label>
                <input type={type} value={valueInput} className='form-control' id={id} placeholder={placeholder} required onChange={onChange}></input>
            </div>
        </>
    )
}

function Cart() {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');  
    const [orderId, setOrderId] = useState(null);
    const [sent, setSent] = useState(false);

    const onNameChange = event => {setName(event.target.value)}
    const onPhoneChange = event => {setPhone(event.target.value)}  
    const onEmailChange= event => {setEmail(event.target.value)}
    const onEmailConfirmChange= event => {setEmailConfirm(event.target.value)}

    async function generarOrden() {
        setSent(true);
        const db = getFirestore();
        const object = {name, phone, email};

        const pedidos = db.collection('orders');

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = object;
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;

            return {id, title, price}   
        })


     pedidos.add(orden)
        .then((idDocumento)=>{
            console.log(idDocumento.id)
            setOrderId(idDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=>{
            console.log('termino la promesa')
        })


        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.item.id)
        )

        const batch = db.batch();

        // por cada item restar del stock la cantidad de el carrito

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })

        console.log(orden)
    }

    if(orderId) {
        return <>
                <div className='container'>
                    <div className='py-5 text-center mt-5'>
                        <h2 className='mt-5'>¡Gracias por elegirnos!</h2>
                        <h4 className='my-5'>La compra se ha realizado exitosamente.</h4>
                        <strong>El ID de tu compra es {orderId}</strong>
                        <p className='danger'>No lo pierdas! con el podrás realizar el seguimiento del envío!</p>
                        <Link className='btn btn-outline-danger m-3' to={`/`}><strong>Volver a Home</strong></Link>                  
                    </div>
                </div>   
        </>
    }

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(totalItems === 0) return noItemComp

    return (<>
        <div>
           <ul style={{listStyle:'none', padding:0}}>
            {cart.map(cartItem => {
                return (
                    <li key={cartItem.item.id}  style={{display:'flex',width:'40%',justifyContent:'space-between', margin:'5px auto'}}>
                        <div> Titulo:  {cartItem.item.title}  </div>
                        <div> cantidad: {cartItem.quantity} </div>
                        <button className='btn btn-dark btn-sm' onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                    </li>
                );
            }
            )}

           </ul>
            <div>{totalItems} artículos</div>
            <div>${totalPrecio}</div>
            <button className="btn btn-dark" onClick={clear}>Borrar todo</button>  

        </div>

        <div className='container'>
                <div className='text-center py-5 mt-5'>
                    <h4 className='mt-5'>Completa el formulario con tus datos para confirmar la compra.</h4>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <form>
                            <div className='row g-3'>
                                <Field inputLabel='inputName' name='name' nameField='Nombre y Apellido' valueInput={name} style={{ paddingTop: '5px'}} type='text' id='inputName' placeholder='Nombre y Apellido' onChange={onNameChange}/>
                                <Field inputLabel='inputPhone' name='phone' nameField='Teléfono' valueInput={phone} style={{ paddingTop: '10px'}} type='number' id='inputPhone' placeholder='1133768450' onChange={onPhoneChange}/>                                               
                                <Field inputLabel='inputEmail' name='email' nameField='Email' valueInput={email} style={{ paddingTop: '10px'}} type='email' id='inputEmail' placeholder='mail@ejemplo.com' onChange={onEmailChange}/>
                                <Field inputLabel='inputConfirmEmail' name='email' nameField='Confirmar Email' valueInput={emailConfirm} style={{ paddingTop: '10px'}} type='email' id='inputConfirmEmail' placeholder='mail@ejemplo.com' onChange={onEmailConfirmChange}/>              
                            </div>                             
                            <button className='btn btn-outline-danger btn-lg btn-block mt-5' type='submit' disabled={ !name || !phone || !email || (emailConfirm !== email) || sent } onClick={generarOrden} style={{ marginBottom: '30px'}}>
                               <strong>Confirmar</strong> 
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cart;