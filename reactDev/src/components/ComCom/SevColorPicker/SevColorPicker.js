import React,{Component} from 'react';
import './SevColorPicker.scss'; 

import BlackButton from '../Buttons/BlackButton/BlackButton';
import ColorPicker from './ColorPicker/ColorPicker';

export default class SevColorPicker extends Component {

    state = {
        maxOPtionalColors : 2,
        currentOptionalColors : 0,
        selected : [],
        colors : this.props.colors || ['',],
    }

    componentDidUpdate() {
        if (this.state.colors[0] !== this.props.colors[0]){
            this.setState({
                colors : this.props.colors,
            })
        }
    }

    addColor = () => {
        let {maxOPtionalColors, currentOptionalColors} = this.state;
        if (currentOptionalColors < maxOPtionalColors){
            this.setState({
                currentOptionalColors : currentOptionalColors + 1,
            })
        }
    }

    delColor = () => {
        let {currentOptionalColors} = this.state;
        if (currentOptionalColors > 0){
            this.setState({
                currentOptionalColors : currentOptionalColors - 1,
            })
        }
    }

    onChange = (value, order) => {
        let selected = this.state.selected;
        selected[order] = value;
        this.setState({
            selected : selected
        })
        if (!this.props.onChange){
            console.error('Нет коллбэка, ну выбрали и выбрали (В SevColorPicker)');
            return
        }
        this.props.onChange(selected)
    }

    renderOptionalColors = () => {
        let optionalColors = [];
        for (let i = 0; i < this.state.currentOptionalColors; i++){
            optionalColors.push(
                    <ColorPicker
                        name = {'CP' + i} 
                        key = {'CP'+i}
                        order = {i+1} 
                        title = {`Доп. цвет: ${i+1}`}
                        onChange = {this.onChange}
                        colors = {this.state.colors}/>
            )
        }
        return optionalColors
    }

    render(){

        let optionalColors = this.renderOptionalColors();

        return(
            <div className="sevColorPicker">
                <ColorPicker 
                    title = 'Основной цвет:'
                    order = {0}
                    onChange = {this.onChange}
                    colors = {this.state.colors}/>
                <BlackButton 
                    text = 'Добавить цвет'
                    mode = 'border'
                    onClick = {this.addColor}
                    active = {this.state.currentOptionalColors < this.state.maxOPtionalColors? 'true' : 'false'}/>
                {optionalColors}
                <BlackButton
                        text = 'Удалить'
                        mode = 'border'
                        plusClass = 'del'
                        active = {this.state.currentOptionalColors > 0? 'true' : 'false'}
                        onClick = {this.delColor}/>
            </div>
        )
    }
}
