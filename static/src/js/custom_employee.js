/** @odoo-module **/
const FormRenderer = require("web.FormRenderer");
const {Component} = owl;
const {onWillStart, onMounted, useState} = owl.hooks;
const {ComponentWrapper} = require("web.OwlCompatibility");
const {_t} = require('web.core');

import CustomViewComponent from 'custom_view.CustomViewComponent';

/**
 * Override the form renderer so that we can mount the component on render
 * to any div with the class o_partner_order_summary.
 */
FormRenderer.include({
	async _renderView() {
		await this._super(...arguments);
		for (const element of this.el.querySelectorAll(".employee_custom_area")) {
			const component = new ComponentWrapper(this, CustomViewComponent,
				{
					state: this.state,
					test: "test"
				})
			await component.mount(element);
		}
	}
});