from odoo import models, fields, api, _
import logging

_logger = logging.getLogger(__name__)


class View(models.Model):
	_inherit = 'ir.ui.view'
	type = fields.Selection(
		selection_add=[('gantt_view', "Gantt View")]
	)


class ActWindowView(models.Model):
	_inherit = 'ir.actions.act_window.view'
	view_mode = fields.Selection(
		selection_add=[('gantt_view', "Gantt View")],
		ondelete={'gantt_view': 'cascade'}
	)
