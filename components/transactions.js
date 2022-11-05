import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import getTransactions from '../data/transactions';
import Transaction from './transaction';

export default function Transactions({ address }) {
    const { data, isLoading, isError } = getTransactions(address);

    if (isLoading) return <CircularProgress />;
    if (isError || data["error"]) return <Alert severity="error">Error loading transactions from {address}</Alert>;

    var slimData = data.map(function (val, index) {
        return {
            description: val['description'],
            transactionId: val['signature'],
            timestamp: val['timestamp']
        }
    });

    return (
        <Box sx={{ padding: '10px', width: '80%' }}>
            <Stack spacing={2}>
                {slimData.map(function (tx, index) { return (<Transaction tx={tx} />) })}
            </Stack>
        </Box>
    )
}
