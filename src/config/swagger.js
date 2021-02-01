module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Very Useful Tools To Remember(VUTTR)',
    description: 'This is a simple api for VUTTR application',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  tags: [
    {
      name: 'Session',
    },
    {
      name: 'User',
    },
    {
      name: 'Tools',
    },
  ],
  paths: {
    '/session': {
      post: {
        tags: ['Session'],
        summary: 'Create a new session',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/UserSession',
              },
            },
          },
        },
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
          },
          400: {
            description: 'Failed. Bad post data.',
          },
          401: {
            description: 'Failed. Not authorized',
          },
        },
      },
    },
    '/user': {
      post: {
        tags: ['User'],
        summary: 'Create a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/User',
              },
            },
          },
        },
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
          },
          400: {
            description: 'Failed. Bad post data.',
          },
        },
      },
    },
    '/tools': {
      get: {
        tags: ['Tools'],
        summary: 'Get all tools',
        produces: ['application/json'],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Failed. Not authorized',
          },
        },
      },
      post: {
        tags: ['Tools'],
        summary: 'Create a new Tool',
        produces: ['application/json'],
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                  },
                  link: {
                    type: 'string',
                  },
                  description: {
                    type: 'string',
                  },
                  tags: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'OK',
          },
          400: {
            description: 'Failed. Bad post data.',
          },
          401: {
            description: 'Failed. Not authorized',
          },
        },
      },
    },
    '/tools/{id}': {
      delete: {
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        tags: ['Tools'],
        summary: 'Delete a tool',
        produces: ['application/json'],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Failed. Not authorized',
          },
        },
      },
    },
  },
  definitions: {
    User: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
    UserSession: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  },
};
