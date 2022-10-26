import Layout from '../components/layout'
import Transactions from '../components/transactions'
import styles from '../styles/Home.module.css'
import React from 'react';
import TextField from '@mui/material/TextField';


export default function TransactionViewer() {
    const [address, setAddress] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Stop the form from submitting and refreshing the page.

        const address = event.target.address.value;

        setAddress(address);
    }

    return (
        <Layout>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Transaction Viewer
                </h1>
                <br/>
                    <form onSubmit={handleSubmit} >
                        <TextField className={styles.input} id="address" label="Enter a Solana address" variant="outlined" required />
                    </form>
                {address ? <Transactions address={address}></Transactions> : <></>}
            </main>
        </Layout>
    )
}
