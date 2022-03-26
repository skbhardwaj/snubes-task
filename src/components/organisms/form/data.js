export default {
  form: {
    title: 'Find inbound call centers for your company',
    description: 'Use our AI and Big Data driven call center sourcing solution',
    fields: {
      company: {
        label: 'Company',
        placeholder: 'Company',
        validation: '',
        error: '',
      },
      name: {
        label: 'Name',
        placeholder: 'Full Name',
        validation: '',
        error: '',
      },
      phone: {
        label: 'Phone',
        placeholder: 'Phone',
        validation: '',
        error: '',
      },
      email: {
        label: 'Email',
        placeholder: 'name@mail.com',
        validation: '',
        error: '',
      },
    },
    buttons: {
      submit: 'Get informed',
    },
    error: 'Your information was not submitted due to an error. Please retry.',
    success: {
      title: 'Thank you for your request!',
      description:
        "You've taken the first step. Our experts will get in touch with you soon.",
    },
  },
}
