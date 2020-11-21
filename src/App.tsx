import React from 'react';
import {  Input, Form, Button} from 'antd';
import {setImageURL, setCardText} from './redux/action'
import { connect } from 'react-redux';
import { initialStateType } from './redux/reducer';
import Banner from './Banner'
import html2canvas from 'html2canvas';
import ReactDOMServer from 'react-dom/server';
import domtoimage from 'dom-to-image';
type propsType = {
  URL: string,
  cardText: string,
 
  setImageURL: (arg0: string) => void
  setCardText: (arg0: string) => void
}
function download(canvas: any, filename: any) {
  /// create an "off-screen" anchor tag
  var lnk = document.createElement('a'), e;

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  lnk.href = canvas.toDataURL("image/png;base64");

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } 
  
}

const getImg = (block: any) => {

  domtoimage.toPng(block)
    .then((dataUrl) => {
      
      let link = document.createElement('a');
     
      link.download = 'my-image-name.png';
      link.href = dataUrl;
      link.click();
    })

}
class App extends React.Component<propsType>{
  
 block: any
  constructor(props: propsType){
    super(props)
    
  }
  
  render(){
  
   
    return(
      <div className="main">
        <Banner testInit={(e: any) => this.block = e} data={this.props}/>
        <p>Export:</p>
        <Button onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(this.props))
            
                    
            console.log(JSON.stringify(this.props))
            }}>JSON</Button>
            <Button onClick={() => getImg(this.block)}>PNG</Button>
            <Button onClick={() =>  navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(  <Banner testInit={(e: any) => this.block = e} data={this.props}/>))}>JSX</Button>

        <Form>
          <Form.Item>
            <Input size="large" placeholder="Text"  onChange={(e) => this.props.setCardText(e.target.value)}/>
          
          </Form.Item>
          <Form.Item>
            <Input size="large" placeholder="URL image" onChange={(e) => this.props.setImageURL(e.target.value)}/>
          </Form.Item>
        </Form>
    
      </div>
    )
  }
}
const mapStateToProps = (state: initialStateType) => {
  return{
    URL: state.ImageURL,
    cardText: state.cardText
  }
}
export default connect(mapStateToProps, 
  {
    setImageURL,
    setCardText
  }
  )(App);
