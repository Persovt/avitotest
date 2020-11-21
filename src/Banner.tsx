import React from 'react'
import { Card } from 'antd';
const  banner = (props: any) =>{
    
        return (
            
                <Card bordered={true} style={{ width: 300 }} >
                    <div className="" ref={props.testInit}>
                <img src={props.data.URL} alt="Image" style={{ width: 300 }}/>
                <p>{props.data.cardText}</p>
              
                </div>
                </Card>
           
            
            
        )
  
}

export default banner
