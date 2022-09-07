import Layout from '../components/layout'
import Transactions from '../components/transactions'
import styles from '../styles/Home.module.css'
import React from 'react';


export default function TransactionViewer() {
    const [address, setAddress] = React.useState(0);

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
                <form onSubmit={handleSubmit}>
                    <input type="text" id="address" name="address" placeholder="Enter a Solana address" required/>
                </form>
                <h3>pulling {address}</h3>
                <Transactions address={address}></Transactions>
            </main>
        </Layout>
    )
}
