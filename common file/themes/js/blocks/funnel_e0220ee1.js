const funnelBlocks = document.querySelectorAll('.block-funnel');

funnelBlocks.forEach((tabs) => {

  const btns = tabs.querySelectorAll('button')
  const mobilebtns = tabs.querySelectorAll('.funnel-mobile-nav button')
  const panels = tabs.querySelectorAll('.funnel-content__section')

  // SET THE DEFAULT FUNNEL LAYER STATES
  btns.forEach((btn, index) => {                
    if(index == 0) {
      btn.setAttribute('aria-selected', 'true')
    } else {
      btn.setAttribute('aria-selected', 'false')      
    }    
  })

   // SET THE DEFAULT MOBILE NAV BUTTON STATES
   mobilebtns.forEach((btn, index) => {                
    if(index == 0) {
      btn.setAttribute('aria-selected', 'true')
    } else {
      btn.setAttribute('aria-selected', 'false')      
    }    
  })

  // SET THE DEFAULT PANEL STATES
  panels.forEach((panel, index) => {
    if(index == 0) {
      panel.setAttribute('aria-hidden', 'false')
    } else {
      panel.setAttribute('aria-hidden', 'true')      
    }    
  })

  // TABS FUNCTIONALITY
  btns.forEach((btn) => {

    btn.addEventListener('click', (e) => {

      // get our ID
      const target = btn.getAttribute('aria-controls');
      console.log(target);
    
      // get all funnel buttons
      const allBtns = document.querySelectorAll('.block-funnel button'); 
      allBtns.forEach((btn) => {
        btn.setAttribute('aria-selected', 'false')
      })

      // find the clicked/target buttons
      const targetBtns = document.querySelectorAll(`[aria-controls="${target}"]`);

      // update the clicked/target buttons
      targetBtns.forEach((btn) => {
        btn.setAttribute('aria-selected', 'true')
      })
      
      // update panel states
      const thisPanelID = btn.getAttribute('aria-controls')
      const thisPanel = document.getElementById(thisPanelID)
      panels.forEach((panel) => {
        panel.setAttribute('aria-hidden', 'true')
      })  
      thisPanel.setAttribute('aria-hidden', 'false')     
                                    
    })

  })

})