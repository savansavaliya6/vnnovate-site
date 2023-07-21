let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(accordionItem =>{
    let btn = accordionItem.querySelector('.accordion-button');    
    let panel = accordionItem.lastElementChild;
    let panels = document.querySelectorAll('.accordion-panel');
    let btns = document.querySelectorAll('.accordion-button');
    btn.addEventListener('click', () => {
      
      panels.forEach(panelItem =>{            
        if(panel !== panelItem){
          panelItem.setAttribute('aria-hidden', 'true')                
        }
      })

      btns.forEach(btnItem =>{            
        if(btn !== btnItem){
          btnItem.setAttribute('aria-expanded', 'false')
        }
      })

      btn.setAttribute('aria-expanded', `${!(btn.getAttribute('aria-expanded') === 'true')}`)
      panel.setAttribute('aria-hidden', `${!(panel.getAttribute('aria-hidden') === 'true')}`)
        
    });
});