import React from 'react';
import { setImageURL, setCardText, setRedirectURL,setColor } from './redux/action'
import { connect } from 'react-redux';
import { initialStateType } from './redux/reducer';
import Banner from './Banner'
import 'antd/dist/antd.css';
import Editor from './editor'

type propsType = {
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

class App extends React.Component<propsType>{
  block: any
 
  constructor(props: propsType) {
    super(props)

  }
  
  render() {
    

    return (
      <div className="main">

        
        
        <Editor props={this.props} block={this.block}/>
        <Banner testInit={(e: Node) => {this.block = e}} data={this.props} />
        


       </div>
    )
  }
}
const mapStateToProps = (state: initialStateType) => {
  return {
    imageURL: state.ImageURL,
    redirectURL: state.RedirectURL,
    cardText: state.cardText,
    errorImageURL: state.errorURLImage,
    errorRedirectURL: state.errorURL,
    Color: state.Color
  }
}
export default connect(mapStateToProps,
  {
    setImageURL,
    setRedirectURL,
    setCardText,
    setColor
  }
)(App);
