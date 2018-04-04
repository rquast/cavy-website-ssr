import {DOM} from 'aurelia-pal';

export const TRANSFORMER_TYPES = {
  page: {
    type: 'meta',
    key: 'name',
    value: 'content',
    elements: [
      'description',
      'keywords'
    ]
  },
  opengraph: {
    type: 'meta',
    key: 'property',
    value: 'content',
    elements: [
      'og:type',
      'og:image',
      'og:image:height',
      'og:image:width',
      'og:title',
      'og:site_name',
      'og:description',
      'og:url'
    ]
  }
};


/**
 * Mutates header elements with an attribute of au-ssr-id with data from a set of variables
 */
export default {

  variables: {},

  headers: {},

  getElements: function(name, config) {
    let transformer = TRANSFORMER_TYPES[name];
    let elements = [];

    for (let key of transformer.elements) {
      let el = DOM.createElement(transformer.type);
      el.setAttribute(transformer.key, key);
      el.setAttribute(transformer.value, config[key]);
      el.setAttribute('au-ssr-id', name + '.' + key);
      elements.push(el);
    }

    return elements;
  },

  appendElements: function() {
    let head = DOM.querySelectorAll('head');

    for (let name in this.variables) {
      if (this.variables.hasOwnProperty(name)) {
        let elements = this.getElements(name, this.variables[name]);
        for (let element of elements) {
          head[0].appendChild(element);
        }
      }
    }
  },

  removeElements: function() {
    let head = DOM.querySelectorAll('head');
    let nodes = head[0].querySelectorAll('[au-ssr-id]');
    for (let node of nodes) {
      DOM.removeNode(node, head[0]);
    }
  },

  mutate: function(config) {
    if (config.variables) {
      this.variables = config.variables;
    } else {
      // take the home route variables
      this.variables = config.navModel.router.routes[0].variables;
    }
    if (typeof window !== 'undefined') {
      // remove elements each time a browser loads or route changes
      this.removeElements();
    }
    this.appendElements();
  }

};
