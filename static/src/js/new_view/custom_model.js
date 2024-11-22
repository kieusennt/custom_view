odoo.define("custom_view_demo.CustomModel", function (require) {
    "use strict";

    const AbstractModel = require("web.AbstractModel");

    const CustomModel = AbstractModel.extend({

        __get: function () {
            return this.data;
        },

        __load: function (params) {
            console.log(this)
            console.log(params)

            this.modelName = params.modelName;
            // this.domain = [["parent_id", "=", false]];
            this.domain = params.domain;
            this.context = params.context;
            this.plan_type = params.context.plan_type
            // It is the better to get domains from params
            // but we will evolve our module later.
            this.data = {};
            return this._fetchData();
        },

        __reload: function (handle, params) {
            if ("domain" in params) {
                this.domain = params.domain;
            }
            return this._fetchData();
        },

        _fetchData: function () {
            const self = this;

            return this._rpc({
                model: this.modelName,
                method: "search",
                args: [this.domain]
                // kwargs: {
                // 	domain: this.domain,
                // },
            }).then(function (result) {
                console.log(result)
                self.data.items = result;
            });
        },
    });

    return CustomModel;
});
