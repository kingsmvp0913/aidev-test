/** @odoo-module **/

import { registry } from "@web/core/registry";

const LABEL_SELECTOR = "label.o_form_label:contains('內部編號')";
const INPUT_SELECTOR =
    `div.o_field_widget:right-of(${LABEL_SELECTOR}) input, ` +
    `${LABEL_SELECTOR} + div input`;
const TEST_VALUE = "TOUR001";

registry.category("web_tour.tours").add("idx_partner_code_tour", {
    steps: () => [
        {
            content: "acceptance 1：確認聯絡人表單上看得到『內部編號』欄位標籤",
            trigger: LABEL_SELECTOR,
            run: () => {},
        },
        {
            content: "acceptance 2：在『內部編號』欄位輸入文字",
            trigger: INPUT_SELECTOR,
            run: `edit ${TEST_VALUE}`,
        },
        {
            content: "點擊儲存",
            trigger: "button.o_form_button_save",
            run: "click",
        },
        {
            content: "確認已離開編輯狀態（儲存完成）",
            trigger: "body:not(:has(button.o_form_button_save))",
            run: () => {},
        },
        {
            content: "重新整理頁面以重新開啟該筆聯絡人的表單",
            trigger: "body",
            run: () => {
                window.location.reload();
            },
        },
        {
            content: "acceptance 2：重新開啟後『內部編號』欄位仍保有先前輸入的內容",
            trigger:
                `div.o_field_widget:right-of(${LABEL_SELECTOR}) input[value='${TEST_VALUE}'], ` +
                `${LABEL_SELECTOR} + div input[value='${TEST_VALUE}']`,
            run: () => {},
        },
    ],
});
