import './helpers';
import Store from './store';
import Model from './model';
import Template from './template';
import View from './view';
import Controller from './controller';

/*global $on */
'use strict';

/**
 * Sets up a brand new Todo list.
 *
 * @param {string} name The name of your new to do list.
 */
function Todo(name) {
    this.storage = new Store(name);
    this.model = new Model(this.storage);
    this.template = new Template();
    this.view = new View(this.template);
    this.controller = new Controller(this.model, this.view);
}

var todo = new Todo('todos-vanillajs');

function setView() {
    todo.controller.setView(document.location.hash);
}
setView();
$on(window, 'hashchange', setView);
