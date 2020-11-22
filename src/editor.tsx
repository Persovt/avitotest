import React from 'react'
import { Input, Form, Button } from 'antd';

import domtoimage from 'dom-to-image';
import { propsType } from './App'


const getImg = (block: Node) => {

    domtoimage.toPng(block)
        .then((dataUrl) => {

            let link = document.createElement('a');

            link.download = 'my-image-name.png';
            link.href = dataUrl;
            link.click();
        })

}

interface props {

    props: propsType,
    block: HTMLElement

}

class editor extends React.Component<props> {



    constructor(props: props) {
        super(props)

    }


    render() {
        console.log(this.props.block)

        return (
            <div className="editor">



                <Form>
                    <Form.Item>
                        <Input size="small" placeholder="Text" maxLength={24} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.props.props.setCardText(event.target.value) }} />
                    </Form.Item>

                    <Form.Item>
                        <p className='error'>{this.props.props.errorImageURL}</p>

                        <Input size="large" placeholder="URL image" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.props.setImageURL(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <p className='error'>{this.props.props.errorRedirectURL}</p>
                        <Input size="large" placeholder="Redirect URl" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.props.setRedirectURL(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <span>BG Color:  </span>

                        <Input size="large" type="color" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.props.setBgColor(e.target.value)} />   {/* I want gradient 😭 */}

                    </Form.Item>
                    <Form.Item>
                        <span>Font Color:  </span>

                        <Input size="large" type="color" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.props.setFontColor(e.target.value)} />   {/* I want gradient 😭 */}

                    </Form.Item>
                </Form>

                <p>Export:</p>

                <Button disabled={!this.props.props.imageURL || !this.props.props.redirectURL || !this.props.props.cardText} onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(this.props.props))
                }}>JSON</Button>

                <Button disabled={!this.props.props.imageURL || !this.props.props.redirectURL || !this.props.props.cardText} onClick={() => getImg(this.props.block)}>PNG</Button>
                <Button disabled={!this.props.props.imageURL || !this.props.props.redirectURL || !this.props.props.cardText} onClick={() => navigator.clipboard.writeText(this.props.block.outerHTML)}>JSX</Button>




            </div>
        )
    }

}

export default editor
