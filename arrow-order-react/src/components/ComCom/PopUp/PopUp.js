import React,{Component} from 'react';
import './PopUp.scss'; 
import {connect} from 'react-redux'; 

import {popUpActive}  from '../../../actions/popUpActions';
import {setCakeParts} from '../../../actions/cakeConstructorActions';

import BlackButton    from '../../ComCom/BlackButton/BlackButton';
import requestService from '../../../servises/requestService';
import Details        from '../../ComCom/Details/Details';
import List           from '../../ComCom/List/List';

import IndredientsMaster from '../IngredientsMaster/IngredientsMaster';

class PopUp extends Component {

    RequestService = new requestService(this.props.domen)

    state = {
        allUlitems : [],
        activeUlitems : [],
        selected : '',
        buttonActive : 'false',
        constant : 0,
        prevContent : null,
        description : '',
    }

    bg = React.createRef();
    popup = React.createRef();

    componentDidMount() {
        this.setStyle();
        document.querySelector("html").style.overflow = 'hidden';
    }

    componentDidUpdate() {
        this.setStyle()
        this.updateUlItems();
    }

    componentWillUnmount() {
        document.querySelector("html").style.overflow = '';
    }

    closePopUp = (event) => {
        if (event.target.hasAttribute('closeable') 
            && event.target.getAttribute('closeable') === 'true'){
            this.props.popUpActive(false);
        }            
    }

    updateUlItems = () => {
        if (this.props.content !== this.state.prevContent){
            console.log(this.props.content);
            console.log(this.props.parts);
            this.RequestService.getCakeInfo(this.props.content, this.props.parts)
            .then((res) => {
                let active = []
                try{active = res.active.map(item => item.name)} // При сбросе вылетает исключение, ловим его
                catch{}
                this.setState({
                    allUlitems : res.all || [], // Так же ловим исключение про сбросе
                    activeUlitems : active,
                    selected : '',
                    buttonActive : 'false',
                    prevContent : this.props.content,
                })                           
            })
        } 
    }

    setStyle = () => {
        if (this.props.active) {
            this.bg.current.classList.remove('hide')
            this.bg.current.style.backgroundColor = 'rgba(115,115,115,0.5)';
            this.popup.current.classList.remove('hide')
        } else {
            this.bg.current.style.backgroundColor = 'rgba(115,115,115,0)';
            this.popup.current.classList.add('hide')
            setTimeout(() => {                
                try{
                    this.bg.current.classList.add('hide')
                }
                catch{
                    console.log('Непонятная ошибка');
                }
            }, 500);
        }
    }

    radioChecked = (event) => {
        this.setState({
            selected : event.target.dataset.value,
            buttonActive : 'true',
        })
    }

    partSubmit = () => {
        if (this.state.buttonActive === 'true'){
            this.props.setCakeParts({
                filling : this.props.content === 'Начинка'? this.state.selected : '',
                biscuit : this.props.content === 'Бисквит'? this.state.selected : '',
                cream   : this.props.content === 'Крем'? this.state.selected : '',
            })
            let now = new Date();
            this.setState({
                buttonActive : 'false',
                selected : '',
                constant : now.getMilliseconds(),
            })
        }            
    }

    defSummary = () => {
        let summary = '';
        if (this.state.selected){
            summary = this.state.selected + ' ' + this.props.content.toLowerCase();
        }
        if (this.state.activeUlitems.length === 0) {
            summary = 'Нет подходящих вариантов, измените состав';
        }
        return summary
    }

    getDescription = async () => {
        if (this.state.selected){
            let hashtag = this.state.allUlitems
            .filter(item => item.name === this.state.selected)
            .map(item => item.hashtag)[0];
            this.RequestService.getWikiCard(hashtag)
            .then(res => {
                if (this.state.description !== res.text){
                    this.setState({
                        description : res.text,
                    })
                }                
            });
        }        
    }

    render(){

        let summary = this.defSummary();

        this.getDescription();

        return(
            <>
            <div className="background" 
                 ref = {this.bg}></div>
            <div className="popup"
                 closeable='true'
                 onClick = {this.closePopUp}  
                 ref = {this.popup}>
                <div className="line"></div>
                <div className="content">
                    <IndredientsMaster/>
                    <List 
                        title = {this.props.content}
                        items = {this.state.allUlitems}
                        activeItems = {this.state.activeUlitems}
                        domen = {this.props.domen}
                        radioChecked = {this.radioChecked}
                        constant = {this.state.constant}/>
                    <div className="add">
                        <Details
                            summary = {summary}
                            height = {'24vh'}>
                                {this.state.description}
                        </Details>
                        <BlackButton 
                            text = 'Добавить' 
                            active={this.state.buttonActive}
                            onClick = {this.partSubmit}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        domen : state.domen,
        active : state.popUp.active,
        content : state.popUp.content,
        parts : {
            filling : state.cakeParts.filling,
            biscuit : state.cakeParts.biscuit,
            cream : state.cakeParts.cream,
        }
    })
} 

const mapDispatchToProps = {
    popUpActive : popUpActive,
    setCakeParts: setCakeParts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)
