import React, { Ref, RefObject } from 'react'
import { Input, Form, Button } from 'antd';
import ReactDOMServer from 'react-dom/server';
import domtoimage from 'dom-to-image';
import Banner from './Banner'
import { Modal } from 'antd';
import { InputProps } from 'antd/lib/input';
import { color } from 'html2canvas/dist/types/css/types/color';
const getImg = (block: Node) => {

    domtoimage.toPng(block)
        .then((dataUrl) => {

            let link = document.createElement('a');

            link.download = 'my-image-name.png';
            link.href = dataUrl;
            link.click();
        })

}
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

   props: dataProps,
    block: any

}

class editor extends React.Component <props> {
  
    
  
constructor(props: props){
    super(props)
  
}


    render(){
    const state = { visible: false };
        console.log(this.props)
        return (
            <div className="editor">

                

                <Form>
                    <Form.Item>
                        <Input size="small"    placeholder="Text" maxLength={129} onChange={(e: any) => {this.props.props.setCardText(e.target.value)}} />
                    </Form.Item>

                    <Form.Item>
                        <p className='error'>{this.props.props.errorImageURL}</p>
                        
                        <Input size="large" placeholder="URL image" onChange={(e: any) => this.props.props.setImageURL(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                    <p className='error'>{this.props.props.errorRedirectURL}</p>
                        <Input size="large" placeholder="Redirect URl" onChange={(e: any) => this.props.props.setRedirectURL(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <span>Color:  </span>
                        <Input size="large" type="color" onChange={(e: any) => this.props.props.setColor(e.target.value)} />
                    </Form.Item>
                </Form>

                <p>Export:</p>
                
                <Button disabled={!this.props.props.imageURL|| !this.props.props.redirectURL || !this.props.props.cardText} onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(this.props.props)) }}>JSON</Button>
               
                <Button disabled={!this.props.props.imageURL || !this.props.props.redirectURL || !this.props.props.cardText} onClick={() => getImg(this.props.block)}>PNG</Button>
                <Button disabled={!this.props.props.imageURL || !this.props.props.redirectURL || !this.props.props.cardText} onClick={() => navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(<Banner testInit={(e: Node) => e} data={this.props.props} />))}>JSX</Button>

               
                

            </div>
        )
                }

}

export default editor
