export default {
  swagger: '2.0',
  info: {
    title: 'Vuttr API',
    description: 'This is a simple api for VUTTR application',
    version: '1.0',
  },
  produces: ['application/json'],
  paths: {
    '/session': {
      post: {
        tags: ['/session'],
        consumes: 'application/json',
        description: 'Description Test',
        parameters: [
          {
            name: 'email',
            in: 'formData',
            required: true,
            type: 'string',
            format: 'email',
          },
          {
            name: 'password',
            in: 'formData',
            required: true,
            type: 'string',
            format: 'password',
          },
        ],
        responses: {},
      },
    },
    '/user': {
      post: {
        tags: ['/user'],
        consumes: 'application/json',
        description: 'Create user',
        parameters: [
          {
            name: 'name',
            in: 'formData',
            required: true,
            type: 'string',
          },
          {
            name: 'email',
            in: 'formData',
            required: true,
            type: 'string',
            format: 'email',
          },
          {
            name: 'password',
            in: 'formData',
            required: true,
            type: 'string',
            format: 'password',
          },
        ],
        responses: {},
      },
    },
  },
};