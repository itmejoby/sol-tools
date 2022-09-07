import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// https://mui.com/material-ui/react-stack/

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Table({ descriptions }) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                {descriptions.map(function (val, index) {
                    return (<Item>{val}</Item>)
                })}
            </Stack>
        </Box>
    )
}
