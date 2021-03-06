import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core'

function infoBox({title, cases, total}) {
    return (
        <Card className="card">
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">{title}</Typography>
                {cases.length && (<h2>{cases}</h2>)}
                <Typography className="infoBox_total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default infoBox
