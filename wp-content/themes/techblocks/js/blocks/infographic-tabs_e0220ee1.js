let infoTabs = document.querySelectorAll('.infographic-tabs');

infoTabs.forEach(tabsSection => {
  
  let tablabels = tabsSection.querySelectorAll('.tab-label');
  let tabpanels = tabsSection.querySelectorAll('.tab-panel');

  tablabels.forEach(label => {

    label.addEventListener('click', () => {

      let labelControls = label.getAttribute('aria-controls');
      let panel = document.getElementById(labelControls);    

      tabpanels.forEach(item => {
        if(panel !== item) {
          item.setAttribute('aria-hidden', 'true');
        }
      });
      panel.setAttribute('aria-hidden', 'false');

      tablabels.forEach(item => {
        if(label !== item) {
          item.setAttribute('aria-selected', 'false');
        }
      });
      label.setAttribute('aria-selected', 'true');

    });
  });
});