import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core'

function infoBox({title, cases}) {
    return (
        <Card className="card">
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">{title}</Typography>
                {cases !== NaN ?<h2>{cases}</h2> : <h2>0</h2>}
                <Typography className="infoBox_total" color="textSecondary"> Total</Typography>
            </CardContent>
        </Card>
    )
}

export default infoBox
