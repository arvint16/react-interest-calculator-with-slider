import React, {Component} from 'react'
import taskImage from './taskImage.PNG'
import './App.css';

const footerContent = <>'*Estimated earnings are based on -1.16% per annum before tax and any potential losses.
As with most forms of investment, peer-to-peer leading carris a degree of risk to your capital; in this case, if borrowers were unable to 
repay their loans.'</>

const perYearValue = (5000/86).toFixed(2) , feesValue = (perYearValue/10).toFixed(2)

export default class App extends Component {

  constructor(props){
  super(props)
    this.state = {
      amountValue: 5000,
      perYear: perYearValue,
      fees: feesValue,
      inputField:false
    };
  }

  yearCalc =(value) => {
    this.setState({perYear:(value/86).toFixed(2)},() => this.feesCalc(this.state.perYear)) 
   }

   feesCalc = (value) => {
     this.setState({fees: (value/10).toFixed(2)})
   }

  handleAmountChange = (event,key) => {
    if(key === 'input' && event.target.value <= 260000){
      this.setState({inputField:true})
    }
    else this.setState({inputField:false})

  if(event.target.value <= 260000){
    this.setState({amountValue: event.target.value}, () => 
    this.yearCalc( event.target.value)
  )
}
  };

  render() {

    const {
      amountValue,
      perYear,
      fees,
      inputField
    } = this.state

    return (
      <div className="App">
      <div className='container'>
        <div>
          <img src={taskImage} alt='image' width='100%' height='50%'/>
          </div>
      <div className='content'>
      <div>
    <div style={{fontSize:'24px'}} onChange={(e)=>this.handleAmountChange(e,'input')}> 
    With 
    <div className='inputFieldContainer'>
    <span style={{borderBottom:'1px solid #03A9F4'}}>
    $ {!inputField ?
     <input type='number' className='inputField' value={amountValue}/> :
    <input type='number' className='inputField' />
   } 
    </span>
    </div>   
    your estimated earnings could be<span className='earningContent'>$- {perYear}</span>* per year with fees of just
    <span className='feesContent'>$- {fees}</span>per year 
    </div>

      <div className='footerContent'>{footerContent} </div>
    </div>
    <input className="slider" title={`$${amountValue}`} type="range" min="0" max="260000"  width='100%' value={amountValue} onChange={(e)=>this.handleAmountChange(e,'slider')} />
    <div className='sliderValue'>{`$${amountValue}`}</div>
    </div>
    </div>
      </div>
    );
  }
}

