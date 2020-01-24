import React,{Component} from 'react';
import './List.scss';

import RadioButton    from '../../ComCom/RadioButton/RadioButton';

//Для работы этосу компоненту нужно:
// title - заголовок
// items {
//     name
//     popUpIconSRC
// }
// activeItems - список активых элементов
// domen
// radioChecked - функция вызываемая при переключении элементов

export default class List extends Component {

    renderRadio = () => {
        let {items, activeItems, constant, domen, radioChecked} = this.props
        let radioButtons = []
        let i = 1;
        for (let item of items){
            radioButtons.push(
                <RadioButton 
                    id = {i++} 
                    name = 'RB' 
                    key = {item.name + i + constant} 
                    text = {item.name}
                    icon = {domen + item.popUpIconSRC}
                    active = {activeItems.includes(item.name)}
                    onChecked = {radioChecked}
                    />
            )
        }
        return radioButtons
    }
    

    render(){

        let radioButtons = this.renderRadio()

        return(
            <div className="list">
                <h2>{this.props.title}</h2>
                <ul>
                    {radioButtons}
                </ul> 
            </div>
        )
    }
}
