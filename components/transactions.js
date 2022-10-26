import getTransactions from '../data/transactions';
import Table from './table';
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'

export default function Transactions({ address }) {
    const { data, isLoading, isError } = getTransactions(address);

    if (isLoading) return <CircularProgress />;
    if (isError || data["error"]) return <Alert severity="error">Error loading transactions from {address}</Alert>;

    console.log(data)

    var slimData = data.map(function(val,index) {
        return {
            description: val['description'],
            transactionId: val['signature'],
            timestamp: val['timestamp']
        }
    });

    console.log(slimData); // todo just send all data through and show that on "inspect"
    
    return (<Table data={slimData}></Table>)
}
