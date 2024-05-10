if (typeof (ss) === 'undefined' || typeof (ss.i18n) === 'undefined') {
  console.error('Class ss.i18n not defined')
} else {
  ss.i18n.addDictionary('en', {
    /** new **/
    'vat.InclVat': 'incl. %s % VAT',
    'vat.ExclVat': 'excl. VAT',
    'vat.PriceVatText': 'Prices excl. VAT',
    'vat.PriceVatInclText': 'Prices incl. %s % VAT',
    'kapa.id': '18198dde-3712-453f-b05a-2c55b22c23c1',
    'kapa.disclaimer': 'Do not transmit any personal or sensitive data via the chatbot. All information on the processing of personal data can be found at https://www.hetzner.com/legal/privacy-policy/. The Hetzner online chatbot is a test of AI systems to enhance our support offering. By using the chatbot, you agree to the following terms and conditions: The chatbot provides general information and cannot guarantee that it is complete, accurate or up-to-date. Information from the chatbot does not constitute binding advice. Please refer directly to our documentation https://docs.hetzner.com/ for binding information. Hetzner Online is not liable for any damages that may result from the use of the chatbot, in particular with regard to the accuracy of the information provided. By using the chatbot, you accept these terms and conditions. If you have any feedback for us, please send an email to feedback@hetzner.com.'
  })
}
