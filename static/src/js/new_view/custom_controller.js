odoo.define("custom_view_demo.CustomController", function (require) {
    "use strict";

    const AbstractController = require("web.AbstractController");
    const core = require('web.core');
    const _t = core._t;

    const CustomController = AbstractController.extend({
        custom_events: _.extend({}, AbstractController.prototype.custom_events, {}),

        /**
         * @override
         * @param parent
         * @param model
         * @param renderer
         * @param {Object} params
         */
        init: function (parent, model, renderer, params) {
            this._super.apply(this, arguments);
            this.renderer = renderer;
            this.model = model;
            this.params = params;
        },
    });

    return CustomController
});
