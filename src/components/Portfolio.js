import React, { Component } from 'react';
import Popup from "reactjs-popup";

export default class Portfolio extends Component {

  constructor(props) {
   super(props);
   this.state = {
     open: false,
     selectedProject: null,
     projectItems: null

    };
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
   //not this
   this.onProjectSelect = this.onProjectSelect.bind(this);
 }

 openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }
//not this
  onProjectSelect(item){

    this.setState({
      open: true,
      selectedProject: item,
      projectItems: this.renderItems(item)

    });
    console.log("this was clicked");
    console.log(item.contribution);
  }


// not this
  renderItems(item){
  if (item != null){
     return(

       <div className="row">
         <div className="twelve columns collapsed">
         <Popup open={this.state.open}
         closeOnDocumentClick
         onClose={this.closeModal}
       >
         <div className="modal">
           <a className="close" onClick={this.closeModal}>
             &times;
           </a>
          <div className="header">
          {item.name}
          </div>
           <img src={`${item.projectImage}`}/>
           <p>{item.projectDescription}</p>
           <br/>
           <img src={`${item.supportImage}`}/>
           <p>{item.supportimageDescription}</p>
         </div>
       </Popup>

       </div>

       </div>

     );

  }
  else {
    return(
      <div></div>

    )
   }
}



  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" >
          {


            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div key={item.key} className="columns portfolio-item">

                  <div className="item-wrap">
                    <a onClick={() => this.onProjectSelect(item)}>

                      <img src={`${item.imgurl}`}  className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5 className="portitem"> {item.name}</h5>
                          <p>{item.description}</p>
                          <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
                            <div className="popup-modal">




                             <div className="header" id="project-title">
                             {item.name}
                              <hr/>
                             </div>


                             <p >{item.projectDescription}</p>
                             <img className="modal-pic" src={`${item.projectImage}`} />
                             <p className="popup-descriptions">{item.projectimageDescription}</p>
                             <br/>
                             <img className="modal-pic" src={`${item.supportImage}`}/>
                             <br/>
                             <p className="popup-descriptions">{item.supportimageDescription}</p>



                           </div>
                           <a className="close" id="back-button" onClick={this.closeModal}> ⬅️ Back! </a>
                          </Popup>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

              )
            })
          }











          </div>
        </div>
      </div>
  </section>
        );
  }
}
