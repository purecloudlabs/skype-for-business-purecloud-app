import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver,

    init() {
        this._super(...arguments);

        window.App = this;
    },

    serviceFor(name) {
        return this.__container__.lookup(`service:${name}`);
    },

    componentFor: function (id) {
        return this.__container__.lookup('-view-registry:main')[id];
    }
});

loadInitializers(App, config.modulePrefix);

export default App;
