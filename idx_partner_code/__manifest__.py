{
    'name': 'idx聯絡人內部編號',
    'summary': '聯絡人表單新增內部編號欄位',
    'description': '在聯絡人（res.partner）表單新增可自行填寫並儲存的「內部編號」文字欄位。',
    'author': 'IDX',
    'version': '17.0.1.0.0',
    'depends': ['base'],
    'data': [],
    'assets': {
        'web.assets_tests': [
            'idx_partner_code/static/tests/tours/idx_partner_code_tour.js',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
