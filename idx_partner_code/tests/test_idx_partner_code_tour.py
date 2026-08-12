from odoo.tests import HttpCase, tagged


@tagged('post_install', '-at_install')
class TestIdxPartnerCodeTour(HttpCase):

    def test_idx_partner_code_tour(self):
        partner = self.env['res.partner'].create({
            'name': 'Tour 內部編號測試聯絡人',
        })
        url = f'/web#id={partner.id}&model=res.partner&view_type=form'
        self.start_tour(url, 'idx_partner_code_tour', login='auto_test_user')
