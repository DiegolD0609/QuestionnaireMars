import React, {Component} from "react";
import "./styles.css";


class Checkboxes extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        counts: [],

        numb: 0,

        explain1:"",
        explain2:"",
        explain3:"",
        explain4:"",
        explain5:[],
        explain6:"",
        explain7:"",
        explain8:"",
        explain9:"",


        label1: "1.-Is the Packaging Material intended for direct food contact?",
        label2: "2.-Has the packaging material been designed to release any components into the foodstuff or the confined air space?",
        label3: "3.-Does the packaging material contain a functional barrier to prevent migration of components out of the packaging material and into the food?",
        label4: "4.-Please identify the barrier:",

        answe1:false,
        answe2:false,
        answe3:false,
        answe4:false,
        answe5:false,
        answe6:false,
        answe7:false,
        answe8:false,
        answe9:false,
        answe10:false,
        answe11:false,
        answe12:false,

        count: 0,

        disabled: true,

        plusTotal:0,

    }
    handleChange1 = (event) => {
        const isTexted =event.target.value;
        this.setState({explain1 : isTexted});
    }


    handleChange2 = (event) => {
        const isTexted = event.target.value;
        this.setState({explain2 : isTexted});
    }
    handleChange3 = (event) => {
        const isTexted = event.target.value;
        this.setState({explain3 : isTexted});
    }
    handleChange4 = (event) => {
        const isTexted = event.target.value
        this.setState({explain4 : isTexted});
    }

    handleChange5 = (event) => {
        const isTexted = event.target.value;
        this.setState({explain5 : isTexted});

    }

    handleChange6 = (event) => {
        const isTexted = event.target.value
        this.setState({explain6 : isTexted});
    }
    handleChange7 = (event) => {
        const isTexted = event.target.value
        this.setState({explain7 : isTexted});
    }

    handleChange8 = (event) => {
        const isTexted = event.target.value
        this.setState({explain8 : isTexted});
    }
    handleChange9 = (event) => {
        const isTexted = event.target.value
        this.setState({explain9 : isTexted});
    }


    handleInputChangeOne = (event) => {
        const isChecked = event.target.checked
        let sum = 1;
        const disableds= this.state.disabled;
        if (isChecked) {
            this.setState({count: this.state.count + sum});
            this.setState({ counts: [...this.state.counts, event.target.value] }); 
            this.setState({ answe1 : isChecked  });
            this.setState({disabled: disableds});
            
        }else{
            this.setState({count: this.state.count - sum});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe1 : isChecked  });

        }
        

    }
    rendertag1(){
        if(this.state.answe1 === true){
            return <span className="correctans">follow The next question</span>
        } else if(this.state.answe1 === false){ 
            return <div className="conditional"> </div>
        }

    }


    handleInputChangeTwo = (event) => {
        const isCheckedTwo = event.target.checked
        let sum1 = 1;
        const disableds= this.state.disabled;
        if (isCheckedTwo) {
            this.setState({count: this.state.count + sum1});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({answe2: isCheckedTwo});
            this.setState({disabled: disableds});
        }else{
            this.setState({count: this.state.count - sum1});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({answe2: isCheckedTwo});
        }
    }


    rendertag2(){
        if(this.state.answe2 === true){
            return <div className="input-container">
                <label className="input-label">Please explain:
                <br></br>
                <input
                    type="text"
                    value={this.state.explain1}
                    onChange={this.handleChange1}
                    className="input-text"
                    placeholder="Be specific with your answer"
                >
                </input>
                </label>
            </div> 

        } else{ 
            return <div className="conditional"> </div>
        }
    }

    handleInputChangetree = (event) => {
        const isCheckedThree = event.target.checked
        let sum2 = 1;
        const disableds= this.state.disabled;
        if (isCheckedThree) {
            this.setState({count: this.state.count + sum2});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe3: isCheckedThree});
            this.setState({disabled: disableds});

        }else{
            this.setState({count: this.state.count - sum2});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe3: isCheckedThree});
        }

    }
    rendertag3(){
        if(this.state.answe3 === true){
            return  <div className="input-container">
            <label className="input-label">Please explain:
            <br></br>
            <input
                type="text"
                value={this.state.explain2}
                onChange={this.handleChange2}
                className="input-text"
                placeholder="Be specific with your answer"
            >
            </input>
            </label>
        </div> 
        } else if(this.state.answe3 === false){ 
            return <div className="conditional"> </div>
        }
    }
    handleInputChangefour = (event) => {
        const isCheckedFour = event.target.checked
        const disableds= this.state.disabled;
        let sum3 = 1;
        if (isCheckedFour) {
            this.setState({count: this.state.count + sum3});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe4: isCheckedFour});
            this.setState({disabled: disableds});
        }else{
            this.setState({count: this.state.count - sum3});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe4: isCheckedFour});

        }

    }

    rendertag4(){
        if(this.state.answe4 === true){
            return <span className="correctans">follow The next question</span>
        } else if(this.state.answe4 === false){ 
            return <div className="conditional"> </div>
        }
    }

    handleInputChangeFive = (event) => {
        const isCheckedFive = event.target.checked;
        const disableds= true;

        let sum4 = 1;
        if (isCheckedFive) {
            this.setState({count: this.state.count + sum4});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe5: isCheckedFive});
            this.setState({disabled: disableds});
        }else{
            this.setState({count: this.state.count - sum4});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe5: isCheckedFive});
            this.setState({disabled: disableds});
        }

    }

    rendertag5 () {
        if (this.state.answe5 === true) {
            return <div className="input-container">
            <label className="input-label">{this.state.label4}
            <br></br>
            <input
                type="text"
                value={this.state.explain3}
                onChange={this.handleChange3}
                className="input-text"
                placeholder="type the commercial name "
            >
            </input>
            </label>
        </div> 
        } else {
            return <div className="conditional"> </div>
        }
    }
    handleInputChangeSix = (event) => {
        const isCheckedSix = event.target.checked;
        const disableds= true;
        let sum5 = 1;
        if (isCheckedSix) {
            this.setState({count: this.state.count + sum5});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe6: isCheckedSix});
            this.setState({disabled: disableds});

        }else{
            this.setState({count: this.state.count - sum5});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe6: isCheckedSix});
            this.setState({disabled: disableds});

        }

    }

    rendertag6(){
        if(this.state.answe6 === true){
            return<div className="input-container">
            <label className="input-label"> Please explain:
            <br></br>
            <input
                type="text"
                value={this.state.explain3}
                onChange={this.handleChange3}
                className="input-text"
                placeholder="Be specific with your answer "
            >
            </input>
            </label>
        </div> 
        } else if(this.state.answe6 === false){ 
            return <div className="conditional"> </div>
        }
    }

    handleInputChangeSeven = (event) => {
        const isCheckedSeven = event.target.checked;
        const disableds= true;
        let sum6 = 1;
        const plustotal= this.state.plusTotal;
        let sumtotal =2;
        if (isCheckedSeven) {
            this.setState({count: this.state.count + sum6});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe7: isCheckedSeven});
            this.setState({disabled: disableds});
            this.setState({ plusTotal: plustotal + sumtotal })

        }else{
            this.setState({count: this.state.count - sum6});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe7: isCheckedSeven});
            this.setState({disabled: disableds});
            this.setState({ plusTotal: plustotal - sumtotal })

        }

        console.log(plustotal);

    }

    rendertag7(){
        const checkedNine= this.state.answe9;
        const checkedTen= this.state.answe10;
        const checkedEleven= this.state.answe11;
        const checkedTwelve= this.state.answe12;
        if(this.state.answe7 === true){
            return <><><><><><>
            <hr className=" separate-div"  />
            <div className="question-container">
                <span className="question">Percent (%) of recycled material:</span>
            </div>
            <div className="input-container">
                <label className="input-label"> 
                    <br></br>
                    <input
                        type="text"
                        value={this.state.explain5}
                        onChange={this.handleChange5}
                        className="input-text"
                        placeholder=" Type the percent  "
                    >
                    </input>
                </label>
            </div>
            <div>
            </div>
            <hr className=" separate-div"  />
            <div className="question-container">
                <span className="question">Source of the recycled material:</span>
            </div>
            <div className="input-container">
                <label className="input-label"> 
                    <br></br>
                    <input
                        type="text"
                        value={this.state.explain9}
                        onChange={this.handleChange9}
                        className="input-text"
                        placeholder=" Type the percent  "
                    >
                    </input>
                </label>
            </div>
            </>
            <hr className=" separate-div"  />
                <div className="question-container">
                    <span className="question">Does the recycled content have direct food contact?</span>
                </div>
                <div className="outer-container">
                    <div className="checkbox-container">
                        <div className="checkbox-group">
                            <label className="icon-checkbox"> Yes
                                <input
                                    type="checkbox"
                                    name="counts"
                                    value="Yes"
                                    onChange={this.handleInputChangeNine} />
                                <span className="checkbox-icon"></span>
                            </label>
                        </div>
                        <div className="checkbox-group">
                            <label className="icon-checkbox"> No
                                <input
                                    type="checkbox"
                                    name="counts"
                                    value="No"
                                    onChange={this.handleInputChangeTen} />
                                <span className="checkbox-icon"></span>
                            </label>
                        </div>
                    </div>
                </div></><div>
                    {checkedNine && checkedTen ? (
                        <p>Please only select one option</p>
                    ) : checkedNine ? (
                        <span>
                            {this.rendertag71()}
                        </span>
                    ) : checkedTen ? (
                        <span>
                            {this.rendertag72()}
                        </span>
                    ) : (
                        <p className="condition"></p>
                    )}
                </div></>
                <hr className=" separate-div"  />
                <><div className="input-container">
                    <div className="question-container">
                        <span className="question">Please provide a brief description of the recycling process:</span>
                    </div>
                    <label className="input-label">
                        <br></br>
                        <input
                            type="text"
                            value={this.state.explain6}
                            onChange={this.handleChange6}
                            className="input-text"
                            placeholder=" Be specific with your answer "
                        >
                        </input>
                    </label>
                </div></></>
                <hr className=" separate-div"  />
                <div className="question-container">
                    <span className="question">Has the Recycling Process been subjected to review by a Regulatory Body?</span>
                </div><div className="outer-container">
                    <div className="checkbox-container">
                        <div className="checkbox-group">
                            <label className="icon-checkbox"> Yes
                                <input
                                    type="checkbox"
                                    name="counts"
                                    value="Yes"
                                    onChange={this.handleInputChangeeleven} />
                                <span className="checkbox-icon"></span>
                            </label>
                        </div>
                        <div className="checkbox-group">
                            <label className="icon-checkbox"> No
                                <input
                                    type="checkbox"
                                    name="counts"
                                    value="No"
                                    onChange={this.handleInputChangetwelve} />
                                <span className="checkbox-icon"></span>
                            </label>
                        </div>
                    </div>
                </div></><div>
                    {checkedEleven && checkedTwelve ? (
                        <p>Please only select one option</p>
                    ) : checkedEleven ? (
                        <span>
                            {this.rendertag73()}
                        </span>
                    ) : checkedTwelve ? (
                        <span>
                            {this.rendertag74()}
                        </span>
                    ) : (
                        <p className="condition"></p>
                    )}
                </div></>
        } else{ 
            return <div className="conditional"> </div>
        }
    }

    handleInputChangeEight = (event) => {
        const isCheckedEight = event.target.checked;
        const disableds= true;
        let sum7 = 1;
        if (isCheckedEight) {
            this.setState({count: this.state.count + sum7});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe8: isCheckedEight});
            this.setState({disabled: !disableds});

        }else{
            this.setState({count: this.state.count - sum7});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe8: isCheckedEight});
            this.setState({disabled: disableds});

        }

    }

    rendertag8(){
        if(this.state.answe8 === true){
            return <span className="correctans">Click on Go Next </span>
        } else {
            return <div className="conditional"> </div>
        }
    }

    rendertag71(){
        if(this.state.answe9 === true){
            return<div className="input-container">
            <label className="input-label"> Please explain:
            <br></br>
            <input
                type="text"
                value={this.state.explain7}
                onChange={this.handleChange7}
                className="input-text"
                placeholder="Be specific with your answer "
            >
            </input>
            </label>
        </div> 
        } else{ 
            return <div className="conditional"> </div>
        }
    }

    rendertag72(){
        if(this.state.answe10 === true){
            return <span className="correctans">Follow the next question </span>
        } else {
            return <div className="conditional"> </div>
        }
    }

    rendertag73(){
        if(this.state.answe11 === true){
            return<div className="input-container">
            <label className="input-label"> Please explain:
            <br></br>
            <input
                type="text"
                value={this.state.explain8}
                onChange={this.handleChange8}
                className="input-text"
                placeholder="Give a brief explanation "
            >
            </input>
            </label>
        </div> 
        } else{ 
            return <div className="conditional"> </div>
        }
    }

    rendertag74(){
        if(this.state.answe12 === true){
            return <span className="correctans">Click on Go Next to follow the questionnaire</span>
        } else {
            return <div className="conditional"> </div>
        }
    }


    handleInputChangeNine = (event) => {
        const isCheckedNine = event.target.checked;
        const disableds= true;
        let sum7 = 1;
        if (isCheckedNine) {
            this.setState({count: this.state.count + sum7});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe9: isCheckedNine});
            this.setState({disabled: disableds});

        }else{
            this.setState({count: this.state.count - sum7});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe9: isCheckedNine});
            this.setState({disabled: disableds});

        }

    }

    handleInputChangeTen = (event) => {
        const isCheckedTen = event.target.checked;
        const disableds= true;
        let sum7 = 1;
        if (isCheckedTen) {
            this.setState({count: this.state.count + sum7});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe10: isCheckedTen});
            this.setState({disabled: disableds});

        }else{
            this.setState({count: this.state.count - sum7});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe10: isCheckedTen});
            this.setState({disabled: disableds});

        }

    }

    handleInputChangeeleven = (event) => {
        const isCheckedeleven = event.target.checked;
        const disableds= true;
        let sum7 = 1;
        if (isCheckedeleven) {
            this.setState({count: this.state.count + sum7});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe11: isCheckedeleven});
            this.setState({disabled: !disableds});

        }else{
            this.setState({count: this.state.count - sum7});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe11: isCheckedeleven});
            this.setState({disabled: disableds});

        }

    }
    handleInputChangetwelve = (event) => {
        const isCheckedtwelve = event.target.checked;
        const disableds= true;
        let sum7 = 1;
        if (isCheckedtwelve) {
            this.setState({count: this.state.count + sum7});
            this.setState({ counts: [...this.state.counts, event.target.value] });
            this.setState({ answe12: isCheckedtwelve});
            this.setState({disabled: !disableds});

        }else{
            this.setState({count: this.state.count - sum7});
            let index = this.state.counts.indexOf(event.target.value);
            this.state.counts.splice(index, 1);
            this.setState({ counts: this.state.counts });
            this.setState({ answe12: isCheckedtwelve});
            this.setState({disabled: disableds});

        }

    }
 

    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.counts);

    }

    rendertagFinal() {
        if (this.state.answe7 === true){
            if (this.state.answe11 === true){
                return <div>
                    <h5>¡You have completed this section!</h5>
                    <a href="ReadOnly">Go next</a>
                </div> 
            } else if (this.state.answe12 === true) {
                return <div>
                    <h5>¡You have completed this section!</h5>
                    <a href="ReadOnly">Go next</a>
                </div> 
            } else {
                return <span className="conditional"></span>
            }
        } else if (this.state.answe8 === true ){
            return <div>
                <h5>¡You have completed this section!</h5>
                <a href="ReadOnly">Go next</a>
            </div> 
        } else {return <span className="conditional"></span>

        }
    }
    

    render() { 
        const sumTotal= this.state.plusTotal;
        const totalCheckboxes = 4;
        const progressPercentage = (this.state.count / (totalCheckboxes + sumTotal)) * 100;

        const checkedOne = this.state.answe1;
        const checkedTwo = this.state.answe2;
        const checkedThree = this.state.answe3;
        const checkedFour = this.state.answe4;
        const checkedFive = this.state.answe5;
        const checkedSix = this.state.answe6;
        const checkedSeven = this.state.answe7;
        const checkedEight = this.state.answe8;

        





        return (
            <body>
                <div className="back1">
                    <div className="grid-container">


                        <div className="grid-child">
                            <div id="quest">
                            <h1>Packaging Screener</h1>
                            <br /><br />
                            <form onSubmit={this.onSubmit}>
                                <div className="question-container" >
                                    <span className="question" >{this.state.label1}</span>
                                </div>
                                <div className="outer-container" >
                                    <div className="checkbox-container" >
                                                                    
                                    <div  className="checkbox-group">
                                        <label className="icon-checkbox">
                                        <input
                                            type="checkbox"
                                            name="counts"
                                            value="Yes"
                                            onChange={this.handleInputChangeOne} 
                                            />
                                            Yes
                                            <span className="checkbox-icon"></span>
                                        </label>
                                        <span className="checkbox-label"> </span>
                                    </div>
                                    <div className="checkbox-group">
                                        <label className="icon-checkbox"> No
                                        <input
                                            type="checkbox"
                                            name="counts"
                                            value="No"
                                            onChange={this.handleInputChangeTwo} />
                                            <span className="checkbox-icon"></span>
                                        </label>
                                        
                                    </div>
                                </div>
                                </div>
                                <br></br>
                                <div>
                                    {checkedOne && checkedTwo ? (
                                    <p>Please only select one option</p>
                                    ) :  checkedOne ? (
                                        <span>
                                            {this.rendertag1()}
                                        </span>
                                    ) :  checkedTwo ?(
                                        <span>
                                            {this.rendertag2()}
                                        </span>
                                    ) : (
                                        <p className="condition"></p>
                                    )}
                                </div>

                                <br />
                                <div className="question-container">
                                    <span className="question">{this.state.label2}</span>
                                </div>
                                <div className="outer-container">
                                    <div className="checkbox-container" >
                                        <div className="checkbox-group">
                                            <label className="icon-checkbox"> Yes
                                            <input
                                                type="checkbox"
                                                name="counts"
                                                value="Yes"
                                                onChange={this.handleInputChangetree} />
                                                <span className="checkbox-icon"></span>
                                            </label>
                                        </div>
                                        <div className="checkbox-group">
                                            <label className="icon-checkbox"> No
                                            <input
                                                type="checkbox"
                                                name="counts"
                                                value="No"
                                                onChange={this.handleInputChangefour} />
                                                <span className="checkbox-icon"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                    <div>
                                        {checkedThree && checkedFour ? (
                                        <p>Please only select one option</p>
                                        ) :  checkedThree ? (
                                            <span>
                                            {this.rendertag3()}
                                            </span>
                                        ) :  checkedFour ?(
                                            <span>
                                                {this.rendertag4()}
                                            </span>
                                        ) : (
                                            <p className="condition"></p>
                                        )}
                                    </div>
                                <br />    


                                <div className="question-container">
                                    <span className="question">{this.state.label3}</span>
                                </div>
                                <div className="outer-container">
                                    <div  className="checkbox-container">
                                        <div className="checkbox-group">
                                            <label className="icon-checkbox"> Yes
                                            <input
                                            type="checkbox"
                                            name="counts"
                                            value="Yes"
                                            onChange={this.handleInputChangeFive} />
                                            <span className="checkbox-icon"></span>
                                            </label>
                                        </div>
                                        <div className="checkbox-group">
                                            <label className="icon-checkbox"> No
                                            <input
                                            type="checkbox"
                                            name="counts"
                                            value="No"
                                            onChange={this.handleInputChangeSix} />
                                            <span className="checkbox-icon"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                        {checkedFive && checkedSix? (
                                        <p>Please only select one option</p>
                                        ) :  checkedFive ? (
                                            <span>
                                            {this.rendertag5()}
                                            </span>
                                        ) :  checkedSix ?(
                                            <span>
                                                {this.rendertag6()}
                                            </span>
                                        ) : (
                                            <p className="condition"></p>
                                        )}
                                    </div>

                                <br />
                                <hr className=" separate-div"  />

                                <div className="question-container">
                                    <span className="question">4.-Does the Packaging Material or any packaging components contain recycled materials?</span>
                                </div>
                                <div className="outer-container">
                                    <div  className="checkbox-container">
                                        <div className="checkbox-group">
                                            <label className="icon-checkbox"> Yes
                                            <input
                                            type="checkbox"
                                            name="counts"
                                            value="Yes"
                                            onChange={this.handleInputChangeSeven} />
                                            <span className="checkbox-icon"></span>
                                            </label>
                                        </div>
                                        <div className="checkbox-group">
                                            <label className="icon-checkbox"> No
                                            <input
                                            type="checkbox"
                                            name="counts"
                                            value="No"
                                            onChange={this.handleInputChangeEight} />
                                            <span className="checkbox-icon"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {checkedSeven && checkedEight ? (
                                    <p>Please only select one option</p>
                                    ) :  checkedSeven ? (
                                        <span>
                                            {this.rendertag7()}
                                        </span>
                                    ) :  checkedEight ?(
                                        <span>
                                            {this.rendertag8()}
                                        </span>
                                    ) : (
                                        <p className="condition"></p>
                                    )}
                                </div>
                            </form>
                            </div>
                        </div>


                        <div className="grid-child">
                            <div id="quest1">
                                <br></br>
                                <h3>Your Progress</h3>
                                <br></br>
                                <br></br>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${progressPercentage}%` }} >
                                        {this.state.count.toFixed(2)}%
                                    </div>
                                </div>
                                <br /><br />
                                <br /><br />
                                <button type="submit" value='Submit' disabled={this.state.disabled} onClick={this.onSubmit}> Submit</button>
                                <br></br><br></br>
                                <div>
                                    <span>{this.rendertagFinal()}</span>
                                </div>



                            </div>
                        </div>

                    </div>

                
                </div>
            </body>




        );

    }
}
 
export default Checkboxes;