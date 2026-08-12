from odoo import fields, models


class ResPartner(models.Model):
    _inherit = 'res.partner'

    x_internal_code = fields.Char(string='內部編號')
