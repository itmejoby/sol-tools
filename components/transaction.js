import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Transaction({ tx }) {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }}>{
                    tx['description'] ? tx['description'] : "Unable to provide description. View transaction for details."
                }</Typography>
                <Typography sx={{ fontSize: 10 }} color="text.secondary">{Math.round(((Date.now() / 1000) - tx['timestamp']) / (60 * 60 * 24))} days ago</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={"https://explorer.solana.com/tx/".concat(tx['transactionId'])}>View on Explorer</Button>
            </CardActions>
        </Card>
    )

}
