odoo.define("custom_view_demo.CustomView", function (require) {
    "use strict";

    // Pulling the MVC parts
    const CustomController = require("custom_view_demo.CustomController");
    const CustomModel = require("custom_view_demo.CustomModel");
    const CustomRenderer = require("custom_view_demo.CustomRenderer");

    const AbstractView = require("web.AbstractView");
    const core = require("web.core");

    // Our Renderer is an OWL Component so this is needed
    const RendererWrapper = require("web.RendererWrapper");
    const view_registry = require("web.view_registry");

    const ControlPanel = require("web.ControlPanel");
    const SearchPanel = require("web.searchPanel");

    const _lt = core._lt;

    const CustomView = AbstractView.extend({
        accesskey: "m",
        display_name: _lt("Gantt View"),
        icon: "fas fa-columns",
        config: _.extend({}, AbstractView.prototype.config, {
            Controller: CustomController,
            Model: CustomModel,
            Renderer: CustomRenderer,
            ControlPanel,
            SearchPanel
        }),
        viewType: "gantt_view",
        searchMenuTypes: ["filter", "favorite"],
        search_panel: true,
        withSearchBar: true,
        withSearchPanel: true,
        withControlPanel: true,

        /**
         * @override
         */
        init: function () {
            this._super.apply(this, arguments);
        },

        getRenderer(parent, state) {
            state = Object.assign(state || {}, this.rendererParams);
            return new RendererWrapper(parent, this.config.Renderer, state);
        },
    });

    // Make the view of type "mps_view" actually available and valid
    // if seen in an XML or an action.
    view_registry.add("gantt_view", CustomView);

    return CustomView;
});
