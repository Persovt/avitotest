import React from 'react'
import { Card } from 'antd';

interface dataProps {
    errorImageURL: string,
    errorRedirectURL: string,
    cardText: string,
    imageURL: string,
    redirectURL: string,
    Color: string,
    setColor: (arg0: string) => void,
    setImageURL: (arg0: string) => void,
    setCardText: (arg0: string) => void,
    setRedirectURL:  (arg0: string) => void
}
interface props {
    testInit: (atg: HTMLDivElement) => void,
    data: dataProps

}


const banner = ({testInit, data}: props) => {




    return (

        <div className="banner" ref={testInit}>
            <Card

                hoverable
                style={{  background: data.Color }}
                cover={<img src={data.imageURL} />}
                onClick={() => window.location.href = data.redirectURL}
            >





                {/* <img alt="example" src={props.data.URL} style={{ width: 300 }} /> */}
                <p className="card-text" >{data.cardText}</p>





            </Card>
        </div>


    )

}

export default banner
