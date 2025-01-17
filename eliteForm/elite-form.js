import {LitElement, html} from 'lit';
import internalValMethods from './elite-form-rules'

export class EliteForm extends LitElement {

  static properties = {
    type: {},
    label: {},
    placeholder: {},
    id: {},
    name: {},
    validationRules: {}, // this isthe prop that the dev passes in
    errors: {},
    errorBehavior: {}, 
    styles: {}, 
  }

  static state = {
    internalValMethods: internalValMethods  // we import this from elite-forms-rules
  }

  constructor() {
    super();
    this.value = '';
    this.type = '',
    this.label = '',
    this.placeholder = '',
    this.id = '',
    this.errors = '',
    this.styles = {}
  }

  render() {
    return html`
      <div>
        <input @blur=${() => {internalValMethods.email('patrick@mojica.com')}}>
      </div>
    `;
  }
  
}

window.customElements.define('elite-form', EliteForm)