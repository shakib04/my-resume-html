class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'}); // Encapsulated DOM
        shadow.innerHTML = `
        <style>
          .my-component { /* Styles are scoped to the component */
            color: blue;
          }
        </style>
        <div class="my-component">
          <h2>Component Title</h2>
          <p>Component content.</p>
        </div>
      `;
    }
}
customElements.define('my-component', MyComponent);

export default MyComponent