interface IMailConfig {
  driver: 'ethereal'| 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    }
  }
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'jckr.knaul@gmail.com',
      name: 'José Carlos Knaul',
    }
  }
} as IMailConfig;
