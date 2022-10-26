import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Table({ data }) {
    return (
        <Box sx={{padding: '10px', width: '80%' }}>
            <Stack spacing={2}>
                {data.map(function (val, index) {
                    return (
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14}}>{
                                    val['description'] ? val['description'] : "Unable to provide description. View transaction for details."
                                }</Typography>
                                <Typography sx={{ fontSize: 10}} color="text.secondary">{Math.round(((Date.now()/1000) - val['timestamp']) / (60*60*24))} days ago</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={"https://explorer.solana.com/tx/".concat(val['transactionId'])}>View on Explorer</Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </Stack>
        </Box>
    )
}
