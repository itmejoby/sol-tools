import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Table({ descriptions }) {
    return (
        <Box sx={{padding: '10px', width: '80%' }}>
            <Stack spacing={2}>
                {descriptions.map(function (val, index) {
                    return (<Item>{val}</Item>) // todo items need unique keys (tx id)
                })}
            </Stack>
        </Box>
    )
}
