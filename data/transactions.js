import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function getTransactions(address) {
    const { data, error } = useSWR(`/api/transactions/${address}`, fetcher , { revalidateOnFocus: false});


    console.log(data);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
