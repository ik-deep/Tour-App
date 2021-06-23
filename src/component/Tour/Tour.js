import React,{useState} from 'react'
import "./Tour.scss";


function Tour(props) {
const [infoStatus, setinfoStatus] = useState(false);

const{id,city,img,name,info} = props.item;
const ClickHandler = () => {
    setinfoStatus(!infoStatus);
}

const { removeTour } = props;

    return (
        <div className="tour">
            <artical  >
                <div className="img-container">
                    <img src={img} alt=""/>
                    <span className="close-btn">
                        <i className="fas fa-window-close" onClick={() => removeTour(id)}/>
                    </span>

                </div>
                <div className="tour-info">
                     <h3>{city}</h3>
                     <h4>{name}</h4>
                     <h5>info{" "}
                        <span>
                          <i className="fa fa-caret-square-down" onClick={ClickHandler}/>
                        </span>
                     </h5>
                     {infoStatus && 
                     <p>{info}</p>
                     }
                </div>
            </artical> 
            </div>

    );
}

export default Tour;
