class CardUnidades extends HTMLElement {
    constructor() {
      super();
    
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
    }
  
    build() {
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");
  
      const cardImg = document.createElement("img");
      cardImg.src = this.getAttribute("image");
      cardImg.alt = "Unidade";
      cardImg.setAttribute("class", "cardI");
  
      const cardTitle = document.createElement("a");
      cardTitle.textContent = this.getAttribute("unidade");
      cardTitle.href = this.getAttribute("cardUrl");
      cardTitle.setAttribute("class", "cardT");
  
      const endereço = document.createElement("p");
      const enderecoText = document.createTextNode(this.getAttribute("endereço") + " ");
      endereço.appendChild(enderecoText);
      endereço.appendChild(document.createElement("br")); 
      const cidadeText = document.createTextNode(this.getAttribute("cidade") + " ");
      endereço.appendChild(cidadeText);
      endereço.appendChild(document.createElement("br")); 
      const cepText = document.createTextNode("CEP: " + this.getAttribute("cep"));
      endereço.appendChild(cepText);
      endereço.setAttribute("class", "cardEnd");
      
      const contato = document.createElement("p");
      const callImg = document.createElement("img");
      callImg.src = "../img/call.png";
      callImg.alt = "sda";
      callImg.style.width = "12px";
      callImg.style.height = "12px";
  
      const whatsappImg = document.createElement("img");
      whatsappImg.src = "../img/🦆 icon _whatsapp_blue.png";
      whatsappImg.alt = "sdad";
      whatsappImg.style.width = "12px";
      whatsappImg.style.height = "12px";
  
      contato.appendChild(callImg);
      contato.appendChild(document.createTextNode(this.getAttribute("contato")));
      contato.appendChild(document.createElement("br"));
      contato.appendChild(whatsappImg);
      contato.appendChild(document.createTextNode(this.getAttribute("contato")));
      contato.setAttribute("class", "cardC");
  
      componentRoot.appendChild(cardImg);
      componentRoot.appendChild(cardTitle);
      componentRoot.appendChild(endereço);
      componentRoot.appendChild(contato);
  
      return componentRoot;
    }
  
    styles() {
      const style = document.createElement("style");
      style.textContent = `
        .card{
            height: auto; 
            width: 225px; 
            padding: 0px 1px;
            border-radius: 4px;
            overflow: hidden;
        }
        .cardI{
            width: 220px; 
            height: 155px;
            border-radius: 8px;
            padding: 5px;
        }
        .cardT{
            color: #1B75BC; 
            font-size: 22px;
            font-family: 'Anybody';
            text-decoration: none;
            display: block;
            margin-left: 10px;
            padding: 5px;
            font-weight: bold;
        }
        .cardEnd{
            font: italic;
            font-family: 'Anybody';
            margin-left: 5px;
            padding: 5px;
            font-weight: bold;
        }
        .cardC{
            color: #1B75BC;
            margin-left: 5px;
            padding: 5px;
            font-weight: bold;
        }
        .cardC img {
            vertical-align: middle;
            margin-right: 5px;
          }
        `;
  
      return style;
    }
  }
  
  customElements.define("card-unidades", CardUnidades);
  