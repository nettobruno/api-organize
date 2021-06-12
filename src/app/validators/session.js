import { celebrate, Segments, Joi } from 'celebrate';

class ValidatorSession {
  constructor() {
    this.create = celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required().min(6),
      }),
    });
  }
}

export default new ValidatorSession();
