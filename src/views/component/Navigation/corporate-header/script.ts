Polymer({
  is: name,
  properties: {
    siteName: String,
    variation: 0,
    siteUrl: {
      type: String,
      value: '/'
    },
    fullbleed: {
      type: Boolean,
      value: true
    }
  },
  created: function() {
    /* What this does is to visualize whatever nav-item will do if it was not yet loaded.
      We might wanna add same thing to corporate-footer later if we wanna keep using Polymer...
      TODO: mohammed - Not necessary any more as we will load components when and where needed if we are using the npm-package. For the CDN all components will be concatenated into a full version av CorporateUI
      */
    if (window['params'] && window['params'].preload === 'false') {
      var items = this.querySelectorAll('nav-item');
      for(var i=0; i<items.length; i++) {
        var item = items[i];
        if ( !(item.children.length && item.children[0].nodeName === 'A') ) {
          item.innerHTML = '<a href="' + item.getAttribute('location') + '">' + item.innerHTML + '</a>';
        }
      }
    }
  },
  ready: function() {
    if (window['params'] && window['params'].preload !== 'false') {
      var url = this.resolveUrl('../../Bootstrap/navbar/nav-item/nav-item.html');
      this.importHref(url);
    }
  },
  attached: function() {
    this.style.display = 'block';
  }
});