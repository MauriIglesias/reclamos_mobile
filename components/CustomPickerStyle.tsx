import { Component } from "react";
import PropTypes from 'prop-types';

// Aca se crean los props para un Componente Customizado

export default class CustomPickerStyle extends Component {
    static propTypes = {
     opcion: PropTypes.string,
     containerStyle: PropTypes.any,
     style: PropTypes.any,
     autoFocus: PropTypes.bool,
     editbale: PropTypes.bool,
     textColor: PropTypes.string,
     onChangeText: PropTypes.func,
     value: PropTypes.string,
     placeholder: PropTypes.string,
   }
 }