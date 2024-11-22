# -*- coding: utf-8 -*-

# Klystron Global LLC
# Copyright (C) Klystron Global LLC
# All Rights Reserved
# https://www.klystronglobal.com/ LJY

{
	"name": "Custom View Demo",
	"summary": """
        Custom View
    """,
	"description": """
        Custom View
    """,
	"author": "KS",
	"depends": ["autonsi_library", "hr"],
	"data": [
		'views/hr_employee.xml',
		'views/department.xml',
		'views/menu.xml'
	],
	"assets": {
		"web.assets_backend": [
			"custom_view/static/src/js/**/*.js",
			"custom_view/static/src/css/*.css",
		],
		"web.assets_qweb": [
			"custom_view/static/src/xml/*.xml",
		],
	},
}
