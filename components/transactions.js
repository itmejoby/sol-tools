import getTransactions from '../data/transactions';
import Table from './table';

export default function Transactions({ address }) {
    const { data, isLoading, isError } = getTransactions(address);

    if (isLoading) return <div>Loading</div>; // return <Spinner />
    if (isError) return <div>Error</div>; // return <Error />

    console.log(data)

    var descriptions = data.map(function(val, index) {
       return val['description']
    });

    console.log(descriptions);
    
    return (<Table descriptions={descriptions}></Table>)
}
