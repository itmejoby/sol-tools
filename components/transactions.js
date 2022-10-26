import getTransactions from '../data/transactions';
import Table from './table';
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'

export default function Transactions({ address }) {
    const { data, isLoading, isError } = getTransactions(address);

    if (isLoading) return <CircularProgress />;
    if (isError || data["error"]) return <Alert severity="error">Error loading transactions from {address}</Alert>;

    console.log(data)

    // todo handle empty description
    // todo show more than descriptions
    var descriptions = data.map(function(val, index) {
       return val['description']
    });

    console.log(descriptions);
    
    return (<Table descriptions={descriptions}></Table>)
}
